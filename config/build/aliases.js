const aliases = {
  _config: './src/config',
  _core: './src/core',
  _assets: './src/assets',
  _features: './src/features',
  _public: './public',
  _components: './src/components',
  _themes: './src/themes',
  _pages: './src/pages',
};

/**
 * Return aliases for babel
 */
const getBabelAliases = () => {
  return aliases;
};

/**
 * Return project aliases
 * @param {string} rootDir
 */
const getJestAliases = (rootDir = '<rootDir>') => {
  return {
    '^_config(.*)$': `${rootDir}/src/config$1`,
    '^_core(.*)$': `${rootDir}/src/core$1`,
    '^_assets(.*)$': `${rootDir}/src/assets$1`,
    '^_features(.*)$': `${rootDir}/src/features$1`,
    '^_public(.*)$': `${rootDir}/public$1`,
    '^_components(.*)$': `${rootDir}/src/components$1`,
    '^_data(.*)$': `${rootDir}/src/data$1`,
    '^_pages(.*)$': `${rootDir}/src/pages$1`,
  };
};

module.exports = {
  getJestAliases,
  getBabelAliases,
};
