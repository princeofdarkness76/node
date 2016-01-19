'use strict';
<<<<<<< HEAD
require('../common');
=======
const common = require('../common');
>>>>>>> origin/yosuke-patch-1
const assert = require('assert');
const qs = require('querystring');

assert.deepEqual(
<<<<<<< HEAD
  qs.parse('foo=>bar&&bar=>baz', '&&', '=>'),
=======
  qs.parse('foo=>bar&&bar=>baz', '&&', '=>'), 
>>>>>>> origin/yosuke-patch-1
  {foo: 'bar', bar: 'baz'}
);

assert.strictEqual(
<<<<<<< HEAD
  qs.stringify({foo: 'bar', bar: 'baz'}, '&&', '=>'),
=======
  qs.stringify({foo: 'bar', bar: 'baz'}, '&&', '=>'), 
>>>>>>> origin/yosuke-patch-1
  'foo=>bar&&bar=>baz'
);

assert.deepEqual(
<<<<<<< HEAD
  qs.parse('foo==>bar, bar==>baz', ', ', '==>'),
=======
  qs.parse('foo==>bar, bar==>baz', ', ', '==>'), 
>>>>>>> origin/yosuke-patch-1
  {foo: 'bar', bar: 'baz'}
);

assert.strictEqual(
<<<<<<< HEAD
  qs.stringify({foo: 'bar', bar: 'baz'}, ', ', '==>'),
=======
  qs.stringify({foo: 'bar', bar: 'baz'}, ', ', '==>'), 
>>>>>>> origin/yosuke-patch-1
  'foo==>bar, bar==>baz'
);
