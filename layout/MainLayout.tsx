import { StatusBar, StyleSheet, View } from 'react-native';

import ProfileDrawer from '@/components/common/Drawer';
import theme from '@/constants/theme';
import AppStack from '@/layout/AppStack';
import useDrawer from '@/layout/useDrawer';

export default function MainLayout() {
  const profileDrawer = useDrawer();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.secondary}
        translucent={true}
      />
      <AppStack toggleProfileDrawer={profileDrawer.toggle} />
      <ProfileDrawer
        isDrawerOpen={profileDrawer.isOpen}
        drawerAnim={profileDrawer.animation}
        toggleDrawer={profileDrawer.toggle}
        onLogout={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
