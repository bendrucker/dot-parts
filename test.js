'use strict'

var test = require('tape')
var dotParts = require('./')

test(function (t) {
  t.deepEqual(dotParts('foo'), ['foo'])
  t.deepEqual(dotParts('foo.bar'), ['foo', 'bar'])
  t.deepEqual(dotParts('foo.bar.baz'), ['foo', 'bar', 'baz'])
  t.deepEqual(dotParts('foo\.bar'), ['foo', 'bar'])
  t.deepEqual(dotParts('foo\\.bar'), ['foo.bar'])
  t.deepEqual(dotParts('foo\\.bar.baz'), ['foo.bar', 'baz'])
  t.end()
})
