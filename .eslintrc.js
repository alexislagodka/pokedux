const path = require('path')

module.exports = {
  globals: {
    fetch: false
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module',
    babelOptions: {
      configFile: path.join(__dirname, 'babel.config.json')
    }
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
