import type Ionicons from '@expo/vector-icons/Ionicons';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import CustomText from '@/components/common/CustomText';
import { MenuItem } from '@/components/common/Drawer/MenuItem';
import theme from '@/constants/theme';
import type { AppRoute } from '@/layout/routes';

interface MenuSectionProps {
  title: string;
  items: {
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    route: AppRoute | 'LOGOUT';
    badge?: number;
    isNew?: boolean;
  }[];
  handleNavigation: (route: AppRoute) => void;
  activeTab: string;
  onLogout: () => void;
}

function MenuSectionComponent({
  title,
  items,
  handleNavigation,
  activeTab,
  onLogout,
}: MenuSectionProps) {
  return (
    <View style={styles.section}>
      <CustomText fontStyle="bold" style={styles.sectionTitle}>
        {title}
      </CustomText>
      {items.map((item, index) => {
        return (
          <MenuItem
            key={item.route}
            item={{ ...item, isActive: activeTab === item.route }}
            onPress={() => {
              return item.route === 'LOGOUT'
                ? onLogout()
                : handleNavigation(item.route as AppRoute);
            }}
            isLastItem={index === items.length - 1}
          />
        );
      })}
    </View>
  );
}

export const MenuSection = memo(MenuSectionComponent);

MenuSection.displayName = 'MenuSection';

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 12,
    padding: 12,
    backgroundColor: theme.colors.backgroundSecondary,
    ...theme.shadows.small,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 12,
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontFamily: theme.fontFamilies.bold,
  },
});
