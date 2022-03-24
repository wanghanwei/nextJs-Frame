exports.getFileHeaderTmpl = () => {
  let fileHeaderTmpl = `/* eslint-disable no-undef */
  /* eslint-disable camelcase */
  // 该文档由脚本自动生成，请勿修改
  // {{ description }}
  import Fetcher from '../Fetcher';
  
  const fetch = new Fetcher();
  `;
  return fileHeaderTmpl;
};

exports.getTmpl = () => {
  const tmpl = `
  /**
   * {{ description }}
   * {@link {{docPath}}/{{ functionName }}}.
   */
  interface {{ functionName }}Ref {
    request: (
      params?: {
        {% if (pathParam.length > 0) %}
        path: 
          {
            {% for item in pathParam %}
            // {{ item.description }}
            {{ item.name }}  {{ "" if item.required else "?" }}: {{ item.type }},{% endfor %}
          }{% endif %}
        {% if (queryParam.length > 0) %}
        query?: 
          {
            {% for item in queryParam %}
            // {{ item.description }}
            {{ item.name }}  {{ "" if item.required else "?" }}: {{ item.type }},{% endfor %}
          }{% endif %}
        {% if ((dataParam.length > 0) and (ifFormData === false)) %}
        // {{ dataParam[0].description }}
        data?: {{ dataParam[0].type }}
        {% endif %}
        {% if (ifFormData === true) %}
          data?: FormData, 
        {% endif %}
      },
      options?: any
    ) => Promise<{{responsesType|safe}}>,

  }
  
  export const {{ functionName }}: {{ functionName }}Ref = {
    request: (
      params,
      options: any = {}
    ) => {
      return fetch.fetch(params, {
        ...options,
        ...{
          url: '{{ basePath }}{{ url }}',
          method: '{{ method }}',
          msg: '请求[{{description}}]出错',
          {{ "consume: '" + consume + "',"  if item.required else "" }}
        },
      });
    }
  };
  
  `;
  return tmpl;
};

exports.getIndexFileTmpl = () => {
  let fileHeaderTmpl = `
  // 该文档由脚本自动生成，请勿修改
  {% for name, value in tags %}
  import * as {{ name }} from './{{ name }}.model';{% endfor %}
  
  export {
    {% for name, value in tags %}
    {{ name }},
    {% endfor %}
  }
  `;
  return fileHeaderTmpl;
};
