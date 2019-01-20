import BaseType from './types/Base';

export function toJsonSchema(type) {
  if(type instanceof BaseType) return type.schema;
  return type;
}

export function toJsonSchemaProperties(properties) {
  if(typeof properties === 'object') {
    const result = {};
    for(let [key, value] of Object.entries(properties)) {
      result[key] = toJsonSchema(value);
    }
    return result;
  }
  return properties;
}

export function flatten(array) {
  let result = [];
  for(let value of array) {
    if(Array.isArray(value)) {
      result.push(...value);
    } else {
      result.push(value);
    }
  }
  return result;
}
