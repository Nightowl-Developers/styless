module.exports = async () => {
    return {
        roots: ['<rootDir>/src'],
        transform: {
            '^.+\\.tsx?$': 'ts-jest'
        },
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
        rootDir: ".",
        verbose: true,
    };
};
