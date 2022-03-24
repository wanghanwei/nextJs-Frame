// const morgan = require('morgan');
const express = require('express');
const nextJS = require('next');
const { CLSMiddleware } = require('./libs/CLS.lib');
const { requestLogMiddleware } = require('./libs/requestLog.lib');
const Logger = require('./utils/logger.util');
const logger = Logger.createLogger('[server]');
// const { renderAndCache } = require('./utils/cache.util');
// const { parse } = require('url');

const port = parseInt(process.env.PORT, 10) || 3003;
const dev = process.env.NODE_ENV !== 'production';
const app = nextJS({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(requestLogMiddleware);

  // server.use(
  //   morgan('combined', {
  //     skip: function (req) {
  //       // 忽略大部分静态文件
  //       return req.url.startsWith('/_next/') || req.url.startsWith('/__nextjs');
  //     },
  //   })
  // );

  server.get('/static/*', function (req, res) {
    return handle(req, res);
  });

  CLSMiddleware(server);

  // server.use((req, res) => {
  //   const parsedUrl = parse(req.url, true);
  //   const { pathname, query = {} } = parsedUrl;
  //   return renderAndCache(app, req, res, pathname, query);
  // });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    logger.info(`> Ready on http://localhost:${port}`);
  });
});
