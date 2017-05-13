module.exports = (Bacon, riverQuality, untilSwitchTurnedOff, sampleTime) => {
  return riverQuality.debounceImmediate(sampleTime).takeWhile(untilSwitchTurnedOff);
};

/*

module.exports = (Bacon, riverQuality, untilSwitchTurnedOff, sampleTime) =>
        riverQuality
            .debounceImmediate(sampleTime)
            .takeWhile(untilSwitchTurnedOff);
*/
