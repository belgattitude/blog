const { getBabelAliases } = require('../../config/build/babel-aliases');

/**
 * Return babel aliases in a shape that jest eats
 * @param {string} rootDir
 */
const getAliases = (rootDir = '<rootDir>') => {
  const jestAliases = {};
  for (const [key, path] of Object.entries(getBabelAliases())) {
    jestAliases[`^${key}(.*)$`] = path.replace(/^.\//, `${rootDir}/`) + '$1';
  }
  return jestAliases;
};

module.exports = {
  getAliases,
};
