module.exports = {
  parser: 'eslint-html-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    // ...
    'prettier/prettier': ['error', { singleQuote: true }], //fix  prettier and eslin quote conflict
  },
}
