import BaseType from './Base';

export default class StringType extends BaseType {
  minLength(minLength) {
    return this.extend({ minLength });
  }
  
  maxLength(maxLength) {
    return this.extend({ maxLength });
  }
  
  format(format) {
    return this.extend({ format });
  }

  pattern(regex) {
    return this.extend({ pattern: regex });
  }
}
