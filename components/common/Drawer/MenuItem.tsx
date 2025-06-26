import Ionicons from '@expo/vector-icons/Ionicons';
import React, { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import CustomText from '@/components/common/CustomText';
import theme from '@/constants/theme';

interface MenuItemProps {
  item: {
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    route: string;
    badge?: number;
    isNew?: boolean;
    isActive?: boolean;
    isLanguage?: boolean;
    isSelected?: boolean;
  };
  onPress: () => void;
  isLastItem: boolean;
}

function MenuItemComponent({ item, onPress, isLastItem }: MenuItemProps) {
  let color;
  if (item.isActive ?? item.isSelected) {
    color = theme.colors.primary;
  } else {
    color = theme.colors.text;
  }

  return (
    <View style={styles.menuItemWrapper}>
      <Pressable
        style={({ pressed }) => {
          return [
            styles.menuItem,
            (item.isActive ?? item.isSelected) && styles.activeItem,
            pressed && styles.pressedItem,
          ];
        }}
        onPress={onPress}
        android_ripple={{ color: theme.colors.ripple }}>
        <View style={styles.iconTextContainer}>
          <Ionicons name={item.icon} size={24} color={color} />
          <CustomText
            style={[styles.menuText, (item.isActive ?? item.isSelected) && styles.activeText]}>
            {item.label}
          </CustomText>
        </View>
        <View style={styles.menuItemRight}>
          {item.isSelected && <Ionicons name="checkmark" size={24} color={theme.colors.primary} />}
          {item.badge && (
            <View style={styles.badgeContainer}>
              <CustomText fontStyle="bold" style={styles.badgeText}>
                {item.badge}
              </CustomText>
            </View>
          )}
        </View>
      </Pressable>
      {!isLastItem && <View style={styles.separator} />}
    </View>
  );
}

export const MenuItem = memo(MenuItemComponent);

MenuItem.displayName = 'MenuItem';

const styles = StyleSheet.create({
  menuItemWrapper: {
    marginVertical: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  pressedItem: {
    backgroundColor: `${theme.colors.primary}10`,
  },
  activeItem: {
    backgroundColor: `${theme.colors.primary}20`,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border,
    marginVertical: 4,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: theme.colors.text,
    fontFamily: theme.fontFamilies.regular,
  },
  activeText: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamilies.bold,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badgeContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  badgeText: {
    color: theme.colors.white,
    fontSize: 12,
    fontFamily: theme.fontFamilies.bold,
  },
});
