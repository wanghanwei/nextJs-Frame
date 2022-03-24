/* eslint-disable no-unused-vars */
// 从swagger文档中自动生成
const axios = require('axios').default;
const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');
const sw2dts = require('sw2dts');
const { getFileHeaderTmpl, getTmpl, getIndexFileTmpl } = require('./template');
const config = require('./config.json');
const excludeTagNames = require('./exclude');

const { swaggerUrl, output, forceOverwrite, host } = config;

// const addServer = false;

// function getGetParamName(operationId) {
//   return operationId.replace('UsingGET', 'GetParam');
// }

// 生成描述文件
function createRefFile(data) {
  console.info('creating ref file');
  const option = {
    namespace: 'ServiceRef',
    // includes GET query parameters.
    // withQuery: true,
    // modify GET query parameters interface name.
    // nameResolver: function (filePath, pathDefinition, options) {
    //   // console.log(filePath, pathDefinition, options);
    //   // console.log(pathDefinition.operationId)
    //   const getParamName = getGetParamName(pathDefinition.get.operationId);
    //   return getParamName; // WARN: sw2dts will convert this name to PascalCase.
    // },
  };
  // 给返回的数据结构加一个httpStatus字段
  Object.keys(data.definitions).forEach((key) => {
    if (key.startsWith('ApiResponse')) {
      data.definitions[key].properties.httpStatus = {
        type: 'number',
      };
    }
  });
  sw2dts.convert(data, option).then(function (dts) {
    fs.writeFileSync(output + '/ServiceRef.d.ts', dts);
  });
}

function uppperFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDeepTypeClassName(schema) {
  let itemType = null;
  if (schema.type && schema.type === 'array') {
    itemType = schema.items.originalRef;
  } else {
    itemType = schema.originalRef;
  }
  // console.log(schema.type, schema);
  if (itemType && itemType.indexOf('«') > -1) {
    let newType = '';
    const array = itemType.split(/«|»/);
    array.forEach((str) => {
      if (str) {
        newType += uppperFirstChar(str);
      }
    });
    itemType = newType + '_';
  }
  if (schema.type && schema.type === 'array') {
    itemType = `Array<ServiceRef.${itemType}>`;
    return itemType;
  }
  // map特殊处理
  if (itemType === 'map') {
    itemType = 'MapStringObject_';
  }
  return 'ServiceRef.' + itemType;
}

function transformSGType2TSType(sgType) {
  switch (sgType) {
    case 'integer':
      return 'number';
    case 'string':
      return 'string';
    default:
      return 'any';
  }
}

// 通过whistle控制流量到k8s开发环境
axios
  .get(swaggerUrl, {
    proxy: {
      host: '127.0.0.1',
      port: 8899,
    },
  })
  .then((result) => {
    if (result.data.swagger !== '2.0') {
      throw new Error('unknow support swagger version');
    }
    // 生成描述文件
    createRefFile(result.data);
    const outputPath = `${output}/models`;
    // 删除掉老的modles文件夹
    fs.rmdirSync(outputPath, { recursive: true });
    fs.mkdirSync(outputPath);

    const Specification = result.data;
    const BasePath = Specification.basePath;
    // const DocPath = `https://${Specification.host}${BasePath}/doc.html`;
    const DocPath = `https://${host}${BasePath}/doc.html`;
    console.info('got swagger specification from: ' + swaggerUrl);
    console.info('Using BasePath: ' + BasePath);
    const ApiByTag = {};

    // 以Tag为维度分类Api
    for (let i = 0; i < Specification.tags.length; i++) {
      const CurrentTag = Specification.tags[i];
      // 提取前面的名字
      // CurrentTag:
      //   {
      // 		"name": "C端用户接口",
      // 		"description": "User Controller"
      // 	}
      const TagName = CurrentTag.description
        .split(' Controller')[0]
        .replace(/\s+/g, '');
      
      if (excludeTagNames && excludeTagNames.includes(TagName)) continue;

      ApiByTag[TagName] = {
        fileName: `${uppperFirstChar(TagName)}.model.ts`,
        content: nunjucks.renderString(getFileHeaderTmpl(), {
          description: CurrentTag.name,
          host,
          basePath: BasePath,
        }),
      };

      for (let [keyOfPaths, valueOfPaths] of Object.entries(
        Specification.paths
      )) {
        // 是否匹配
        let isMatched = false;
        for (let [keyOfMethod, valueOfMethod] of Object.entries(valueOfPaths)) {
          if (valueOfMethod.tags[0] === CurrentTag.name) {
            isMatched = true;
            const functionName = valueOfMethod.operationId;
            // 路径参数
            const pathParam = [];
            // query参数
            const queryParam = [];
            // body参数
            const dataParam = [];
            // 传输类型  "multipart/form-data" 等
            let consume = null;
            if (valueOfMethod.consumes && valueOfMethod.consumes.length > 0) {
              consume = valueOfMethod.consumes[0];
            }
            if (Array.isArray(valueOfMethod.parameters)) {
              valueOfMethod.parameters.forEach((parameter) => {
                let type = 'any';
                // console.log('parameter', parameter);
                if (parameter.type) {
                  type = transformSGType2TSType(parameter.type);
                } else if (parameter.schema) {
                  type = getDeepTypeClassName(parameter.schema);
                }

                const commonParams = {
                  name: parameter.name,
                  required: parameter.required,
                  description: parameter.description,
                  type,
                };

                if (parameter.in === 'path') {
                  pathParam.push(commonParams);
                } else if (parameter.in === 'query') {
                  queryParam.push(commonParams);
                } else if (parameter.in === 'body') {
                  dataParam.push(commonParams);
                }
              });
            }
            let ifFormData = false;
            if (consume && consume.indexOf('form') > -1) {
              ifFormData = true;
            }

            // 返回的数据类型
            let responsesType = 'any';

            if (
              valueOfMethod.responses['200'] &&
              valueOfMethod.responses['200'].schema
            ) {
              const schema = valueOfMethod.responses['200'].schema;
              if (schema.type) {
                responsesType = transformSGType2TSType(schema.type);
              } else if (schema.schema) {
                responsesType = getDeepTypeClassName(schema.schema);
              }
            }

            const templateString = getTmpl();
            const templateConfig = {
              basePath: BasePath,
              description: valueOfMethod.summary,
              functionName,
              method: keyOfMethod,
              // 去除双横杠
              url: keyOfPaths.replace(/\/\//g, '/'),
              // server: "CPS_SERVER",
              params: valueOfMethod.parameters,
              docPath: DocPath + '#/2.X版本/' + CurrentTag.name,
              // paramDefName,
              pathParam,
              queryParam,
              dataParam,
              consume,
              // 是否是form
              ifFormData,
              responsesType,
            };
            // console.log(templateConfig);
            const renderString = nunjucks.renderString(
              templateString,
              templateConfig
            );
            ApiByTag[TagName].content += renderString;
          }
        }
        if (isMatched) {
          delete Specification.paths[keyOfPaths];
        }
      }
      const pathOfFile = path.resolve(outputPath, ApiByTag[TagName].fileName);

      fs.writeFileSync(pathOfFile, ApiByTag[TagName].content);
    }
    // 生成索引文件

    const indexRenderString = nunjucks.renderString(getIndexFileTmpl(), {
      tags: ApiByTag,
    });

    fs.writeFileSync(path.resolve(outputPath, './index.ts'), indexRenderString);
  })
  .catch((e) => {
    console.error(e);
  });
