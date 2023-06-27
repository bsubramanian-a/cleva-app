module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended', // Add the recommended rules for React
    'plugin:react-native/all', // Add additional rules specific to React Native
  ],
  rules: {
    // Add or override rules here
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    // Add more rules as needed
  },
};
