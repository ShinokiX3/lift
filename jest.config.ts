/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = async () => {
    return {
      verbose: true,
      testMatch: ['**/*.test.ts?(x)'],
      preset: 'ts-jest',
      testEnvironment: 'node',
    };
};