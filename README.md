# consto [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A way to define an object having the same value to its name attribute string

Consto stands for constant objects.

## Installation

```sh
$ npm install --save consto
```

## Usage

```js
var consto = require('consto');


//Upper Style, default style
var co = consto(['rain', 'sea', 'key']);

>co.RAIN => 'RAIN'
>co.SEA => 'SEA',
>co.KEY => 'KEY'

//Free Style, by specifiy a true
var fs = consto(['Rain', 'sea', 'KEY'], true);
// > fs
// { Rain: 'Rain', sea: 'sea', KEY: 'KEY' }

```

## License

MIT © [calidion](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/consto.svg
[npm-url]: https://npmjs.org/package/consto
[travis-image]: https://travis-ci.org/calidion/consto.svg?branch=master
[travis-url]: https://travis-ci.org/calidion/consto
[daviddm-image]: https://david-dm.org/calidion/consto.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/calidion/consto
[coveralls-image]: https://coveralls.io/repos/calidion/consto/badge.svg
[coveralls-url]: https://coveralls.io/r/calidion/consto
