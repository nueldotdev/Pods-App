
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { usePathname, useRouter, type Href } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// @ts-expect-error
import Octicons from 'react-native-vector-icons/Octicons';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

import HomeScreen from './index';
import PodsScreen from './pods';
import FavoritesScreen from './favorites';
import Search from './search';

type TabConfig = {
  key: string;
  title: string;
  icon: string;
  href: Href;
  Component: React.ComponentType;
};

const TAB_CONFIG: TabConfig[] = [
  { key: 'home', title: 'Home', icon: 'home', href: '/', Component: HomeScreen },
  { key: 'pods', title: 'Pods', icon: 'file-directory', href: '/pods', Component: PodsScreen },
  { key: 'search', title: 'Search', icon: 'search', href: '/search', Component: Search },
  { key: 'favorites', title: 'Favorites', icon: 'star', href: '/favorites', Component: FavoritesScreen },
];

const getIndexFromPath = (path: string | null | undefined) => {
  if (!path) return 0;
  const normalized = (path !== '/' ? path.replace(/\/+$/, '') : '/') as Href;
  const idx = TAB_CONFIG.findIndex((tab) => tab.href === normalized);
  return idx === -1 ? 0 : idx;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const pagerRef = useRef<PagerView>(null);

  const initialIndex = useMemo(() => getIndexFromPath(pathname), []);
  const [page, setPage] = useState(initialIndex);

  // Sync with external navigation (deep links, browser back/forward, etc.)
  useEffect(() => {
    const nextIndex = getIndexFromPath(pathname);
    if (nextIndex !== page && nextIndex >= 0) {
      setPage(nextIndex);
      pagerRef.current?.setPageWithoutAnimation(nextIndex);
    }
  }, [pathname]); // Removed 'page' from deps to avoid loops

  const handleSelect = useCallback(
    async (index: number) => {
      const tab = TAB_CONFIG[index];
      if (!tab || index === page) {
        return;
      }
      if (process.env.EXPO_OS === 'ios') {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      setPage(index);
      pagerRef.current?.setPage(index);
      router.replace(tab.href);
    },
    [page, router],
  );

  const handlePageSelected = useCallback(
    (event: { nativeEvent: { position: number } }) => {
      const newIndex = event.nativeEvent.position;
      if (newIndex === page) {
        return;
      }
      setPage(newIndex);
      // Don't call router.replace here - let PagerView handle the transition smoothly
      // Router will sync when tabs are clicked via buttons or on external navigation
    },
    [page],
  );

  const palette = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <PagerView
        ref={pagerRef}
        style={[styles.pager, { backgroundColor: palette.background }]}
        initialPage={initialIndex}
        offscreenPageLimit={TAB_CONFIG.length}
        onPageSelected={handlePageSelected}>
        {TAB_CONFIG.map(({ key, Component }) => (
          <View key={key} style={[styles.page, { backgroundColor: palette.background }]}>
            <Component />
          </View>
        ))}
      </PagerView>

      <View
        style={[
          styles.tabBar,
          {
            paddingBottom: Math.max(insets.bottom, 12),
            backgroundColor: palette.background,
            borderTopColor: palette.tabIconDefault,
          },
        ]}>
        {TAB_CONFIG.map((tab, index) => {
          const active = index === page;
          return (
            <Pressable
              key={tab.key}
              onPress={() => handleSelect(index)}
              style={({ pressed }) => [
                styles.tabButton,
                pressed && styles.tabButtonPressed,
              ]}>
              <Octicons
                name={tab.icon}
                size={24}
                color={active ? palette.tint : palette.tabIconDefault}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pager: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
  },
  tabButtonPressed: {
    opacity: 0.6,
  },
});
