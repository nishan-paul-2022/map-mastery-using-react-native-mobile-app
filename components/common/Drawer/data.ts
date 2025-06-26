import type Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import type { AppRoute } from '@/layout/routes';
import { ROUTES } from '@/layout/routes';

interface MenuItem {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: AppRoute | 'LOGOUT';
  badge?: number;
  isNew?: boolean;
  isLanguage?: boolean;
  isSelected?: boolean;
}

export default function MENU_SECTIONS(): Record<string, MenuItem[]> {
  const { t } = useTranslation();
  return {
    support: [
      {
        label: t('profileDrawer.home'),
        icon: 'home-outline',
        route: ROUTES.HOME,
      },
      {
        label: t('profileDrawer.notfound'),
        icon: 'alert-circle-outline',
        route: ROUTES.NOT_FOUND,
      },
      {
        label: t('profileDrawer.splash'),
        icon: 'pulse-outline',
        route: ROUTES.SPLASH,
      },
    ],
  };
}
