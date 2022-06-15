const startLog = (logName) => {
  if (!logName) {
    return;
  }

  console.log(`${logName}：start`);
}

const endLog = (logName) => {
  if (!logName) {
    return;
  }

  console.log(`${logName}：end`);
}

module.exports = {
  startLog,
  endLog,
}