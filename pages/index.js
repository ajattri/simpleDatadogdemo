import { datadogRum } from '@datadog/browser-rum';
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig()
const {dataDogBrowserConfig} = publicRuntimeConfig

datadogRum.init({
    debug:true,
    applicationId: dataDogBrowserConfig.applicationId,
    clientToken: dataDogBrowserConfig.clientToken,
    site: 'us5.datadoghq.com',
    service:'simpledemo',
    env:'prod',
    version: publicRuntimeConfig.appVersion, 
    sessionSampleRate:100,
    premiumSampleRate: 100,
    trackUserInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();

function HomePage() {
  return (
    <div>
      <p>Welcome to Simple Next.js App</p>
    </div>
  );
}

export default HomePage;
