/* eslint-env node */

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: {
    ".(ts|tsx)": "ts-jest"
  }
}

module.exports = config;
