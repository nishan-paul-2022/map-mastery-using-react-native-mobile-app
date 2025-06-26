import LottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Button from '@/components/common/Button';
import { NotFoundLottie } from '@/components/common/Icons';
import theme from '@/constants/theme';
import { useAppNavigation } from '@/layout/routes';

export default function NotFoundScreen() {
  const { goBack, goHome } = useAppNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView source={NotFoundLottie} autoPlay loop style={styles.animation} />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={goBack} text="Back" variant="outlined" style={styles.button} />
        <Button onPress={goHome} text="Home" style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    flex: 1,
    width: '100%',
    maxHeight: Dimensions.get('window').height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: theme.spacing.xl,
    gap: theme.spacing.md,
    marginTop: theme.spacing.xl,
  },
  button: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.small,
  },
});
