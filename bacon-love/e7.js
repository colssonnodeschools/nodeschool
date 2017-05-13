const f = function (x) {
  if (x > 5) {
    return 'low';
  }
  if (x <= 5 && x > 2) {
    return 'medium';
  }
  if (x <= 2 && x >= 1) {
    return 'high';
  }
  if (x < 1) {
    return 'extreme';
  }
};
module.exports = (Bacon, enteringShips, destroyerPosition) => {
  const ships = enteringShips.map(({ type }) => type === 'zrrk' ? 1 : 0);
  const shipTally = ships.scan(0, (a, b) => a + b)
  const threat = destroyerPosition.map(f).toProperty();
  const extremeThreat = threat.filter(t => t === 'extreme');
  const threatReport = enteringShips.takeWhile(extremeThreat).take(5).fold({}, (acc, { type }) => {
    acc[type] = acc.hasOwnProperty(type) ? acc[type] + 1 : 1;
    return acc;
  });
  threatReport.log();
  return {
    shipTally, //The running tally of ships goes here
    threatReport, //The report of ships immediately following the Destroyer goes here
  };
};


/*

module.exports = (Bacon, enteringShips, destroyerPosition) => {
    const shipTally = enteringShips
        .filter(ship => ship.type === 'zrrk')
        .map(1)
        .scan(0, (acc, v) => acc + v);

    const destroyerHasEntered = destroyerPosition.map(distance => distance < 1);

    const threatReport = enteringShips
        .filter(destroyerHasEntered)
        .take(5)
        .fold({}, (report, ship) => {
            if (!report[ship.type]) {
                report[ship.type] = 0;
            }
            report[ship.type] += 1;
            return report;
        });

    return {shipTally, threatReport};
};

*/
