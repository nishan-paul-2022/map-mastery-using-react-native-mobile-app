import theme from '@/constants/theme';
import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: 'filled' | 'outlined';
  textStyle?: object;
}

export default function Button({
  text,
  variant = 'filled',
  style,
  textStyle,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'outlined' ? styles.outlinedButton : styles.filledButton,
        style,
      ]}
      {...props}>
      <Text
        style={[
          styles.text,
          variant === 'outlined' ? styles.outlinedText : styles.filledText,
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
  },
  filledButton: {
    backgroundColor: theme.colors.primary,
  },
  outlinedButton: {
    backgroundColor: theme.colors.backgroundPrimary,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  text: {
    fontSize: theme.typography.sizes.md,
    fontWeight: '600',
  },
  filledText: {
    color: theme.colors.white,
  },
  outlinedText: {
    color: theme.colors.primary,
  },
});
