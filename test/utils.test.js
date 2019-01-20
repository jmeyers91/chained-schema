import { types, string, number } from '../src/index';
import {
  toJsonSchema,
  toJsonSchemaProperties,
  flatten,
} from '../src/utils';

describe('utils', () => {
  describe('toJsonSchema', () => {
    test('Should unwrap the schema if the passed value is a type', () => {
      for(let type of Object.values(types)) {
        expect(toJsonSchema(type)).toEqual(type.schema);
        expect(toJsonSchema(type.title('test'))).toEqual({
          type: type.schema.type,
          title: 'test'
        })
      }
    });

    test(`Should leave the input unchanged if it isn't a type`, () => {
      expect(toJsonSchema(1)).toEqual(1);
      expect(toJsonSchema("foo")).toEqual("foo");
      expect(toJsonSchema(false)).toEqual(false);
      expect(toJsonSchema(null)).toEqual(null);
      expect(toJsonSchema(undefined)).toEqual(undefined);
      expect(toJsonSchema({ foo: 'bar' })).toEqual({ foo: 'bar' });
      expect(toJsonSchema(['a', 'b'])).toEqual(['a', 'b']);
      expect(toJsonSchema(/foo/)).toEqual(/foo/);
    });
  });

  describe('toJsonSchemaProperties', () => {
    test('Should unwrap values on the input object', () => {
      expect(toJsonSchemaProperties({
        foo: string.format('foo'),
        bar: number,
      })).toEqual({
        foo: { type: 'string', format: 'foo' },
        bar: { type: 'number' },
      });
    });
  });

  describe('flatten', () => {
    test('Should flatten nested arrays', () => {
      expect(flatten([
        1,
        [2, 3],
        4,
        [5, 6],
        7,
        8,
        [9],
        10
      ])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    })
  });
});
