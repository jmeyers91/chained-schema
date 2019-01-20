import { flatten, toJsonSchema } from './utils';

export function allOf(...schemas) {
  return {
    allOf: flatten(schemas).map(toJsonSchema),
  };
}

export function anyOf(...schemas) {
  return {
    anyOf: flatten(schemas).map(toJsonSchema),
  };
}

export function oneOf(schemas) {
  return {
    oneOf: flatten(schemas).map(toJsonSchema),
  };
}

export function not(schema) {
  return {
    not: toJsonSchema(schema),
  };
}
