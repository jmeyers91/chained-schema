import { integer } from '../src';

describe('Integer type', () => {
  test('Should have type integer', () => {
    expect(integer.schema.type).toEqual('integer');
  });

  test('Should be able to set minimum', () => {
    expect(integer.minimum(1).schema).toEqual({
      type: 'integer',
      minimum: 1,
    });
  });

  test('Should be able to set maximum', () => {
    expect(integer.maximum(2).schema).toEqual({
      type: 'integer',
      maximum: 2,
    });
  });

  test('Should be able to set exclusiveMinimum', () => {
    expect(integer.exclusiveMinimum(3).schema).toEqual({
      type: 'integer',
      exclusiveMinimum: 3,
    });
  });

  test('Should be able to set exclusiveMaximum', () => {
    expect(integer.exclusiveMaximum(4).schema).toEqual({
      type: 'integer',
      exclusiveMaximum: 4,
    });
  });

  test('Should be able to set multipleOf', () => {
    expect(integer.multipleOf(5).schema).toEqual({
      type: 'integer',
      multipleOf: 5,
    });
  });
});
