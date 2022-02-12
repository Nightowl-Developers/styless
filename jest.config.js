module.exports = async () => {
    return {
        roots: ['<rootDir>/src'],
        transform: {
            '^.+\\.tsx?$': 'ts-jest'
        },
        collectCoverage: true,
        collectCoverageFrom: [
            'src/**/*.(test|spec).tsx?$'
        ],
        coverageIgnorePatterns: [
            '.github',
            '.storybook',
            'dist',
            'Dockerfiles',
            'node_modules'
        ],
        coverageDirectory: '<rootDir>/dist/coverage',
        mapCoverage: true,
        setupFilesAfterEnv: [
            // '@testing-library/react/cleanup-after-each',
            '@testing-library/jest-dom/extend-expect'
        ],
        testRegex: '(__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
        moduleFileExtensions: [
            'ts',
            'tsx',
            'js',
            'jsx',
            'json',
            'node'
        ],
        verbose: true,
    };
};
