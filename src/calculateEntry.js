const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) {
      obj.child += 1;
    } else if (pessoa.age >= 18 && pessoa.age < 50) {
      obj.adult += 1;
    } else if (pessoa.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const obj = countEntrants(entrants);
  const { child, adult, senior } = obj;

  let soma = 0;
  soma += child * 20.99 + adult * 49.99 + senior * 24.99;
  return soma;
}

module.exports = { calculateEntry, countEntrants };
