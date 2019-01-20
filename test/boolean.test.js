import { boolean } from '../src';

describe('Boolean type', () => {
  test('Should have type boolean', () => {
    expect(boolean.schema.type).toEqual('boolean');
  });
});
