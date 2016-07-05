# validator-tckimlik

Turkish Republic identity number validator with no dependency.

Based on rules specified in [egemenmede/angularjs-delipenguen-tc-kimlik-dogrulama](https://github.com/egemenmede/angularjs-delipenguen-tc-kimlik-dogrulama).

## Usage

This module exports a simple validator function which returns boolean.

```js
var tckimlikValidator = require('validator-tckimlik');

tckimlikValidator(111111111) // false
tckimlikValidator() // false
```

### Advanced usage

If you need which rules validation passes or fails you can call `validateAll` method.

```js
var tckimlikValidator = require('validator-tckimlik');

tckimlikValidator.validateAll(111111111)
/*
    returns:
    {
        "isAllNumeric": true,
        "is11Digits": false,
        "isNotStartingWithZero": true,
        "isValidRule1": false,
        "isValidRule2": false
    }
 */
```

You can override validation rules by editing `rules` array exported.


## LICENSE
[ICS](LICENSE.md)
