import FontLoader from '@/layout/FontLoader';
import MainLayout from '@/layout/MainLayout';
import NavigationBarSetup from '@/layout/SystemUISetup';
import SplashScreenWrapper from '@/layout/SplashScreenWrapper';
import { LanguageProvider } from '@/localization/LanguageContext';

export default function RootLayout() {
  return (
    <SplashScreenWrapper>
      <LanguageProvider>
        <FontLoader>
          <NavigationBarSetup />
          <MainLayout />
        </FontLoader>
      </LanguageProvider>
    </SplashScreenWrapper>
  );
}
