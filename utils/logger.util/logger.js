const { levelAlias, LEVELS, colors } = require('./constants');
const dateFormat = require('./dateFormat');
const { formatArgs } = require('./utils');
let wslog = null;

// 容器中把日志打印到文件
if (typeof window === 'undefined' && process.env.NODE_CONFIG_ENV) {
  const winston = require('winston');
  require('winston-daily-rotate-file');
  const config = require('config');
  const transport = new winston.transports.DailyRotateFile({
    filename: config.logPath + 'app-%DATE%.log',
    // filename: './app-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    // zippedArchive: true,
    maxSize: '1024m',
    maxFiles: '14d',
  });

  // transport.on('rotate', function () {
  //   // do something fun
  // });

  const customFormat = winston.format.printf((info) => {
    return `${info.message}`;
  });

  wslog = winston.createLogger({
    format: winston.format.combine(customFormat),
    transports: [new winston.transports.Console(), transport],
  });
}

function Logger({ name, defaultLevel }) {
  if (!name) {
    throw new Error('No name provided.');
  }
  this.name = name;
  this.client = typeof window !== 'undefined' ? 'browser' : 'node';
  this.pid = typeof window !== 'undefined' ? 'client' : process.pid || 'server';
  this._level = 'info';
  if (process && process.env.NODE_ENV !== 'production') {
    this._level = 'trace';
  }
  if (defaultLevel && LEVELS.indexOf(defaultLevel) > -1) {
    this._level = defaultLevel;
  }

  Object.defineProperty(this, 'level', {
    get: () => this._level,
    set: (level) => {
      if (LEVELS.indexOf(level) > -1) {
        this._level = level;
      } else if (!level) {
        this._level = null;
      }
    },
  });
}

Logger.prototype.isLevelEnabled = function (level) {
  let currentAvaible = [];
  if (this._level) {
    currentAvaible = LEVELS.slice(LEVELS.indexOf(this._level));
  } else {
    currentAvaible = [];
  }
  return currentAvaible.indexOf(level) > -1;
};

Logger.prototype.log = function (level, ...args) {
  if (this.isLevelEnabled(level)) {
    this._log(level, formatArgs(args));
  }
};

Logger.prototype._log = function (level, data) {
  if (wslog && typeof window === 'undefined') {
    const dataMsg = [...data].join(' ');
    wslog.info(
      `${dateFormat()}  ${this.client}  ${levelAlias[level]}  ${this.pid}  ${
        this.name
      } ${dataMsg}`
    );
  } else {
    console.log(
      `%c${dateFormat()}  ${this.client}  ${levelAlias[level]}  ${this.pid}  ${
        this.name
      }`,
      `color: ${colors[level]}`,
      ...data
    );
  }
};

LEVELS.forEach((level) => {
  Logger.prototype[level] = function (...args) {
    this.log(level, ...args);
  };
});

module.exports = Logger;
