import type { ExpoConfig } from 'expo/config';

const appTheme = {
  colors: {
    backgroundPrimary: '#262626',
    backgroundSecondary: '#1C1C1E',
  },
  images: {
    icon: './assets/logos/icon.png',
    adaptiveIcon: './assets/logos/adaptive-icon.png',
  },
};

const config: ExpoConfig = {
  name: 'TrainKoi',
  slug: 'trainkoi',
  version: '1.0.0',
  owner: 'kai-mobile',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  scheme: 'trainkoi',
  icon: appTheme.images.icon,
  splash: {
    image: appTheme.images.icon,
    backgroundColor: appTheme.colors.backgroundPrimary,
    resizeMode: 'contain',
  },
  ios: {
    bundleIdentifier: 'com.kai.trainkoi',
    buildNumber: '1',
    supportsTablet: true,
  },
  android: {
    package: 'dca92b0a-3bff-4a11-b59e-2395a04caf9f',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: appTheme.images.adaptiveIcon,
      backgroundColor: appTheme.colors.backgroundPrimary,
    },
  },
  androidStatusBar: {
    backgroundColor: appTheme.colors.backgroundSecondary,
    barStyle: 'light-content',
    translucent: true,
  },
  updates: {
    enabled: true,
    fallbackToCacheTimeout: 0,
    checkAutomatically: 'ON_LOAD',
  },
  newArchEnabled: true,
  plugins: [
    'expo-router', 
    'expo-font',
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: 'dca92b0a-3bff-4a11-b59e-2395a04caf9f',
    },
  },
};

export default config;
