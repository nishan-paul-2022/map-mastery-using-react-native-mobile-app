import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import CustomText from '@/components/common/CustomText';
import { MenuSection } from '@/components/common/Drawer/MenuSection';
import MENU_SECTIONS from '@/components/common/Drawer/data';
import theme from '@/constants/theme';
import type { AppRoute } from '@/layout/routes';
import { useLanguage } from '@/localization/LanguageContext';

interface CustomDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  isLoggedIn: boolean;
  username: string | null;
  profilePicture: string | null;
  onLogin: () => void;
  onLogout: () => void;
  handleNavigation: (route: AppRoute) => void;
  activeTab: string;
  language: 'en' | 'bn';
  onLanguageToggle: () => void;
}

const LanguageToggle = ({
  language,
  onToggle,
}: {
  language: 'en' | 'bn';
  onToggle: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.languageToggle}>
      <CustomText style={[styles.languageText, language === 'en' && styles.activeLanguage]}>
        English
      </CustomText>
      <CustomText style={styles.languageDivider}>|</CustomText>
      <CustomText style={[styles.languageText, language === 'bn' && styles.activeLanguage]}>
        বাংলা
      </CustomText>
    </TouchableOpacity>
  );
};

export default function CustomDrawer({
  isOpen,
  username,
  profilePicture,
  handleNavigation,
  activeTab,
  onLogout,
}: CustomDrawerProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { t } = useTranslation();
  const { language: contextLanguage, setLanguage } = useLanguage();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, isOpen]);

  const handleLanguageToggle = () => {
    void setLanguage(contextLanguage === 'en' ? 'bn' : 'en');
  };

  return (
    <Animated.View style={[styles.drawer, { opacity: fadeAnim }]}>
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            {profilePicture ? (
              <Animated.Image source={{ uri: profilePicture }} style={styles.profileImage} />
            ) : (
              <View style={styles.defaultAvatarContainer}>
                <Ionicons name="person-circle-outline" size={50} color={theme.colors.primary} />
              </View>
            )}
          </View>
          <View style={styles.profileTextContainer}>
            <CustomText fontStyle="bold" style={styles.username}>
              {username ?? t('common.guest')}
            </CustomText>
            <CustomText style={styles.userHandle}>
              @{username?.toLowerCase().replace(/\s+/g, '_') ?? 'guest_user'}
            </CustomText>
            <LanguageToggle language={contextLanguage} onToggle={handleLanguageToggle} />
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {Object.entries(MENU_SECTIONS()).map(([key, items]) => {
          return (
            <MenuSection
              key={key}
              title={key}
              items={items}
              handleNavigation={handleNavigation}
              activeTab={activeTab}
              onLogout={onLogout}
            />
          );
        })}

        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Ionicons name="log-out-outline" size={24} color={theme.colors.error} />
            <CustomText style={styles.logoutText}>{t('profileDrawer.logout')}</CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  profileContainer: {
    padding: 16,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 24,
    ...theme.shadows.small,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  defaultAvatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: `${theme.colors.primary}20`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileTextContainer: {
    flex: 1,
  },
  username: {
    fontSize: 20,
    color: theme.colors.text,
    marginBottom: 4,
  },
  scrollView: {
    flex: 1,
    paddingBottom: 20,
  },
  logoutSection: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: 16,
    marginTop: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: `${theme.colors.error}15`,
    borderRadius: 12,
  },
  logoutText: {
    color: theme.colors.error,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: theme.fontFamilies.bold,
  },
  languageToggle: {
    flexDirection: 'row',
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: 16,
    padding: 4,
    marginTop: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  languageText: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: theme.colors.textSecondary,
  },
  activeLanguage: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamilies.bold,
    backgroundColor: `${theme.colors.primary}15`,
    borderRadius: 12,
  },
  languageDivider: {
    color: theme.colors.border,
    paddingHorizontal: 4,
  },
  userHandle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: 12,
  },
});
