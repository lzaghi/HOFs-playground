const data = require('../data/zoo_data');

function getAnimalsPerDay(weekday) {
  const availabeAnimals = [];
  data.species.forEach((animal) => {
    if (animal.availability.includes(weekday)) {
      availabeAnimals.push(animal.name);
    }
  });
  return availabeAnimals;
}

function getDayAgenda(weekday) {
  const agenda = {};
  agenda[weekday] = {
    officeHour: `Open from ${data.hours[weekday].open}am until ${data.hours[weekday].close}pm`,
    exhibition: getAnimalsPerDay(weekday),
  };
  return agenda;
}

function setMondayAgenda() {
  const mondayAgenda = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return mondayAgenda;
}

function getWeekAgenda() {
  const weekAgenda = {};

  const weekdays = Object.keys(data.hours);
  weekdays.forEach((weekday) => Object.assign(weekAgenda, getDayAgenda(weekday)));

  const mondayAgenda = setMondayAgenda();
  Object.assign(weekAgenda, mondayAgenda);

  return weekAgenda;
}

function getDaysPerAnimal(animal) {
  return data.species.find((zooAnimal) => zooAnimal.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  const weekAgenda = getWeekAgenda();

  if (scheduleTarget === 'Monday') return setMondayAgenda();

  const otherWeekdays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (otherWeekdays.includes(scheduleTarget)) return getDayAgenda(scheduleTarget);

  const animals = data.species.map((animal) => animal.name);
  if (animals.includes(scheduleTarget)) return getDaysPerAnimal(scheduleTarget);

  return weekAgenda;
}

module.exports = getSchedule;

// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('lions'));
