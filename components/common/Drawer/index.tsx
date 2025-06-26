import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Platform, Pressable, StyleSheet } from 'react-native';

import CustomDrawer from '@/components/common/Drawer/CustomDrawer';
import theme from '@/constants/theme';
import type { AppRoute } from '@/layout/routes';
import { useAppNavigation } from '@/layout/routes';

const { width: screenWidth } = Dimensions.get('window');

interface DrawerProps {
  isDrawerOpen: boolean;
  drawerAnim: Animated.Value;
  toggleDrawer: () => void;
  onLogout: () => void;
}

export default function ProfileDrawer({
  isDrawerOpen,
  drawerAnim,
  toggleDrawer,
  onLogout,
}: DrawerProps) {
  const [activeTab, setActiveTab] = useState('home');
  const { navigateTo } = useAppNavigation();
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  const handleNavigation = (route: AppRoute) => {
    setActiveTab(route);
    navigateTo(route);
    toggleDrawer();
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      return prev === 'en' ? 'bn' : 'en';
    });
  };

  useEffect(() => {
    Animated.timing(drawerAnim, {
      toValue: isDrawerOpen ? 0 : -screenWidth * 0.85,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [drawerAnim, isDrawerOpen]);

  return (
    <>
      {isDrawerOpen && <Pressable style={styles.overlay} onPress={toggleDrawer} />}
      <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: drawerAnim }] }]}>
        <CustomDrawer
          isOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          isLoggedIn={true}
          username="Lady Gaga"
          profilePicture="https://picsum.photos/400"
          onLogin={() => {}}
          onLogout={onLogout}
          handleNavigation={handleNavigation}
          activeTab={activeTab}
          language={language}
          onLanguageToggle={toggleLanguage}
        />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 100,
    width: screenWidth * 0.85,
    backgroundColor: theme.colors.backgroundSecondary,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
});
