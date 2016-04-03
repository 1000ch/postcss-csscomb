'use strict';

const postcss = require('postcss');
const CSScomb = require('csscomb');

const postcssCSScomb = postcss.plugin('postcss-csscomb', function(options) {
  let optionType = typeof options;
  if (optionType !== 'object' && optionType !== 'string') {
    options = {};
  }

  let csscomb = new CSScomb(options);

  return function(root, result) {
    let sorted = csscomb.processString(root.source.input.css);
    result.root = postcss.parse(sorted);
  };
});

postcssCSScomb.process = function(css, options) {
  return postcss([postcssCSScomb(options)]).process(css);
};

module.exports = postcssCSScomb;
