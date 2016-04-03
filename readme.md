# postcss-csscomb [![Build Status](https://travis-ci.org/1000ch/postcss-csscomb.svg?branch=master)](https://travis-ci.org/1000ch/postcss-csscomb)

[PostCSS](https://github.com/postcss/postcss) plugin to apply [CSScomb](https://github.com/csscomb/csscomb.js).

## Install

```sh
npm install --save-dev postcss-csscomb
```

## Usage

```javascript
const postcss = require('postcss');
const csscomb = require('postcss-csscomb');

let css = `.foo {
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
let option = {
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

MIT: http://1000ch.mit-license.org/
