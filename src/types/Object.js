import BaseType from './Base';
import { flatten, toJsonSchema, toJsonSchemaProperties } from '../utils';

export default class ObjectType extends BaseType {
  required(...required) {
    return this.extend({ required: flatten(required) });
  }

  props(p) { return this.properties(p); }
  properties(properties) {
    return this.extend({ properties: toJsonSchemaProperties(properties) });
  }

  dependencies(dependencies) {
    return this.extend({ dependencies: toJsonSchemaProperties(dependencies) });
  }

  patternProperties(patternProperties) {
    return this.extend({ patternProperties: toJsonSchemaProperties(patternProperties) });
  }

  additionalProperties(additionalProperties) {
    return this.extend({ additionalProperties: toJsonSchema(additionalProperties) });
  }

  propertyNames(propertyNames) {
    return this.extend({ propertyNames: toJsonSchema(propertyNames) });
  }

  minProperties(minProperties) {
    return this.extend({ minProperties });
  }

  maxProperties(maxProperties) {
    return this.extend({ maxProperties });
  }
}
