import BaseType from './Base';

export default class NumberType extends BaseType {
  minimum(minimum) {
    return this.extend({ minimum });
  }

  maximum(maximum) {
    return this.extend({ maximum });
  }

  exclusiveMinimum(exclusiveMinimum) {
    return this.extend({ exclusiveMinimum });
  }

  exclusiveMaximum(exclusiveMaximum) {
    return this.extend({ exclusiveMaximum });
  }

  multipleOf(multipleOf) {
    return this.extend({ multipleOf });
  }
}
