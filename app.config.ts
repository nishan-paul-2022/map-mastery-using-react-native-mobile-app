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
  name: 'Map Mastery',
  slug: 'map-mastery',
  version: '1.0.0',
  owner: 'x-or',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  scheme: 'map-mastery',
  icon: appTheme.images.icon,
  splash: {
    image: appTheme.images.icon,
    backgroundColor: appTheme.colors.backgroundPrimary,
    resizeMode: 'contain',
  },
  ios: {
    bundleIdentifier: 'com.xor.mapmastery',
    buildNumber: '1',
    supportsTablet: true,
  },
  android: {
    package: 'com.xor.mapmastery',
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
      projectId: '47a6c0f3-80db-426e-898a-6fc422179632',
    },
  },
};

export default config;
