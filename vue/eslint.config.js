// @ts-check

// optional, if you have old eslint configs you want to use
// import { FlatCompat } from "@eslint/eslintrc";

import _eslintConfig from '@louishaftmann/eslint-config'

//const compat = new FlatCompat();

// TODO add tsconfig paths and update nuxt option
const eslintConfig = await _eslintConfig({
  nuxt: true,
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
  // ...compat.extends('plugin:@tanstack/eslint-plugin-query/recommended'),
  ...eslintConfig,
  ignores,
]
