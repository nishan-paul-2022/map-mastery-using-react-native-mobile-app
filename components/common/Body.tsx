import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';

import theme from '@/constants/theme';

interface BodyProps {
  children?: React.ReactNode;
  topSticky?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Body({ children, topSticky, footer }: BodyProps) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
      {topSticky && topSticky}

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {children}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {footer && footer}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  scrollContainer: {
    padding: 16,
  },
  bottomSpacing: {
    height: 60,
  },
});
