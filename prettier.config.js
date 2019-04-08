const { prettier: prettierConfig } = require('kcd-scripts/config')

module.exports = Object.assign(prettierConfig, {
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: true,
})
