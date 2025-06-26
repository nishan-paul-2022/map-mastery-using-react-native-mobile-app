import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomText from '@/components/common/CustomText';
import { LogoIcon } from '@/components/common/Icons';
import theme from '@/constants/theme';

interface HeaderProps {
  toggleProfileDrawer: () => void;
  title?: string;
}

export default function HomeHeader({ toggleProfileDrawer, title = 'TrainKoi' }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const paddingTopStyle = { paddingTop: Platform.OS === 'android' ? insets.top : 0 };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={theme.colors.backgroundSecondary}
        barStyle="light-content"
        translucent={true}
      />
      <View style={[styles.header, paddingTopStyle]}>
        {/* Left section - Profile icon */}
        <TouchableOpacity style={styles.profileButton} onPress={toggleProfileDrawer}>
          <Ionicons name="person-circle" size={30} color={theme.colors.primary} />
        </TouchableOpacity>

        {/* Center section - Title */}
        <View style={styles.titleContainer}>
          <LogoIcon width={32} height={32} />
          <CustomText style={styles.title}>{title}</CustomText>
        </View>

        {/* Right section - Menu icon */}
        <TouchableOpacity style={styles.menuButton} onPress={toggleProfileDrawer}>
          <Ionicons name="menu" size={30} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    ...theme.shadows.small,
  },
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  profileButton: {
    padding: 6,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    fontFamily: theme.fontFamilies.bold,
    fontSize: 20,
    color: theme.colors.text,
  },
  menuButton: {
    padding: 6,
  },
});
