const onFinished = require('on-finished');
// const onHeaders = require('on-headers');
const Logger = require('../utils/logger.util');
const logger = Logger.createLogger('[requestLog]');

/**
 * Get request IP address.
 *
 * @private
 * @param {IncomingMessage} req
 * @return {string}
 */

function getip(req) {
  return (
    req.ip ||
    req._remoteAddress ||
    (req.connection && req.connection.remoteAddress) ||
    null
  );
}

/**
 * Record the start time.
 * @private
 */

// function recordStartTime() {
//   this._startAt = process.hrtime();
//   this._startTime = new Date();
// }

module.exports.requestLogMiddleware = (req, res, next) => {
  if (req.url.startsWith('/_next/') || req.url.startsWith('/__nextjs')) {
    return next();
  }
  //   req._startAt = null;
  //   req._startTime = null;
  req._remoteAddress = getip(req);
  //   res._startAt = null;
  //   res._startTime = null;
  //   recordStartTime.call(req);
  function logRequest() {
    logger.info(
      `${req._remoteAddress} ${req.method} ${req.url} ${res.statusCode} ${req.headers['user-agent']}`
    );
  }

  // record response start
  //   onHeaders(res, recordStartTime);

  // log when response finished
  onFinished(res, logRequest);
  return next();
};
