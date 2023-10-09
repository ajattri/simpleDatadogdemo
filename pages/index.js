import { datadogRum } from '@datadog/browser-rum';
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig()
const {dataDogBrowserConfig} = publicRuntimeConfig

datadogRum.init({
  applicationId: '44ce0f63-4483-4130-9d8e-5a0d99733de6',
  clientToken: 'pub948ebae886cfbe7da3e8fb42e7c18416',
  site: 'us5.datadoghq.com',
  service:'simpledemo',
  env:'prod',
  // Specify a version number to identify the deployed version of your application in Datadog 
  // version: '1.0.0', 
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
