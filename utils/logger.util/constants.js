module.exports = {
  LEVELS: ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'slient'],
  levelAlias: {
    trace: 'TRACE',
    debug: 'DEBUG',
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR',
    fatal: 'FATAL',
  },
  colors: {
    trace: '#909090',
    debug: '#0095ff',
    info: '#5eba7d',
    warn: '#ff9900',
    error: '#f03f14',
    fatal: '#dd1144',
  },
  showLevel: {
    debugging: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
    development: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
    // 服务端默认打印大于等于info级别日志
    server: ['info', 'warn', 'error', 'fatal'],
    test: ['info', 'warn', 'error', 'fatal'],
    preview: ['error', 'fatal'],
    production: ['error', 'fatal'],
  },
};
