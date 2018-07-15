module.exports = {
    setupFiles: ['<rootDir>/tests/setup.js', 'jest-localstorage-mock'],
    moduleNameMapper: {
        ".+\\.(png|jpg|mp4|webm|svg)$": "identity-obj-proxy"
      }
}