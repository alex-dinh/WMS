module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  // extends: ['plugin:prettier/recommended'],
  rules: {
    "indent": ["error", 4, {"SwitchCase": 1}],
    "array-element-newline": 0,
  },
};
