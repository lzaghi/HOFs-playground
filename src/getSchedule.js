const data = require('../data/zoo_data');

function animaisPorDia(weekday) {
  const lista = [];
  data.species.forEach((animal) => {
    if (animal.availability.includes(weekday)) {
      lista.push(animal.name);
    }
  });
  return lista;
}

function agendaDia(dia) {
  const obj = {};
  obj[dia] = {
    officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
    exhibition: animaisPorDia(dia),
  };
  return obj;
}

function atribuiMonday() {
  const monday = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return monday;
}

function objetoSemana() {
  const obj = {};

  const dias = Object.keys(data.hours);
  dias.forEach((dia) => Object.assign(obj, agendaDia(dia)));

  const monday = atribuiMonday();
  Object.assign(obj, monday);

  return obj;
}

function diasPorAnimal(animal) {
  return data.species.find((element) => element.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  const semana = objetoSemana();

  if (scheduleTarget === 'Monday') return atribuiMonday();

  const demaisDias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (demaisDias.includes(scheduleTarget)) return agendaDia(scheduleTarget);

  const animais = data.species.map((element) => element.name);
  if (animais.includes(scheduleTarget)) return diasPorAnimal(scheduleTarget);

  return semana;
}

module.exports = getSchedule;

// console.log(getSchedule('lions'));
