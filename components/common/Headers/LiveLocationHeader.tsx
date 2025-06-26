import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomText from '@/components/common/CustomText';
import theme from '@/constants/theme';

interface HeaderProps {
  toggleProfileDrawer: () => void;
}

export default function LiveLocationHeader({ toggleProfileDrawer }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const paddingTopStyle = { paddingTop: insets.top };

  return (
    <View style={[styles.container, paddingTopStyle]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>TrainKoi</CustomText>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={toggleProfileDrawer}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="person-circle" size={28} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    ...theme.shadows.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fontFamilies.bold,
    color: theme.colors.text,
  },
  profileButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: `${theme.colors.primary}15`,
  },
});
