import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tagesschau.wirtschaft',
  appName: 'Tagesschau Wirtschaft',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'https://www.tagesschau.de/wirtschaft/',
  },
};

export default config;
