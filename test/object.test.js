import { object, string, number } from '../src';

describe('Object type', () => {
  test('Should have type object', () => {
    expect(object.schema.type).toEqual('object');
  });

  test('Should be able to pass properties as JSON schema', () => {
    const properties = {
      foo: { type: 'string' },
      bar: { type: 'number' }
    };
    const t = object.properties(properties);
    expect(t.schema).toEqual({
      type: 'object',
      properties: properties,
    });
  });

  test('Should be able to pass properties as wrapped schema', () => {
    const properties = {
      foo: string,
      bar: number.minimum(10),
    };
    const t = object.properties(properties);
    expect(t.schema).toEqual({
      type: 'object',
      properties: {
        foo: { type: 'string' },
        bar: { type: 'number', minimum: 10 }
      },
    });
  });

  test('Should be able to pass dependencies as JSON schema', () => {
    const dependencies = {
      foo: { type: 'string' },
      bar: { type: 'number' }
    };
    const t = object.dependencies(dependencies);
    expect(t.schema).toEqual({
      type: 'object',
      dependencies: dependencies,
    });
  });

  test('Should be able to pass dependencies as wrapped schema', () => {
    const dependencies = {
      foo: string,
      bar: number.minimum(10),
    };
    const t = object.dependencies(dependencies);
    expect(t.schema).toEqual({
      type: 'object',
      dependencies: {
        foo: { type: 'string' },
        bar: { type: 'number', minimum: 10 }
      },
    });
  });

  test('Should be able to pass patternProperties as JSON schema', () => {
    const patternProperties = {
      foo: { type: 'string' },
      bar: { type: 'number' }
    };
    const t = object.patternProperties(patternProperties);
    expect(t.schema).toEqual({
      type: 'object',
      patternProperties: patternProperties,
    });
  });

  test('Should be able to pass patternProperties as wrapped schema', () => {
    const patternProperties = {
      foo: string,
      bar: number.minimum(10),
    };
    const t = object.patternProperties(patternProperties);
    expect(t.schema).toEqual({
      type: 'object',
      patternProperties: {
        foo: { type: 'string' },
        bar: { type: 'number', minimum: 10 }
      },
    });
  });

  test('Should be able to pass additionalProperties as JSON schema', () => {
    const additionalProperties = {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        bar: { type: 'number' },
      },
    };
    const t = object.additionalProperties(additionalProperties);
    expect(t.schema).toEqual({
      type: 'object',
      additionalProperties: additionalProperties,
    });
  });

  test('Should be able to pass additionalProperties as wrapped schema', () => {
    const additionalProperties = object.properties({
      foo: string,
      bar: number,
    });
    const t = object.additionalProperties(additionalProperties);
    expect(t.schema).toEqual({
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          foo: { type: 'string' },
          bar: { type: 'number' },
        },
      },
    });
  });

  test('Should be able to pass propertyNames as JSON schema', () => {
    const propertyNames = {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        bar: { type: 'number' },
      },
    };
    const t = object.propertyNames(propertyNames);
    expect(t.schema).toEqual({
      type: 'object',
      propertyNames: propertyNames,
    });
  });

  test('Should be able to pass propertyNames as wrapped schema', () => {
    const propertyNames = object.properties({
      foo: string,
      bar: number,
    });
    const t = object.propertyNames(propertyNames);
    expect(t.schema).toEqual({
      type: 'object',
      propertyNames: {
        type: 'object',
        properties: {
          foo: { type: 'string' },
          bar: { type: 'number' },
        },
      },
    });
  });

  test('Should be able to set minProperties', () => {
    const t = object.minProperties(10);
    expect(t.schema).toEqual({
      type: 'object',
      minProperties: 10
    });
  });

  test('Should be able to set maxProperties', () => {
    const t = object.maxProperties(10);
    expect(t.schema).toEqual({
      type: 'object',
      maxProperties: 10
    });
  });
});
