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
    'import/extensions': [
      'error',
      {
        ignorePackages: false,
      },
      {
        js: 'never',
        jsx: 'never',
      },
    ],
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
    'no-unused-vars': 'off',
    'no-else-return': 'off',
    'no-useless-concat': 'off',
    'no-useless-escape': 'off',
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
    // 'object-curly-newline': [
    //   'error',
    //   {
    //     // 객체 리터럴 구성
    //     ObjectExpression: 'always',
    //     // 객체 분해 할당의 객체 패턴에 대한 구성
    //     ObjectPattern: {
    //       multiline: true,
    //     },
    //     // 명명된 가져오기에 대한 구성
    //     ImportDeclaration: 'never',
    //     // 명명된 내보내기 구성
    //     ExportDeclaration: {
    //       multiline: true,
    //       minProperties: 3,
    //     },
    //   },
    // ],
    // 같은 줄에 있는 식 사이에 줄 바꿈을 삽입합니다.
    // 'react/jsx-one-expression-per-line': 'off',
  },
};
