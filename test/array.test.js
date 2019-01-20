import { array, string, number } from '../src';

describe('Array type', () => {
  test('Should have type array', () => {
    expect(array.schema.type).toEqual('array');
  });

  test('Should be able to set items to a raw JSON schema', () => {
    const itemsSchema = {
      type: 'object',
      required: ['foo'],
      properties: {
        foo: { type: 'string '},
      }
    };
    const t = array.items(itemsSchema);
    expect(t.schema).toEqual({
      type: 'array',
      items: itemsSchema,
    });
  });

  test('Should be able to set items to an array of JSON schemas', () => {
    const itemsSchema = [{
      type: 'object',
      required: ['foo'],
      properties: {
        foo: { type: 'string '},
      }
    },
    {
      type: 'object',
      required: ['bar'],
      properties: {
        bar: { type: 'string '},
      }
    }];
    const t = array.items(itemsSchema);
    expect(t.schema).toEqual({
      type: 'array',
      items: itemsSchema,
    });
  });

  test('Should be able to set items to a wrapped schema', () => {
    const t = array.items(string);
    expect(t.schema).toEqual({
      type: 'array',
      items: string.schema
    });
  });

  test('Should be able to set items to an array of wrapped schemas', () => {
    const t = array.items([string, number.nullable]);
    expect(t.schema).toEqual({
      type: 'array',
      items: [
        string.schema,
        number.nullable.schema,
      ]
    });
  });

  test('Should be able to set additionalItems to a JSON schema', () => {
    const t = array.additionalItems(string.schema);
    expect(t.schema.additionalItems).toEqual(string.schema);
  });

  test('Should be able to set additionalItems to a wrapped schema', () => {
    const t = array.additionalItems(string);
    expect(t.schema.additionalItems).toEqual(string.schema);
  });

  test('Should be able to set uniqueItems', () => {
    const t = array.uniqueItems;
    expect(t.schema.uniqueItems).toEqual(true);
  });
});
