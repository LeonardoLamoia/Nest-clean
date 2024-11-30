const typescript = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser, // Parser configurado
    },
    plugins: {
      '@typescript-eslint': typescript, // Plugins como objetos
    },
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'warn',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    languageOptions: {
      parser, // Parser configurado
      globals: {
        describe: 'readonly', // Substituindo "env: vitest"
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'no-new': 'off'
    },
  },
];
