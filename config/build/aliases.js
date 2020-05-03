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

module.exports = {
  getBabelAliases,
};
