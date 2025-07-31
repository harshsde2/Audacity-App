/**
 * Color palette for the application
 * Based on green palette with additional utility colors
 */

// Green palette
export const themePalette = {
  bgLinearGradiantV1: "#4847298A",
  bgLinearGradiantV2: "#31301CA1",
  bgLinearGradiantV3: "#101010FF",

  cardLinearGradiantV1: "#FEE276",
  cardLinearGradiantV2: "#FFAC49",
  cardLinearGradiantV3: "#EE9020",

  blue500: "#3499E0",
  orange500: "#FF7D20",
  red500: "#FF3A20",
};

// Base colors
export const baseColors = {
  // Core UI colors
  accent: "#3498db",

  // Status colors
  success: "#2ecc71",
  warning: "#f39c12",
  error: "#e74c3c",
  info: "#3498db",

  // Neutrals
  white: "#FFFFFF",
  white100: "#EDEDED",
  defaultText: "#F9F1E1",
  defaultFadeText: "#F9F1E199",
  defaultHighFadeText: "#F9F1E1CC",
  defaultCardBg: "#11110C",
  defaultCardBorder: "#2E2E2E",
  sharedElementCardBg: "#373724",

  golden600: "#353535",
  golden500: "#7D7971",
  golden400: "#F7DDB499",
  golden100: "#F7DDB4",

  black: "#000000",
  grey50: "#F9FAFB",
  grey100: "#F7F7F7",
  grey150: "#D9D9D912",
  grey200: "#E5E7EB",
  grey250: "#D9D9D912",
  grey300: "#D1D5DB",
  grey400: "#9CA3AF",
  grey500: "#6B7280",
  grey600: "#4B5563",
  grey700: "#374151",
  grey800: "#1F2937",
  grey900: "#111827",

  rejectStatusDark: "#A21C1C",
  pendingStatusDark: "#E5AB00",
  rejectStatusLight: "#FFE0E0",
  pendingStatusLight: "#FFF4D3",
  verifiedStatusLight: "#E2F1E3",
  verifiedStatusDark: "#2C6A3F",
};

// Type definition for colors
export type ColorPalette = typeof themePalette & typeof baseColors;

// Merged colors object
export const colors = {
  ...themePalette,
  ...baseColors,
};

export default colors;
