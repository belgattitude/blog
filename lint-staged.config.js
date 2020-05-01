/**
 * Yo because prettier does not work with brackets [] used in nextjs
 * This is a temporary solution
 * @see https://github.com/okonet/lint-staged/issues/676
 */
const escape = require('shell-quote').quote;
const isWin = process.platform === 'win32';

module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    const escapedFileNames = filenames.map((filename) => `"${isWin ? filename : escape([filename])}"`).join(' ');
    return [
      `prettier --with-node-modules --write ${escapedFileNames}`,
      `eslint --no-ignore --max-warnings=50 --fix --rule 'react-hooks/exhaustive-deps: off' --fix ${filenames
        .map((f) => `"${f}"`)
        .join(' ')}`,
    ];
  },
  '**/*.{scss}': (filenames) => {
    const escapedFileNames = filenames.map((filename) => `"${isWin ? filename : escape([filename])}"`).join(' ');
    return [`prettier --with-node-modules --write ${escapedFileNames}`];
  },
  '**/*.{less}': (filenames) => {
    const escapedFileNames = filenames.map((filename) => `"${isWin ? filename : escape([filename])}"`).join(' ');
    return [`prettier --with-node-modules --write ${escapedFileNames}`];
  },
  '**/*.{yaml,json,md,html}': (filenames) => {
    const escapedFileNames = filenames.map((filename) => `"${isWin ? filename : escape([filename])}"`).join(' ');
    return [`prettier --with-node-modules --write ${escapedFileNames}`];
  },
};
