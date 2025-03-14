// import { TextEncoder, TextDecoder } from 'util';
// Object.assign(global, { TextDecoder, TextEncoder });

module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
      '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
      '^react-router-dom/(.*)$': '<rootDir>/node_modules/react-router-dom/$1'
    },
    testPathIgnorePatterns: [
      '/node_modules/',
      '/public/'
    ]
  };