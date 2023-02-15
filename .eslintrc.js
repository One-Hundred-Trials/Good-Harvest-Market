module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'react/destructuring-assignment': [0, 'always'],
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': [
      2,
      {
        allowExpressions: true,
      },
    ],
    'import/no-cycle': 'off',
    'no-console': 'off',
    'no-param-reassign': 0,
    'no-unused-vars': 'off',
    'no-else-return': 'off',
    'no-useless-concat': 'off',
    'no-useless-escape': 'off',
    'no-alert': 'off',
    'react/no-unknown-property': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],

    // 중괄호 안 일괄된 줄바꿈
    'object-curly-newline': 'off',
  },
};
