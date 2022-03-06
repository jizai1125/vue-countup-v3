module.exports = {
  semi: false,
  trailingComma: 'none',
  arrowParens: 'always',
  endOfLine: 'lf',
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  jsxSingleQuote: true,
  bracketSameLine: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ]
}
