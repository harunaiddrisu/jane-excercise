module.exports = {
    preset: 'react-native',
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    transform: {
        "\\.(ts|tsx)$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "testPathIgnorePatterns": [
        "\\.mock",
        "<rootDir>/node_modules/"
    ],
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|@react-native-community|react-navigation)',
    ],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
};
