const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsList = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) {
      entrantsList.child += 1;
    } else if (pessoa.age >= 18 && pessoa.age < 50) {
      entrantsList.adult += 1;
    } else if (pessoa.age >= 50) {
      entrantsList.senior += 1;
    }
  });
  return entrantsList;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const entrantsList = countEntrants(entrants);
  const { child, adult, senior } = entrantsList;

  let revenue = 0;
  revenue += child * 20.99 + adult * 49.99 + senior * 24.99;
  return revenue;
}

module.exports = { calculateEntry, countEntrants };
