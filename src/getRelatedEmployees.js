const data = require('../data/zoo_data');

function isManager(id) {
  const arrayDeArrays = data.employees.map((element) => element.managers);
  const array = arrayDeArrays.reduce((acc, curr) => acc.concat(curr), []);
  return array.some((codigo) => codigo === id);
}

function getRelatedEmployees(managerId) {
  const bool = isManager(managerId);
  if (bool === true) {
    const lista = [];
    data.employees.forEach((pessoa) => {
      if (pessoa.managers.includes(managerId)) {
        lista.push(`${pessoa.firstName} ${pessoa.lastName}`);
      }
    });
    return lista;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
