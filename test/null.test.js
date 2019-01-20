import { nill } from '../src';

describe('Null type', () => {
  test('Should have type null', () => {
    expect(nill.schema.type).toEqual('null');
  });
});
