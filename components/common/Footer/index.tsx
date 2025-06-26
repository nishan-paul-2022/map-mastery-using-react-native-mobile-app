import Ionicons from '@expo/vector-icons/Ionicons';
import { usePathname } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import CustomText from '@/components/common/CustomText';
import theme from '@/constants/theme';
import { ROUTES, useAppNavigation } from '@/layout/routes';

export default function Footer() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (pathname.includes(ROUTES.HOME)) {
      setActiveTab('home');
    } else if (pathname.includes(ROUTES.LIVE_LOCATION)) {
      setActiveTab('activity');
    } else if (pathname.includes(ROUTES.PROFILE)) {
      setActiveTab('profile');
    } else if (pathname.includes(ROUTES.NOTIFICATION)) {
      setActiveTab('settings');
    } else {
      setActiveTab('home');
    }
  }, [pathname]);

  const { navigateTo } = useAppNavigation();

  const handleHomePress = () => {
    navigateTo(ROUTES.HOME);
  };

  const handleActivityPress = () => {
    navigateTo(ROUTES.LIVE_LOCATION);
  };

  const handleProfilePress = () => {
    navigateTo(ROUTES.PROFILE);
  };

  const handleSettingsPress = () => {
    navigateTo(ROUTES.NOTIFICATION);
  };

  return (
    <View style={styles.navbar}>
      {/* Home */}
      <TouchableOpacity onPress={handleHomePress} style={styles.navButton}>
        <Ionicons
          name={activeTab === 'home' ? 'home' : 'home-outline'}
          size={24}
          color={activeTab === 'home' ? theme.colors.primary : theme.colors.border}
        />
        <CustomText style={[styles.navText, activeTab === 'home' && styles.activeText]}>
          Home
        </CustomText>
      </TouchableOpacity>

      {/* Activity */}
      <TouchableOpacity onPress={handleActivityPress} style={styles.navButton}>
        <Ionicons
          name={activeTab === 'activity' ? 'analytics' : 'analytics-outline'}
          size={24}
          color={activeTab === 'activity' ? theme.colors.primary : theme.colors.border}
        />
        <CustomText style={[styles.navText, activeTab === 'activity' && styles.activeText]}>
          Activity
        </CustomText>
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity onPress={handleProfilePress} style={styles.navButton}>
        <Ionicons
          name={activeTab === 'profile' ? 'person' : 'person-outline'}
          size={24}
          color={activeTab === 'profile' ? theme.colors.primary : theme.colors.border}
        />
        <CustomText style={[styles.navText, activeTab === 'profile' && styles.activeText]}>
          Profile
        </CustomText>
      </TouchableOpacity>

      {/* Settings */}
      <TouchableOpacity onPress={handleSettingsPress} style={styles.navButton}>
        <Ionicons
          name={activeTab === 'settings' ? 'settings' : 'settings-outline'}
          size={24}
          color={activeTab === 'settings' ? theme.colors.primary : theme.colors.border}
        />
        <CustomText style={[styles.navText, activeTab === 'settings' && styles.activeText]}>
          Settings
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    backgroundColor: theme.colors.backgroundPrimary,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    height: 60,
    ...theme.shadows.medium,
  },
  navButton: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  navText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    color: theme.colors.textSecondary,
    fontFamily: theme.fontFamilies.regular,
  },
  activeText: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamilies.bold,
  },
});
