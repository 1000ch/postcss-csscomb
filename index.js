'use strict';

const postcss = require('postcss');
const CSSComb = require('csscomb');

const postcssCSSComb = postcss.plugin('postcss-csscomb', function(options) {
  let optionType = typeof options;
  if (optionType !== 'object' && optionType !== 'string') {
    options = {};
  }

  let csscomb = new CSSComb(options);

  return function(root, result) {
    let sorted = csscomb.processString(root.source.input.css);
    result.root = postcss.parse(sorted);
  };
});

postcssCSSComb.process = function(css, options) {
  return postcss([postcssCSSComb(options)]).process(css);
};

module.exports = postcssCSSComb;
