const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimalsCount = {};
    data.species.forEach((specie) => {
      allAnimalsCount[specie.name] = specie.residents.length;
    });
    return allAnimalsCount;
  }

  const { specie, sex } = animal;
  const zooAnimal = data.species.find((animal) => animal.name === specie);

  if (sex === undefined) {
    return zooAnimal.residents.length;
  }

  return zooAnimal.residents.filter((animals) => animals.sex === sex).length;
}

module.exports = countAnimals;
