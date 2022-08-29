const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const obj = {};
    data.species.forEach((especie) => {
      obj[especie.name] = especie.residents.length;
    });
    return obj;
  }

  const { specie, sex } = animal;
  const pet = data.species.find((bicho) => bicho.name === specie);

  if (sex === undefined) {
    return pet.residents.length;
  }

  return pet.residents.filter((animais) => animais.sex === sex).length;
}

module.exports = countAnimals;
