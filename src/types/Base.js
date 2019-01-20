import { flatten } from '../utils';

export default class BaseType {
  constructor(schema) {
    this.schema = schema;
  }

  extend(schema) {
    const This = this.constructor;
    return new This({...this.schema, ...schema});
  }

  get nullable() {
    return this.extend({ type: ['null'].concat(this.schema.type) });
  }

  title(title) {
    return this.extend({ title });
  }

  description(description) {
    return this.extend({ description });
  }

  examples(...examples) {
    return this.extend({ examples: flatten(examples) });
  }

  default(defaultValue) {
    return this.extend({ default: defaultValue });
  }

  constant(constant) {
    return this.extend({ const: constant });
  }

  enum(...enums) {
    return this.extend({ enum: flatten(enums) });
  }
}
