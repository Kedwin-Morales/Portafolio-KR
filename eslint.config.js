import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginTailwindcss.configs.recommended,
  {
    settings: {
      tailwindcss: {
        cssConfigPath: './src/styles/global.css',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  eslintConfigPrettier,
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
]);
