const { getBabelAliases } = require('./config/build/babel-aliases');

const aliasPlugin = [
  'module-resolver',
  {
    root: ['.'],
    alias: {
      ...getBabelAliases(),
    },
  },
];

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {},
        'transform-runtime': {},
        'styled-jsx': {},
        'class-properties': {},
      },
    ],
  ],
  plugins: [aliasPlugin, 'macros', '@emotion/babel-plugin'],
};
