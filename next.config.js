const findUp = require('find-up')
const packageJsonPath = findUp.sync('package.json')
const packageJson = require(packageJsonPath)
module.exports = {
    basePath: '/simpleDatadogdemo',
    assetPrefix: '/simpleDatadogdemo/',
    productionBrowserSourceMaps: true,
    publicRuntimeConfig: {
        appVersion: packageJson.version,
        dataDogBrowserConfig:{
            applicationId:process.env.DATADOG_APPLICATION_ID,
            cliendId: process.env.DATADOG_CLIENT_TOKEN
        }
    }
  };