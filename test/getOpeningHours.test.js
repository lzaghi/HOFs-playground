const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se ausência de argumentos retorna objeto de horários', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Testa se "Monday" e "09:00-AM" retorna fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toMatch('The zoo is closed');
  });
  it('Testa se "Tuesday" e "09:00-AM" retorna aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toMatch('The zoo is open');
  });
  it('Testa se "Wednesday" e "09:00-AM" retorna fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toMatch('The zoo is open');
  });
  it('Testa se "Thu" e "09:00-AM" lança erro "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(Error);
  });
  it('Testa se "Friday" e "09:00-ZM" lança erro "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(Error);
  });
  it('Testa se "Saturday" e "C9:00-AM" lança erro "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(Error);
  });
  it('Testa se "Sunday" e "09:c0-AM" lança erro "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(Error);
  });
  it('Testa se "Monday" e "13:00-AM" lança erro "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(Error);
  });
  it('Testa se "Tuesday" e "09:60-AM" lança erro "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(Error);
  });
});
