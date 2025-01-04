module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    eqeqeq: 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-unused-vars': ['warn', { args: 'none' }],
    'consistent-return': 'error',
    'no-magic-numbers': ['error', { ignoreArrayIndexes: true }],
    'arrow-parens': ['error', 'always'],
    'prefer-const': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
