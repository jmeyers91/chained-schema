# chained-schema

Concise JSON Scheme type builders.

## Install

```bash
npm install chained-schema
```

## Usage

```js
import { object, array, number, boolean, string } from 'chained-schema';

const phoneNumber = string.pattern(/\(?\d\d\d\)?-?\d\d\d-?\d\d\d\d/);
const user = object
  .required('firstName', 'lastName')
  .props({
    firstName: string,
    lastName: string,
    email: string.nullable,
    phoneNumber: phoneNumber.nullable,
    password: string.default('secret').minLength(5),
  });
```

## API

Properties that require inputs are called as functions. Properties that don't require inputs are just chained as getters.

For example `number.maximum` takes an argument, but `number.nullable` doesn't, so it's a getter instead of a method.

```js
number.minimum(0).nullable.maximum(10)
```

### [`array`](http://json-schema.org/understanding-json-schema/reference/array.html)

`items(items)`
`additionalItems(additionalItems)`
`get uniqueItems`

### [`object`](http://json-schema.org/understanding-json-schema/reference/object.html)

`props(p)`
`properties(properties)`
`dependencies(dependencies)`
`patternProperties(patternProperties)`
`additionalProperties(additionalProperties)`
`propertyNames(propertyNames)`
`minProperties(minProperties)`
`maxProperties(maxProperties)`

### [`string`](http://json-schema.org/understanding-json-schema/reference/string.html)

`minLength(minLength)`
`maxLength(maxLength)`
`format(format)`
`pattern(regex)`

### [`number`](http://json-schema.org/understanding-json-schema/reference/numeric.html)

`minimum(minimum)`
`maximum(maximum)`
`exclusiveMinimum(exclusiveMinimum)`
`exclusiveMaximum(exclusiveMaximum)`
`multipleOf(multipleOf)`

### [`integer`](http://json-schema.org/understanding-json-schema/reference/numeric.html)

Same as `number`.

### [`boolean`](http://json-schema.org/understanding-json-schema/reference/boolean.html)

No custom boolean options.

### [`nill` (null)](http://json-schema.org/understanding-json-schema/reference/null.html)

No custom null options.

## [Combining Schemas](http://json-schema.org/understanding-json-schema/reference/combining.html)

### `allOf`

### `anyOf`

### `oneOf`

### `not`
