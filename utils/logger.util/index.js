const Logger = require('./logger');

const logger = {
  createLogger(name, defaultLevel) {
    return new Logger({
      name,
      defaultLevel,
    });
  },
};

module.exports = logger;
