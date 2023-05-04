const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesList = [];
  ids.forEach((id) =>
    data.species.forEach((specie) => {
      if (specie.id === id) speciesList.push(specie);
    }));

  return speciesList;
}

module.exports = getSpeciesByIds;
