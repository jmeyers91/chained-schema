import {
  allOf,
  anyOf,
  oneOf,
  not,
  string,
  number,
  boolean,
} from '../src/index';

describe('helpers', () => {
  describe('allOf', () => {
    test('Should wrap raw JSON schema', () => {
      const schema = allOf([
        { type: 'string' },
        { type: 'number' },
        { type: 'boolean' },
      ]);
      expect(schema).toEqual({
        allOf: [
          { type: 'string' },
          { type: 'number' },
          { type: 'boolean' },
        ]
      });
    });

    test('Should wrap wrapped schema', () => {
      const schema = allOf([
        string,
        number,
        boolean,
      ]);
      expect(schema).toEqual({
        allOf: [
          { type: 'string' },
          { type: 'number' },
          { type: 'boolean' },
        ]
      });
    });
  });

  describe('anyOf', () => {
    test('Should wrap raw JSON schema', () => {
      const schema = anyOf([
        { type: 'string' },
        { type: 'number' },
        { type: 'boolean' },
      ]);
      expect(schema).toEqual({
        anyOf: [
          { type: 'string' },
          { type: 'number' },
          { type: 'boolean' },
        ]
      });
    });

    test('Should wrap wrapped schema', () => {
      const schema = anyOf([
        string,
        number,
        boolean,
      ]);
      expect(schema).toEqual({
        anyOf: [
          { type: 'string' },
          { type: 'number' },
          { type: 'boolean' },
        ]
      });
    });
  });

  describe('oneOf', () => {
    test('Should wrap raw JSON schema', () => {
      const schema = oneOf([
        { type: 'string' },
        { type: 'number' },
        { type: 'boolean' },
      ]);
      expect(schema).toEqual({
        oneOf: [
          { type: 'string' },
          { type: 'number' },
          { type: 'boolean' },
        ]
      });
    });

    test('Should wrap raw JSON schema', () => {
      const schema = oneOf([
        string,
        number,
        boolean,
      ]);
      expect(schema).toEqual({
        oneOf: [
          { type: 'string' },
          { type: 'number' },
          { type: 'boolean' },
        ]
      });
    });
  });

  describe('not', () => {
    test('Should wrap raw JSON schema', () => {
      const schema = not({ type: 'string' });
      expect(schema).toEqual({
        not: { type: 'string' },
      });
    });

    test('Should wrap wrapped schema', () => {
      const schema = not(string);
      expect(schema).toEqual({
        not: { type: 'string' },
      });
    });
  });
});
