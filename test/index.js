'use strict';

const test = require('ava');
const postcss = require('postcss');
const csscomb = require('../');

let css = `.foo {
  color: red;
  display: block;
}`;

let sorted = `.foo {
  display: block;
  color: red;
}`;

test('via .use()', async t => {
  let result = await postcss().use(csscomb('zen')).process(css);
  t.is(result.css, sorted);
});

test('via postcss([..]) without config', async t => {
  let result = await postcss([csscomb]).process(css);
  t.is(result.css, css);
});

test('via postcss([..]) with string config', async t => {
  let result = await postcss([csscomb('zen')]).process(css);
  t.is(result.css, sorted);
});

test('via postcss([..]) with object config', async t => {
  let option = { 'sort-order': ['display', 'color'] };
  let result = await postcss([csscomb(option)]).process(css);
  t.is(result.css, sorted);
});
