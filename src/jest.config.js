const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src/'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    collectCoverage: true,
    coverageReporters: ['html'],
    coverageDirectory: 'coverage/my-app',
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: '<rootDir>/'
    })
};