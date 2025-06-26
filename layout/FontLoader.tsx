import React from 'react';
import { useFonts } from 'expo-font';

import theme from '@/constants/theme';

interface FontLoaderProps {
  children: React.ReactNode;
}

export default function FontLoader({ children }: FontLoaderProps) {
  const [fontsLoaded] = useFonts(theme.fontsLoaded);

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
}
