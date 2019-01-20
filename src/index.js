import ArrayType from './types/Array';
import BooleanType from './types/Boolean';
import IntegerType from './types/Integer';
import NullType from './types/Null';
import NumberType from './types/Number';
import ObjectType from './types/Object';
import StringType from './types/String';

export * from './helpers';
export const array = new ArrayType({ type: 'array' });
export const boolean = new BooleanType({ type: 'boolean' });
export const number = new NumberType({ type: 'number' });
export const integer = new IntegerType({ type: 'integer' });
export const object = new ObjectType({ type: 'object' });
export const string = new StringType({ type: 'string' });
export const nill = new NullType({ type: 'null' });
export const types = {
  array,
  boolean,
  number,
  integer,
  object,
  string,
  nill,
};

// String format types
export const dateTime = string.format('date-time');
export const email = string.format('email');
export const hostname = string.format('hostname');
export const ipv4 = string.format('ipv4');
export const ipv6 = string.format('ipv6');
export const uri = string.format('uri');
export const uriReference = string.format('uri-reference');
export const jsonPointer = string.format('json-pointer');
export const uriTemplate = string.format('uri-template');
