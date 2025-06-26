const colors = {
  // Primary colors
  primary: '#00CEC8',
  secondary: '#3A3A3C',

  // Background colors
  backgroundPrimary: '#262626',
  backgroundSecondary: '#1C1C1E',
  card: '#2C2C2E',

  // Text colors
  text: '#FFFFFF',
  textSecondary: '#EBEBF5',

  // UI elements
  border: '#38383A',
  outline: '#FFFFFF',
  shadow: '#000000',
  ripple: 'rgba(255, 255, 255, 0.1)',
  overlay: 'rgba(0, 0, 0, 0.6)',
  overlayLight: 'rgba(0, 0, 0, 0.4)',
  overlayDark: 'rgba(0, 0, 0, 0.8)',

  // Status colors
  success: '#30D158',
  error: '#FF453A',
  warning: '#FFD60A',
  info: '#0A84FF',
  link: '#0A84FF',

  // Misc
  white: '#FFFFFF',
  black: '#000000',
  placeholder: '#48484A',
  disabled: '#3A3A3C',
};

const fontFamilies = {
  regular: 'Poppins_400Regular',
  bold: 'Poppins_700Bold',
  italic: 'Poppins_400Italic',
};

const fontsLoaded = {
  [fontFamilies.regular]: require('@expo-google-fonts/poppins/Poppins_400Regular.ttf'),
  [fontFamilies.bold]: require('@expo-google-fonts/poppins/Poppins_700Bold.ttf'),
  [fontFamilies.italic]: require('@expo-google-fonts/poppins/Poppins_400Regular_Italic.ttf'),
};

// New: Adding spacing system
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// New: Adding typography system
const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
};

// New: Adding shadow presets

// New: Adding border radius presets
const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
};

const images = {
  icon: './assets/logos/icon.png',
  adaptiveIcon: './assets/logos/adaptive-icon.png',
};

const theme = {
  colors,
  fontFamilies,
  fontsLoaded,
  spacing,
  typography,
  images,
  shadows: {
    small: {
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.4,
      shadowRadius: 6,
      elevation: 4,
    },
    large: {
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 6,
    },
  },
  borderRadius,
};

export default theme;
