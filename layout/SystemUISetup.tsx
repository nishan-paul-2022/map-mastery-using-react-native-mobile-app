import * as NavigationBar from 'expo-navigation-bar';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

import theme from '@/constants/theme';

export default function NavigationBarSetup() {
  useEffect(() => {
    const setNavigationBarColor = async () => {
      void SystemUI.setBackgroundColorAsync(theme.colors.backgroundPrimary);

      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(theme.colors.backgroundSecondary);

      await NavigationBar.setButtonStyleAsync('light');
      await NavigationBar.setBackgroundColorAsync(theme.colors.backgroundPrimary);
    };

    void setNavigationBarColor();
  }, []);

  return null;
}
