import { useFonts } from 'expo-font';
import React from 'react';
import type { TextProps } from 'react-native';
import { Text, StyleSheet } from 'react-native';

import theme from '@/constants/theme';

interface CustomTextProps extends TextProps {
  fontStyle?: keyof typeof theme.fontFamilies;
}

export default function CustomText({ fontStyle = 'regular', ...props }: CustomTextProps) {
  const [fontsLoaded] = useFonts(theme.fontsLoaded);

  if (!fontsLoaded) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  const fontFamily = theme.fontFamilies[fontStyle];

  return (
    <Text {...props} style={[{ fontFamily }, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
