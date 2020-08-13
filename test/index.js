'use strict';
const test = require('ava');
const postcss = require('postcss');
const csscomb = require('..');

const css = `.foo {
  color: red;
  display: block;
}`;

const sorted = `.foo {
  display: block;
  color: red;
}`;

test('via .use()', async t => {
  const result = await postcss().use(csscomb('zen')).process(css);
  t.is(result.css, sorted);
});

test('via postcss([..]) without config', async t => {
  const result = await postcss([csscomb]).process(css);
  t.is(result.css, css);
});

test('via postcss([..]) with string config', async t => {
  const result = await postcss([csscomb('zen')]).process(css);
  t.is(result.css, sorted);
});

test('via postcss([..]) with object config', async t => {
  const option = {'sort-order': ['display', 'color']};
  const result = await postcss([csscomb(option)]).process(css);
  t.is(result.css, sorted);
});
