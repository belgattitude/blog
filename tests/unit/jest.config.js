'use strict';

const path = require('path');
const { getAliases } = require(path.join(__dirname, '/../config/aliases'));

const configPath = path.join(__dirname, '/../config');
console.log('configPath', configPath);
const esModules = ['lodash'];

module.exports = {
  name: 'unit',
  displayName: 'unit',
  rootDir: '../../',
  verbose: true,
  testURL: 'http://localhost/',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  setupFiles: [`${configPath}/jest.unit.env.js`, `${configPath}/jest.stubs.ts`],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    `${configPath}/jest.tests.ts`,
    `${configPath}/jest.unit.lifecycles.js`,
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/tests/unit/pages/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '^.+\\.css$': `${configPath}/cssTransform.js`,
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': `${configPath}/fileTransform.js`,
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss|less)$',
    `/node_modules/(?!${esModules.join('|')}).+\\.js$`,
  ],
  modulePaths: [],
  moduleNameMapper: {
    ...{ ...getAliases() },
    /**
     * For @testing-library/react
     */
    '^test-utils$': '<rootDir>/config/jest/test-utils',
    '^react-native$': 'react-native-web',
    // Hack, because 'ky' does not point to commonjs module (esm by default)
    '^ky$': require.resolve('ky').replace('index.js', 'umd.js'),
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^lodash-es$': 'lodash',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${configPath}/fileTransform.js`,
  },

  globals: {
    window: {},
    'ts-jest': {
      diagnostics: true,
      babelConfig: { extends: './babel.config.js' },
      tsConfig: './tsconfig.jest.json',
    },
  },
};
