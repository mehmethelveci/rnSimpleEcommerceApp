module.exports = {
  root: true,
  extends: 'eser', //'@react-native-community',
  parser: "babel-eslint",
  plugins: [
    "react",
    "react-native",
    "jest",
  ],
  rules: {
    "prettier/prettier": 0,
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": true,
        "variables": false
      }
    ],
    "indent": [
      "error",
      2
    ],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "eqeqeq": "off",
    "no-undef-init": "off",
    "no-undef": "error",
    "no-console": "off",
    "no-alert": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "max-len": "off",
    "no-nested-ternary": "off",
    "no-confusing-arrow": "off",
    "no-return-await": "off",
    "max-lines-per-function": "off",
    "arrow-parens": "off",
    "no-return-assign": "off",
    "class-methods-use-this": "off",
    "array-bracket-spacing": 1,
    "linebreak-style": "off",
    "arrow-body-style": "off",
    "no-unused-vars": "off",
  }
};
