module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:mdx/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
    },
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-prettier'],
  rules: {
    /* ******************************* FORMATTING ******************************* */

    indent: 0,
    'react/destructuring-assignment': 0,
    'react/no-did-mount-set-state': 0,
    'linebreak-style': 0,
    'operator-linebreak': 0,
    'max-len': 0,
    'object-curly-spacing': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-shadow': 0,
    semi: 0,
    quotes: [2, 'single', { avoidEscape: true }],

    /* ******************************* JAVASCRIPT ******************************* */
    camelcase: 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 0,
    'no-unused-vars': 'error',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'no-empty': 'warn',
    'no-case-declarations': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',

    /* ******************************* JSX / REACT ****************************** */

    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'mdx'] }],
    'react/display-name': 'off',
    'no-nested-ternary': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,

    /* ****************************** DEPENDENCIES ****************************** */

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      files: ['*.mdx', '*.jsx'],
      rules: {
        semi: 0,
        'react/jsx-indent': 0,
      },
    },
    {
      files: ['*.stories.*', 'stories.*'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
