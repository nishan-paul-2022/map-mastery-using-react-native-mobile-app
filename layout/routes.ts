import type { Href } from 'expo-router';
import { router } from 'expo-router';
import { useCallback } from 'react';

export const ROUTES = {
  HOME: '',
  NOT_FOUND: '/screens/NotFoundScreen',
  SPLASH: '/screens/SplashScreen',
} as const;

type ExtractString<T> = T extends string ? T : never;
type ExtractObject<T> = T extends object ? RouteValues<T> : never;

type RouteValues<T> = T extends { [key: string]: infer U }
  ? ExtractString<U> | ExtractObject<U>
  : never;

export type AppRoute = RouteValues<typeof ROUTES>;

export function useAppNavigation() {
  const goHome = useCallback(() => {
    router.push('' as Href);
  }, []);

  const goBack = useCallback(() => {
    router.back();
  }, []);

  const navigateTo = useCallback((route: AppRoute) => {
    router.push(route as Href);
  }, []);

  return {
    goHome,
    goBack,
    navigateTo,
  };
}
