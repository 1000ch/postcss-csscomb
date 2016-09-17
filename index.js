'use strict';

const postcss = require('postcss');
const csscomb = require('csscomb');

module.exports = postcss.plugin('postcss-csscomb', options => {
  let optionType = typeof options;
  if (optionType !== 'object' && optionType !== 'string') {
    options = {};
  }

  return (root, result) => {
    let css = root.source.input.css;
    let sorted = new csscomb(options).processString(css);
    result.root = postcss.parse(sorted);
  };
});

module.exports.process = (css, options) => postcss([
  module.exports(options)
]).process(css);
