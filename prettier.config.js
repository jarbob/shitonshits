module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
  ],
}
