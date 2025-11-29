## 2025-11-29

feat: Implement Search tab and introduce blurred UI cards

This commit introduces a new 'Search' tab and significantly revamps the visual design of content cards across the application, leveraging blur effects and new visual assets.

Changes include:

- **New Search Tab:**
    - Adds a dedicated 'Search' tab to the main application navigation (`app/(tabs)/_layout.tsx`).
    - Introduces the new `app/(tabs)/search.tsx` component, ready for search functionality.

- **Enhanced UI with Blurred Cards:**
    - Overhauls the visual presentation of content cards on both the 'Home' (`app/(tabs)/index.tsx`) and 'Pods' (`app/(tabs)/pods.tsx`) screens.
    - Integrates `expo-blur` to apply modern blur effects to UI cards, enhancing visual depth and modernity.
    - Incorporates new image assets (e.g., `assets/images/download.png`, `assets/images/icons8-folder-32.png`, `assets/images/icons8-folder-48.png`) into the card designs.
    - Refactors the 'Pods' screen to display content in an appealing two-column grid format using the new card design.
    - Updates the horizontal list on the 'Home' screen to utilize the new blurred card layout.

- **Styling and Dependencies:**
    - Introduces new styles (`cardLayout`, `blurCardOverlay`) and refines existing styles (`card`, `sectionHeader`, `cardText`) in `styles/primary.tsx` to accommodate the new visual design.
    - Adds `expo-blur` as a new project dependency (`package.json`, `bun.lock`).

- **Minor Improvements:**
    - Adjusts the `RNStatusBar` to be translucent in `app/_layout.tsx` for a more cohesive full-screen UI experience.
    - Refines `MainListData` titles in `index.tsx` and `pods.tsx` for improved display.


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