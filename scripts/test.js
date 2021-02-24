const execa = require('execa');
const stdio = 'inherit';

(async () => {
  try {
    console.log('Packing');
    await execa('npm', ['pack'], {
      stdio,
    });

    console.log('Changing to test directory');
    process.chdir('test');

    console.log('Installing required dependencies');
    await execa.command(
      'npm i -D eslint typescript @typescript-eslint/eslint-plugin eslint-plugin-sonarjs eslint-plugin-unicorn',
      {
        stdio,
      }
    );

    console.log('Installing this package locally');
    await execa.command('npm i -D ../eslint-config-good-code-1.0.2.tgz', {
      stdio,
    });

    console.log('Running eslint test');
    await execa.command('npm run test', {
      stdio,
    });
  } catch (error) {
    console.error(error);
  }
})();
