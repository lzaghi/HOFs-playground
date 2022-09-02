const data = require('../data/zoo_data');

function arrayEspecies(local) {
  const array = [];
  data.species.forEach((animal) => {
    if (animal.location === local) array.push(animal.name);
  });
  return array;
}

const objetoEspecies = () => ({
  NE: arrayEspecies('NE'),
  NW: arrayEspecies('NW'),
  SE: arrayEspecies('SE'),
  SW: arrayEspecies('SW'),
});

function ordena(sort, array) {
  if (sort === true) array.sort();
  return array;
}

function listaAnimais(name, sort, sex) {
  const obj = {};
  const array = [];
  data.species.find((animal) => animal.name === name)
    .residents.forEach((pet) => {
      if (pet.sex === sex) array.push(pet.name);
      if (sex === undefined) array.push(pet.name);
    });

  ordena(sort, array);
  obj[name] = array;
  return obj;
}

function incluiNomes(sort, sex) {
  const objEspecies = objetoEspecies();
  const arrayChaves = Object.keys(objEspecies);
  arrayChaves.forEach((local) => {
    objEspecies[local] = objEspecies[local].map((name) => listaAnimais(name, sort, sex));
  });

  return objEspecies;
}

function filters2(options) {
  const { sex, sorted } = options;
  if (sorted === true && sex !== undefined) return incluiNomes(true, sex);
  if (sex !== undefined) return incluiNomes(sorted, sex);
  if (sorted === true) return incluiNomes(sorted, sex);
  return incluiNomes();
}

function filters(options) {
  const { includeNames } = options;
  if (includeNames === true) return filters2(options);
  return objetoEspecies();
}

function getAnimalMap(options) {
  const listaEspecies = objetoEspecies();

  if (options !== undefined) return filters(options);

  return listaEspecies;
}

module.exports = getAnimalMap;
