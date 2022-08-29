## clear-object

clear-object


## Install

```bash
$ npm install clear-object
```

## Usage

```js
const clearObject = require('clear-object')

clearObject({a: 1, b: null}, null)
// => {a: 1}

clearObject({a: 1, b: null, c: ''}, [null, ''])

// => {a: 1}

clearObject([null, '', 1], [null, ''])

// => [1]

clearObject([null, '', 1], null)

// => ['', 1]
```