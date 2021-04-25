module.exports = {
    rootDir: "./__tests__",
    testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
    "setupFilesAfterEnv": [
        "../src/setupTests.js"
    ],
    testEnvironment: "enzyme",
    testEnvironmentOptions: {
        enzymeAdapter: "react16",
    },
};
