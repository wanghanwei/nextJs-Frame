function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

const dateFormat = function () {
  const date = new Date(
    new Date().toString('zh-cn', {
      timeZone: 'Asia/Shanghai',
    })
  );
  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate()) +
    ' ' +
    pad(date.getHours()) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds()) +
    ',' +
    (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5)
  );
};

module.exports = dateFormat;
