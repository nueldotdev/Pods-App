## 2025-11-29

feat: Implement custom tab navigation and redesign home screen

This commit significantly overhauls the application's core navigation and user interface, transitioning from the default Expo Router tab setup to a custom implementation.

Key changes include:

*   **Custom Tab Navigation:** Replaced `expo-router`'s built-in `Tabs` component with a custom tab bar using `react-native-pager-view` for swipeable screens and `react-native-vector-icons` (Octicons) for tab icons.
*   **New Tab Screens:** Introduced dedicated `Pods` and `Favorites` screens, accessible via the new custom tab bar.
*   **Home Screen Redesign:** Completely revamped the `Home` screen (`app/(tabs)/index.tsx`) to feature:
    *   A horizontal scrolling list for "Pods".
    *   A vertical "Recent Saves" list with double-tap functionality to favorite/unfavorite items.
*   **Dark Theme Integration:** Applied a consistent dark background color (`#1A1A1A`) to the app's splash screen and root `ThemeProvider` for a unified dark mode experience.
*   **Boilerplate Removal:** Deleted unused example files and scripts, including `app/(tabs)/explore.tsx`, `app/modal.tsx`, and `scripts/reset-project.js`, to streamline the project.
*   **Dependency Updates:** Added `react-native-pager-view`, `react-native-vector-icons`, `@react-native-async-storage/async-storage`, and `babel-plugin-inline-import` to support new features.
*   **Styling Infrastructure:** Introduced `styles/primary.tsx` for centralized styling and updated `tsconfig.json` to include new type definitions.
*   **Status Bar Enhancement:** Configured `StatusBar` for better integration with the new theme.
*   Minor refactoring in `components/ui/icon-symbol.tsx` for icon mapping.


<i>Generated using [Amnesiac](https://github.com/nueldotdev/amnesiac/)</i>