// @ts-check
const execa = require('execa');
const stdio = 'inherit';
const fs = require('fs');

/** Commands */
const pack = 'npm pack';
const installDeps =
  'npm i -D eslint typescript @typescript-eslint/eslint-plugin eslint-plugin-sonarjs eslint-plugin-unicorn';
const installPackage = (packageName) => `npm i -D ../${packageName[0]}`;
const runTest = 'npm run test';


/**  Outputs to stdio */
function sh(command) {
  return execa.command(command, {
    stdio,
  });
}

/** Main */
(async () => {
  try {
    console.log('🚀 Packing');
    await sh(pack);

    const files = fs.readdirSync('.', 'utf8');
    const packageName = files.filter((file) => {
      return file.includes('eslint-config-good-code-');
    });

    console.log('🚀 Changing to test directory');
    process.chdir('test');

    console.log('🚀 Installing required dependencies');
    await sh(installDeps);

    console.log('🚀 Installing this package locally:', packageName[0]);
    await sh(installPackage(packageName));

    console.log('🚀 Running eslint test');
    await sh(runTest);

    const result = require('../test/1.json');

    if (result[0]['errorCount'] !== 7) {
      throw new Error('Eslint error count mismatch');
    }

    console.log('🚀 Test passed ✅');
  } catch (error) {
    console.error(error);
  }
})();
