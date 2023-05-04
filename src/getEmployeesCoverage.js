const data = require('../data/zoo_data');

function findEmployee(info) {
  const employeeList = data.employees.map((employee) => Object.values(employee));
  const searchedEmployee = employeeList.find((employee) =>
    employee[0] === info || employee[1] === info || employee[2] === info);

  if (searchedEmployee === undefined) {
    throw new Error('Invalid information');
  }

  return searchedEmployee;
}

function getEmployeesResponsabilities(employee) {
  const speciesAndLocations = {
    species: [],
    locations: [],
  };
  employee[4].forEach((idAnimal) => {
    data.species.forEach((animal) => {
      if (animal.id === idAnimal) {
        speciesAndLocations.species.push(animal.name);
        speciesAndLocations.locations.push(animal.location);
      }
    });
  });
  return speciesAndLocations;
}

function getEmployeeInformation(info) {
  const employee = findEmployee(info);
  const employeeInformation = {
    id: employee[0],
    fullName: `${employee[1]} ${employee[2]}`,
  };
  const employeeAnimalsAndLocations = getEmployeesResponsabilities(employee);
  Object.assign(employeeInformation, employeeAnimalsAndLocations);
  return employeeInformation;
}

function getEmployeesCoverage(employeeInfo) {
  const employeesNames = data.employees.map((employee) => employee.firstName);
  const employeeInformation = [];
  employeesNames.forEach((employee) => employeeInformation.push(getEmployeeInformation(employee)));

  if (employeeInfo !== undefined) {
    const { name, id } = employeeInfo;
    if (name !== undefined) return getEmployeeInformation(name);
    if (id !== undefined) return getEmployeeInformation(id);
  }

  return employeeInformation;
}

module.exports = getEmployeesCoverage;
