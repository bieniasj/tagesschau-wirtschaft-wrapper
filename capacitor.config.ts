import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'tagesschau-wirtschaft-wrapper',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'https://www.tagesschau.de/wirtschaft/',
  },
};

export default config;
