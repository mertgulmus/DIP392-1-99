module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/test'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testMatch: ['**/test/**/*.+(js|jsx)', '**/?(*.)+(spec|test).+(js|jsx)'],
    moduleFileExtensions: ['js', 'jsx'],
    setupFiles: ['jest-localstorage-mock'], // Add this line
};
