import { string } from '../src';

describe('String type', () => {
  test('Should have type string', () => {
    expect(string.schema.type).toEqual('string');
  });

  test('Should be able to set minLength', () => {
    const t = string.minLength(100);
    expect(t.schema).toEqual({
      type: 'string',
      minLength: 100,
    });
  });

  test('Should be able to set maxLength', () => {
    const t = string.maxLength(200);
    expect(t.schema).toEqual({
      type: 'string',
      maxLength: 200,
    });
  });

  test('Should be able to set format', () => {
    const t = string.format('date-time');
    expect(t.schema).toEqual({
      type: 'string',
      format: 'date-time',
    });
  });

  test('Should be able to set pattern', () => {
    const t = string.pattern(/regex/);
    expect(t.schema).toEqual({
      type: 'string',
      pattern: /regex/,
    });
  });
});
