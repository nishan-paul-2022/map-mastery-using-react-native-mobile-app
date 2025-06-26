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
        label: t('profileDrawer.liveLocation'),
        icon: 'location-outline',
        route: ROUTES.LIVE_LOCATION,
      },
      {
        label: t('profileDrawer.liveLocationSpecific'),
        icon: 'heart-outline',
        route: ROUTES.LIVE_LOCATION_SPECIFIC,
      },
      {
        label: t('profileDrawer.liveLocationDetails'),
        icon: 'cart-outline',
        route: ROUTES.LIVE_LOCATION_DETAILS,
      },
      {
        label: t('profileDrawer.contributeLocation'),
        icon: 'chatbubbles-outline',
        route: ROUTES.CONTRIBUTE_LOCATION,
        isNew: true,
      },
      {
        label: t('profileDrawer.contributeLocationDetails'),
        icon: 'chatbubbles-outline',
        route: ROUTES.CONTRIBUTE_LOCATION_DETAILS,
      },
      {
        label: t('profileDrawer.points'),
        icon: 'cash-outline',
        route: ROUTES.POINTS,
      },
      {
        label: t('profileDrawer.rewardsWithdrawal'),
        icon: 'cash-outline',
        route: ROUTES.REWARDS_WITHDRAWAL,
      },
      {
        label: t('profileDrawer.profile'),
        icon: 'person-outline',
        route: ROUTES.PROFILE,
      },
      {
        label: t('profileDrawer.notify'),
        icon: 'notifications-outline',
        route: ROUTES.NOTIFICATION,
      },
      {
        label: t('profileDrawer.settings'),
        icon: 'settings-outline',
        route: ROUTES.SETTINGS,
      },
      {
        label: t('profileDrawer.submitReport'),
        icon: 'document-outline',
        route: ROUTES.SUBMIT_REPORT,
      },
      {
        label: t('profileDrawer.support'),
        icon: 'help-circle-outline',
        route: ROUTES.SUPPORT,
      },
      {
        label: t('profileDrawer.sso'),
        icon: 'key-outline',
        route: ROUTES.SSO,
      },
      {
        label: t('profileDrawer.privacy'),
        icon: 'shield-outline',
        route: ROUTES.PRIVACY_POLICY,
      },
      {
        label: t('profileDrawer.terms'),
        icon: 'document-outline',
        route: ROUTES.TERMS_OF_CONDITION,
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
