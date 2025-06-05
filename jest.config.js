const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  verbose: true,
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@/src(.*)$': '<rootDir>/sec$1',
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/styles(.*)$': '<rootDir>/styles$1',
    '^@/config(.*)$': '<rootDir>/config$1',
    '^@/pages(.*)$': '<rootDir>/pages$1',
    '^@/types(.*)$': '<rootDir>/types$1',
    '^@/hooks(.*)$': '<rootDir>/hooks$1',
    '^Components/atoms$': '<rootDir>/components/atoms',
    '^Components/molecules$': '<rootDir>/components/molecules',
    '^Components/organisms$': '<rootDir>/components/organisms',
    '^Components/templates$': '<rootDir>/components/templates',
    '^Hooks(.*)$': '<rootDir>/hooks$1',
    '^Config(.*)$': '<rootDir>/config$1',
  },
  collectCoverageFrom: [
    '**/pages/home/**',
    '!**/src/**',
    '!**/components/**',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/out/**',
    '!**/hooks/**',
    '!**/config/**',
    '!**/public/**',
    '!**/styles/**',
    '!**/types/**',
  ],
};

module.exports = createJestConfig(customJestConfig);
