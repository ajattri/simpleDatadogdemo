const { execSync } = require('child_process');
const packageJson = require('./package.json');

process.env.DATADOG_API_KEY = 'c183d0de92c50350a34003fff61f3632123';
process.env.DATADOG_SITE = 'us5.datadoghq.com';

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

try {
  const output =  execSync(command);
  console.log(output.toString());
} catch (error) {
  console.error('Error occurred: ==', error);
  console.error('Error:', error.message);
  console.error('Stack Trace:', error.stack);
  process.exit(1);
}
