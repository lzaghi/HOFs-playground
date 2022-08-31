const data = require('../data/zoo_data');

function infosColaborador(dado) {
  const arrayFuncionarios = data.employees.map((pessoa) => Object.values(pessoa));
  const funcionario = arrayFuncionarios.find((pessoa) =>
    pessoa[0] === dado || pessoa[1] === dado || pessoa[2] === dado);

  if (funcionario === undefined) {
    throw new Error('Informações inválidas');
  }

  return funcionario;
}

function animaisELocations(funcionario) {
  const obj = {
    species: [],
    locations: [],
  };
  funcionario[4].forEach((idAnimal) => {
    data.species.forEach((animal) => {
      if (animal.id === idAnimal) {
        obj.species.push(animal.name);
        obj.locations.push(animal.location);
      }
    });
  });
  return obj;
}

function objetoColaborador(dado) {
  const funcionario = infosColaborador(dado);
  const obj = {
    id: funcionario[0],
    fullName: `${funcionario[1]} ${funcionario[2]}`,
  };
  const demaisChaves = animaisELocations(funcionario);
  Object.assign(obj, demaisChaves);
  return obj;
}

function getEmployeesCoverage(objeto) {
  const todosNomes = data.employees.map((pessoa) => pessoa.firstName);
  const arrayGeral = [];
  todosNomes.forEach((pessoa) => arrayGeral.push(objetoColaborador(pessoa)));

  if (objeto !== undefined) {
    const { name, id } = objeto;
    if (name !== undefined) return objetoColaborador(name);
    if (id !== undefined) return objetoColaborador(id);
  }

  return arrayGeral;
}

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage());
