const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((id) =>
    data.species.forEach((objeto) => {
      if (objeto.id === id) array.push(objeto);
    }));

  return array;
}

module.exports = getSpeciesByIds;
