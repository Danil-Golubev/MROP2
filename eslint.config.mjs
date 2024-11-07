// .eslintrc.mjs
import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs'], // Укажите целевые файлы
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        console:'readonly',
         process: 'readonly',
        browser: true, // Для браузерной среды
        node: true, // Для Node.js
      },
    },
    plugins: {
      react, // Подключаем плагин для React
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
    settings: {
      react: {
        version: 'detect', // Автоматическое определение версии React
      },
    },
  },
];
