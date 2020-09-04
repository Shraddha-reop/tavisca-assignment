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


//     testURL: 'http://localhost:4200/',
//     preset: 'jest-preset-angular',
//     moduleNameMapper: {
//         '^@shared$': '<rootDir>/dist/shared',
//         '^@shared/(.*)$': '<rootDir>/dist/shared/$1',
//         '^projects/(.*)$': '<rootDir>/projects/$1'
//     },
//     transform: {
//         '^.+\\.(ts|js|html)$': 'ts-jest'
//     },
//     setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
//     testResultsProcessor: 'jest-sonar-reporter',
//     testPathIgnorePatterns: ['cypress', 'coverage'],
//     modulePathIgnorePatterns: ['<rootDir>/dist'],
//     collectCoverageFrom: [
//         'projects/**/*.ts',
//         '!projects/**/index.ts',
//         '!projects/**/public_api.ts',
//         '!projects/**/*.config.ts',
//         '!projects/**/*.model.ts',
//         '!projects/**/*.stories.ts',
//         '!projects/**/typings.d.ts',
//         '!projects/**/main.ts',
//         '!projects/**/polyfills.ts',
//         '!projects/**/testing/**/*.*',
//         '!projects/**/__mocks__/**/*.*',
//         '!projects/**/environments/*.*'
//     ],
//     coverageThreshold: {
//         global: {
//             branches: 60,
//             functions: 90,
//             lines: 90,
//             statements: 90
//         }
//     }
// };

