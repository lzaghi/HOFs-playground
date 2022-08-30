const data = require('../data/zoo_data');

function getFirstSpecies(id) {
  const funcionario = data.employees.find((pessoa) => pessoa.id === id);
  const idAnimal = funcionario.responsibleFor[0];

  const animal = data.species.find((especie) => especie.id === idAnimal);
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
