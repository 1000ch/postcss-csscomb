'use strict';
const postcss = require('postcss');
const CSSComb = require('csscomb');

module.exports = (options = {}) => {
  const optionType = typeof options;
  if (optionType !== 'object' && optionType !== 'string') {
    options = {};
  }

  return {
    postcssPlugin: 'postcss-csscomb',
    async Once(root, {result}) {
      const {css} = root.source.input;
      const csscomb = new CSSComb(options);
      const sorted = await csscomb.processString(css);
      result.root = postcss.parse(sorted);
    }
  };
};

module.exports.postcss = true;
