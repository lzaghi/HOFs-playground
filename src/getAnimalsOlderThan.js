const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let speciesByAge = {};
  data.species.forEach((specie) => {
    if (specie.name === animal) speciesByAge = specie;
  });
  return speciesByAge.residents.every((zooAnimal) => zooAnimal.age >= 7);
}

module.exports = getAnimalsOlderThan;
