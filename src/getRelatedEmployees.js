const data = require('../data/zoo_data');

function isManager(managerId) {
  const managersArrayList = data.employees.map((employee) => employee.managers);
  const managersList = managersArrayList.reduce((acc, curr) => acc.concat(curr), []);
  return managersList.some((code) => code === managerId);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employeesList = [];
    data.employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        employeesList.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return employeesList;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
