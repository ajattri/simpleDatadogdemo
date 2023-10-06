const packageJson = require('./package.json');
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