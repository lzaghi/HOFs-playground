const data = require('../data/zoo_data');

function getLocationSpecies(local) {
  const locationSpecies = [];
  data.species.forEach((animal) => {
    if (animal.location === local) locationSpecies.push(animal.name);
  });
  return locationSpecies;
}

const getAllLocationSpecies = () => ({
  NE: getLocationSpecies('NE'),
  NW: getLocationSpecies('NW'),
  SE: getLocationSpecies('SE'),
  SW: getLocationSpecies('SW'),
});

function orderArray(sort, array) {
  if (sort === true) array.sort();
  return array;
}

function getAnimalsList(name, sort, sex) {
  const allAnimalsListed = {};
  const animalList = [];
  data.species.find((animal) => animal.name === name)
    .residents.forEach((zooAnimal) => {
      if (zooAnimal.sex === sex) animalList.push(zooAnimal.name);
      if (sex === undefined) animalList.push(zooAnimal.name);
    });

  orderArray(sort, animalList);
  allAnimalsListed[name] = animalList;
  return allAnimalsListed;
}

function handleNamesFilter(sort, sex) {
  const objEspecies = getAllLocationSpecies();
  const arrayChaves = Object.keys(objEspecies);
  arrayChaves.forEach((local) => {
    objEspecies[local] = objEspecies[local].map((name) => getAnimalsList(name, sort, sex));
  });

  return objEspecies;
}

function handleParametersFilter(options) {
  const { sex, sorted } = options;
  if (sorted === true && sex !== undefined) return handleNamesFilter(true, sex);
  if (sex !== undefined) return handleNamesFilter(sorted, sex);
  if (sorted === true) return handleNamesFilter(sorted, sex);
  return handleNamesFilter();
}

function handleFilters(options) {
  const { includeNames } = options;
  if (includeNames === true) return handleParametersFilter(options);
  return getAllLocationSpecies();
}

function getAnimalMap(options) {
  const speciesList = getAllLocationSpecies();

  if (options !== undefined) return handleFilters(options);

  return speciesList;
}

module.exports = getAnimalMap;
