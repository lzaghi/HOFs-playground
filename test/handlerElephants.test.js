const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se retorno de "count" é 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se retorno de "names" inclui Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Testa se retorno de "averageAge" é próximo de 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se retorno de "location" é NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se retorno de "popularity" é maior ou igual a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Testa se retorno de "availability" não inclui Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Testa se ausência de parâmetros retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se retorno de "{}" acusa erro de string necessária', () => {
    expect(handlerElephants({})).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se retorno de "lukinha" é null', () => {
    expect(handlerElephants('lukinha')).toBeNull();
  });
});
