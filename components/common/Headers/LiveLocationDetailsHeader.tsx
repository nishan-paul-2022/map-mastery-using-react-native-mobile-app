import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomText from '@/components/common/CustomText';
import theme from '@/constants/theme';

export default function LiveLocationDetailsHeader() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="chevron-back" size={24} color={theme.colors.white} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <CustomText style={styles.trainName}>Subarna Express 701</CustomText>
          <View style={styles.statusContainer}>
            <View style={styles.statusBadge}>
              <CustomText style={styles.onTime}>On Time</CustomText>
            </View>
            <CustomText style={styles.dot}>•</CustomText>
            <View style={styles.platformBadge}>
              <CustomText style={styles.platform}>Platform 3</CustomText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    ...theme.shadows.medium,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    marginRight: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  trainName: {
    fontSize: 20,
    fontFamily: theme.fontFamilies.bold,
    color: theme.colors.text,
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: 'rgba(52, 199, 89, 0.2)', // Success color with opacity
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  onTime: {
    fontSize: 14,
    fontFamily: theme.fontFamilies.regular,
    color: theme.colors.success,
  },
  dot: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginHorizontal: 8,
  },
  platformBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  platform: {
    fontSize: 14,
    fontFamily: theme.fontFamilies.regular,
    color: theme.colors.text,
  },
});
