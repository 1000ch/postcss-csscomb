'use strict';
const test = require('ava');
const postcss = require('postcss');
const csscomb = require('..');

const original = `.foo {
  color: red;
  display: block;
}`;

const expected = `.foo {
  display: block;
  color: red;
}`;

test('via .use()', async t => {
  const {css} = await postcss().use(csscomb('zen')).process(original);
  t.is(css, expected);
});

test('via postcss([..]) without config', async t => {
  const {css} = await postcss([csscomb]).process(original);
  t.is(css, original);
});

test('via postcss([..]) with string config', async t => {
  const {css} = await postcss([csscomb('zen')]).process(original);
  t.is(css, expected);
});

test('via postcss([..]) with object config', async t => {
  const option = {'sort-order': ['display', 'color']};
  const {css} = await postcss([csscomb(option)]).process(original);
  t.is(css, expected);
});
