const isBuffer = require('is-buffer');

module.exports = {
  formatArgs: function (inputs) {
    const outputs = [];
    for (let i = 0; i < inputs.length; i++) {
      outputs.push(isBuffer(inputs[i]) ? '<Buffer ...>' : inputs[i]);
    }
    return outputs;
  },
};
