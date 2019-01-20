
import BaseType from '../src/types/Base';

const type = new BaseType({ type: 'base' });

describe('Base type', () => {
  test('Should be able to set title', () => {
    expect(
      type.title('title').schema.title
    ).toEqual('title')
  });

  test('Should be able to set description', () => {
    expect(
      type.description('description').schema.description
    ).toEqual('description')
  });

  test('Should be able to set examples', () => {
    expect(
      type.examples(['examples', 'examples1', 'examples2'], 'example3').schema.examples
    ).toEqual(['examples', 'examples1', 'examples2', 'example3'])
  });

  test('Should be able to set default', () => {
    expect(
      type.default('default').schema.default
    ).toEqual('default')
  });

  test('Should be able to set const using the constant method', () => {
    expect(
      type.constant('constant').schema.const
    ).toEqual('constant')
  });

  test('Should be able to set enum', () => {
    expect(
      type.enum(['first', 'second', 'third'], 'fourth', ['fifth']).schema.enum
    ).toEqual(['first', 'second', 'third', 'fourth', 'fifth'])
  });

  test('Should be nullable', () => {
    expect(
      type.nullable.schema.type
    ).toEqual(['null', 'base'])
  })
});
