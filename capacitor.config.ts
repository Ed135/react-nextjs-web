import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'example.app.rentz',
  appName: 'rentz',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url: "http://localhost:3000"
  }
};

export default config;
