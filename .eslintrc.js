module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/destructuring-assignment": [0, "always"],
    "react/prop-types": "off",
    "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
    "import/no-cycle": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "no-useless-concat": "off",
    "react/no-unknown-property": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },

};
