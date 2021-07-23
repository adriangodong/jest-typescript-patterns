/* eslint-env node */

module.exports = {
    projects: [
        {
            displayName: "test",
            transform: {
                ".(ts|tsx)": "ts-jest"
            },
            moduleFileExtensions: [
                "ts",
                "tsx",
                "js",
                "json"
            ],
            moduleNameMapper: {
                "\\.(less)$": "identity-obj-proxy"
            },
            testPathIgnorePatterns: [
                "/node_modules/"
            ],
            testRegex: "\\.spec\\.(ts|tsx)$"
        }
    ]
}
