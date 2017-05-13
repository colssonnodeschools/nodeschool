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
      // const threat = destroyerPosition.map(x => x>5&&'low'||x>2&&'medium'||x>=1&&'high'||x<1&&'extreme').toProperty();
      const threat = destroyerPosition.map(f).toProperty();
      const threatStream = destroyerPosition.map(f);
      return {
        ships,           // Your ship counter goes here
        threat,          // Your threat level goes here
        postArrivalShips: ships.filter(threat.filter(t => t === 'extreme')),
      };
    };
