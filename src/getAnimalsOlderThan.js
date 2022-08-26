const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let especie = {};
  data.species.forEach((objeto) => {
    if (objeto.name === animal) especie = objeto;
  });
  return especie.residents.every((pet) => pet.age >= 7);
}

module.exports = getAnimalsOlderThan;
