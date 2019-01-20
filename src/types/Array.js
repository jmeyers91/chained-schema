import BaseType from './Base';
import { toJsonSchema } from '../utils';

export default class ArrayType extends BaseType {
  get uniqueItems() {
    return this.extend({ uniqueItems: true });
  }

  additionalItems(additionalItems) {
    if(Array.isArray(additionalItems)) {
      additionalItems = additionalItems.map(toJsonSchema);
    } else if(additionalItems instanceof BaseType) {
      additionalItems = additionalItems.schema;
    }
    return this.extend({ additionalItems });
  }

  items(items) {
    if(Array.isArray(items)) {
      items = items.map(toJsonSchema);
    } else {
      items = toJsonSchema(items);
    }
    return this.extend({ items });
  }
}
