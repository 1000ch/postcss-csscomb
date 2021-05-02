import {parse} from 'postcss';
import CSSComb from 'csscomb';

export default function csscomb(options = {}) {
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
      result.root = parse(sorted);
    }
  };
}

export const postcss = true;
