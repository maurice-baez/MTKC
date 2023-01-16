module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  // extends: 'airbnb',
  globals: { __DEV__: false },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'sort-destructure-keys',
    'import',
  ],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'implicit-arrow-linebreak': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 2,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': [1, { code: 100 }],
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'object-curly-newline': [
      2,
      {
        minProperties: 4,
        multiline: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': 0,
    'prefer-template': 2,
    quotes: [1, 'single', { avoidEscape: true }],
    'react/forbid-prop-types': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-fragments': ['off', 'element'],
    'react/jsx-no-target-blank': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-sort-props': 2,
    'react/no-unused-prop-types': 2,
    'react/prop-types': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'react/sort-prop-types': 2,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'require-yield': 0,
    semi: ['error', 'always'],
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      { caseSensitive: false },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
  settings: {
    'import/resolver': { 'node': { 'moduleDirectory': ['node_modules', 'src/'] } },
    react: { version: 'detect' },
  },
};