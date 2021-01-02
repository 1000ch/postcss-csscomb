# postcss-csscomb ![GitHub Actions Status](https://github.com/1000ch/postcss-csscomb/workflows/test/badge.svg?branch=master)

[PostCSS](https://github.com/postcss/postcss) plugin to apply [CSScomb](https://github.com/csscomb/csscomb.js).

## Install

```sh
npm install --save-dev postcss postcss-csscomb
```

## Usage

```javascript
const postcss = require('postcss');
const csscomb = require('postcss-csscomb');

const css = `.foo {
  color: red;
  display: block;
}`;

// to use preset config
postcss([csscomb('zen')])
  .process(css)
  .then(result => {
    console.log(result.css);
    // .foo {
    //   display: block;
    //   color: red;
    // }
  });

// pass an config as object
const option = {
  'sort-order': ['display', 'color']
};

postcss([csscomb(option)])
  .process(css)
  .then(result => {
    console.log(result.css);
    // .foo {
    //   display: block;
    //   color: red;
    // }
  });
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
