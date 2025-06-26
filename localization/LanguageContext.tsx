import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/localization';
import { Alert } from 'react-native';

interface LanguageContextType {
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<'en' | 'bn'>('en');

  useEffect(() => {
    void loadSavedLanguage();
  }, []);

  const loadSavedLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('user-language');
      if (savedLanguage === 'en' || savedLanguage === 'bn') {
        setLanguageState(savedLanguage);
        await i18n.changeLanguage(savedLanguage);
      }
    } catch (error) {
      Alert.alert('Error loading language:', error as string);
    }
  };

  const setLanguage = async (lang: 'en' | 'bn') => {
    try {
      await AsyncStorage.setItem('user-language', lang);
      setLanguageState(lang);
      await i18n.changeLanguage(lang);
    } catch (error) {
      Alert.alert('Error setting language:', error as string);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
