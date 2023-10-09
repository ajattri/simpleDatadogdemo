const { execSync } = require('child_process');
const packageJson = require('./package.json');

const datadogApiKey = process.env.DATADOG_API_KEY;

if (!datadogApiKey) {
  console.error('DATADOG_API_KEY is not set.');
  process.exit(1);
}


const sourceMapFolderPath = `${__dirname}/out`

const command = `datadog-ci sourcemaps upload ${sourceMapFolderPath} \
--service=simpledemo \
--release-version=v${packageJson.version} \
--minified-path-prefix=https://ajattri.github.io/simpleDatadogdemo`

console.log({command})

try {
  // execSync(`npx datadog-ci sourcemaps upload ./out \
  //   --service=simpledemo \
  //   --release-version=${packageJson.version} \
  //   --minified-path-prefix=https://ajattri.github.io/simpleDatadogdemo/ \
  //   --project-root=${process.cwd()}`, {
  //     stdio: 'inherit',  // this will show the command output in console
  //     env: {
  //       ...process.env,
  //       DATADOG_API_KEY: datadogApiKey
  //     }
  //   });

  execSync(command);
} catch (error) {
  console.error('Error occurred: ==', error);
  console.error('Error:', error.message);
  console.error('Stack Trace:', error.stack);
  //process.exit(1);
}
