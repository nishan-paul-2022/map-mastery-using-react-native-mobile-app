import { Stack } from 'expo-router';
import React from 'react';

import HomeHeader from '@/components/common/Headers/HomeHeader';
import { ROUTES } from '@/layout/routes';

interface AppStackProps {
  toggleProfileDrawer: () => void;
}

const processRoutePath = (path: string) => {
  const route = path.replace(/^\//, '');
  return route;
};

export default function AppStack({ toggleProfileDrawer }: AppStackProps) {
  const screenConfigWithHeader = [
    {
      id: 1,
      name: '(tabs)/index',
      header: () => {
        return <HomeHeader toggleProfileDrawer={toggleProfileDrawer} />;
      },
    },

  ];

  const screenConfigWithoutHeader = [
    {
      id: 17,
      name: '+not-found',
    },

    {
      id: 18,
      name: processRoutePath(ROUTES.SPLASH),
    },
  ];

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {screenConfigWithoutHeader.map((screen) => {
        return <Stack.Screen key={screen.id} name={screen.name} />;
      })}

      {screenConfigWithHeader.map((screen) => {
        return (
          <Stack.Screen
            key={screen.id}
            name={screen.name}
            options={{
              headerShown: true,
              header: screen.header,
            }}
          />
        );
      })}
    </Stack>
  );
}
