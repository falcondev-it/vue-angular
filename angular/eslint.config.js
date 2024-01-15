// @ts-check

// optional, if you have old eslint configs you want to use
import { FlatCompat } from '@eslint/eslintrc'

import _eslintConfig from '@louishaftmann/eslint-config'

const compat = new FlatCompat({
  recommendedConfig: {},
})

const eslintConfig = await _eslintConfig({
  nuxt: false,
})

/** @type {import('eslint').Linter.FlatConfig} */
const ignores = {
  ignores: [
    '.prettierrc.cjs',
    '.lintstagedrc.mjs',
    'node_modules/',
    'dist/',
    '.nuxt/',
    '.output/',
    '.temp/',
  ],
}

export default [
  // add other plugins, for example:
  ...compat.config({
    root: true,
    ignorePatterns: ['projects/**/*'],
    overrides: [
      {
        files: ['*.ts'],
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:@angular-eslint/recommended',
          'plugin:@angular-eslint/template/process-inline-templates',
        ],
        rules: {
          '@angular-eslint/directive-selector': [
            'error',
            {
              type: 'attribute',
              prefix: 'app',
              style: 'camelCase',
            },
          ],
          '@angular-eslint/component-selector': [
            'error',
            {
              type: 'element',
              prefix: 'app',
              style: 'kebab-case',
            },
          ],
        },
      },
      {
        files: ['*.html'],
        extends: [
          'plugin:@angular-eslint/template/recommended',
          'plugin:@angular-eslint/template/accessibility',
        ],
        rules: {},
      },
    ],
  }),
  ...eslintConfig,
  ignores,
]
