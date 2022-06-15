const utils = require('utils');

function printLog() {
  utils.startLog('printLog');
  const list = new Array(10);
  for (let i = 0; i < 10; i++) {
    list[i] = i * i;
  }
  console.log('list=>', list);
  utils.endLog('printLog');
}

printLog();