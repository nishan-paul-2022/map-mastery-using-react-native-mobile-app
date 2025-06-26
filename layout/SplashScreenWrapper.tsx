import { hideAsync } from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { SplashLottie } from '@/components/common/Icons';
import theme from '@/constants/theme';

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

export default function SplashScreenWrapper({ children }: SplashScreenWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    void hideAsync();
  }, []);

  const handleAnimationFinish = useCallback(() => {
    setIsLoading(false);
    router.replace('/'); // Navigate to the main app content
  }, [router]);

  return (
    <View style={styles.container}>
      {children}
      {isLoading && (
        <View style={[styles.container, styles.splashContainer]}>
          <LottieView
            source={SplashLottie}
            autoPlay
            loop={false}
            speed={1}
            onAnimationFinish={handleAnimationFinish}
            style={styles.animation}
            resizeMode="cover"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  splashContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  animation: {
    flex: 1,
  },
});
