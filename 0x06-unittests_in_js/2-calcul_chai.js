const { round } = Math;
function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return round(a) + round(b);
  }
  if (type === 'SUBTRACT') {
    return round(a) - round(b);
  }
  if (type === 'DIVIDE') {
    return round(b) === 0 ? 'Error' : round(a) / round(b);
  }
}

module.exports = calculateNumber;
