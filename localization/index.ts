import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { bn, en } from '@/localization/translations';
import { Alert } from 'react-native';

const LANGUAGES = {
  en: {
    translation: en,
  },
  bn: {
    translation: bn,
  },
};

const LANGUAGE_DETECTOR = {
  type: 'languageDetector' as const,
  async: true,
  detect: async (callback: (lang: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem('user-language');
      if (savedLanguage) {
        callback(savedLanguage);
        return;
      }
    } catch (error) {
      Alert.alert('Error reading language', error as string);
    }
    callback('en');
  },
  init: () => {},
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem('user-language', language);
    } catch (error) {
      Alert.alert('Error saving language', error as string);
    }
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error) => {
    Alert.alert('Error initializing i18n:', error as string);
  });

export default i18n;
