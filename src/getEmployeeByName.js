const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let pessoa = {};
  data.employees.forEach((objeto) => {
    if (objeto.firstName === employeeName || objeto.lastName === employeeName) pessoa = objeto;
  });
  return pessoa;
}

module.exports = getEmployeeByName;
