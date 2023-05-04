const data = require('../data/zoo_data');

function getFirstSpecies(id) {
  const employee = data.employees.find((employee) => employee.id === id);
  const idAnimal = employee.responsibleFor[0];

  const animal = data.species.find((specie) => specie.id === idAnimal);
  return animal;
}

function getOldestFromFirstSpecies(id) {
  const animal = getFirstSpecies(id);
  const animalOldest = animal.residents.sort((a, b) => b.age - a.age)[0];

  const { name, sex, age } = animalOldest;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
