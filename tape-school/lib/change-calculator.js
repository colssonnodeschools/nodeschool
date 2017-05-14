const coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const calculateChange = (total, paid) => {
  const f = (remaining, coinsUsed = []) => {
    if (remaining === 0) {
      return coinsUsed;
    }
    const coin = coins.find(coin => coin <= remaining);
    return f(remaining - coin, [...coinsUsed, coin]);
  }
  return f(paid - total);
}
module.exports = calculateChange;
