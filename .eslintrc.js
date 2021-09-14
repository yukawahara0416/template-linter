module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-undef': 'off'
  }
};
