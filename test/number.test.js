import { number } from '../src';

describe('Number type', () => {
  test('Should have type number', () => {
    expect(number.schema.type).toEqual('number');
  });

  test('Should be able to set minimum', () => {
    expect(number.minimum(1).schema).toEqual({
      type: 'number',
      minimum: 1,
    });
  });

  test('Should be able to set maximum', () => {
    expect(number.maximum(2).schema).toEqual({
      type: 'number',
      maximum: 2,
    });
  });

  test('Should be able to set exclusiveMinimum', () => {
    expect(number.exclusiveMinimum(3).schema).toEqual({
      type: 'number',
      exclusiveMinimum: 3,
    });
  });

  test('Should be able to set exclusiveMaximum', () => {
    expect(number.exclusiveMaximum(4).schema).toEqual({
      type: 'number',
      exclusiveMaximum: 4,
    });
  });

  test('Should be able to set multipleOf', () => {
    expect(number.multipleOf(5).schema).toEqual({
      type: 'number',
      multipleOf: 5,
    });
  });
});
