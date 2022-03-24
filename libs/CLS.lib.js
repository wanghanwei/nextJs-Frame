// 使用cls-hooked来共享请求
// TODO 该方式可能存在CPU泄露的问题
// https://github.com/bmeurer/async-hooks-performance-impact/blob/master/README.md
// https://github.com/Jeff-Lewis/cls-hooked/issues/50
// 参考：https://clakech.github.io/cls-hooked-sample/

const cls = require('cls-hooked');
const CLS_NAMESPACE = 'CLS_NAMESPACE';

module.exports.CLSMiddleware = (app) => {
  const ns = cls.createNamespace(CLS_NAMESPACE);
  app.use((req, res, next) => {
    ns.bindEmitter(req);
    ns.bindEmitter(res);
    ns.run(() => {
      // 把baseURL写入到调用栈的命名空间中
      cls.getNamespace(CLS_NAMESPACE).set('headers', req.headers);
      cls.getNamespace(CLS_NAMESPACE).set('expressSetHeader', (key, value) => {
        const lastHeader = res.getHeader(key);
        let newHeader = value;
        if (Array.isArray(lastHeader)) {
          if (Array.isArray(lastHeader)) {
            newHeader = [...newHeader, ...lastHeader];
          } else {
            newHeader = lastHeader.push(newHeader);
          }
        }
        // 去重
        newHeader = Array.from(new Set(newHeader));
        res.header(key, newHeader);
      });
      next();
    });
  });
};

// 获取客户端传过来的header
module.exports.getRequestHeaders = (allowed = []) => {
  const ns = cls.getNamespace(CLS_NAMESPACE);
  if (ns) {
    const headers = ns.get('headers');
    if (headers) {
      // 注意这里是区分大小写的
      return Object.keys(headers)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = headers[key];
          return obj;
        }, {});
    }
  }
  return {};
};

module.exports.setResponseHeaders = (headers, allowed = []) => {
  const ns = cls.getNamespace(CLS_NAMESPACE);
  if (ns) {
    const expressSetHeader = ns.get('expressSetHeader');
    if (typeof expressSetHeader === 'function' && headers) {
      // 注意这里是区分大小写的
      return Object.keys(headers).map((key) => {
        if (allowed.includes(key)) {
          // 把header回写到浏览器
          expressSetHeader(key, headers[key]);
        }
      });
    }
  }
  return {};
};

module.exports.setRequestHeaders = (headers, allowed = []) => {
  const ns = cls.getNamespace(CLS_NAMESPACE);
  if (ns) {
    const expressSetReqHeader = ns.get('expressSetReqHeader');
    if (typeof expressSetReqHeader === 'function') {
      // 遍历响应的headers
      return Object.keys(headers).map((key) => {
        if (allowed.includes(key)) {
          // 把header回写到req
          expressSetReqHeader(
            key === 'set-cookie' ? 'cookie' : key,
            headers[key]
          );
        }
      });
    }
  }
  return {};
};
