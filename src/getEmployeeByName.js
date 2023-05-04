const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let searchedEmployee = {};
  data.employees.forEach((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) searchedEmployee = employee;
  });
  return searchedEmployee;
}

module.exports = getEmployeeByName;
