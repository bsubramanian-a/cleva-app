import { Platform } from 'react-native';

const fontNames = Platform.select({
  ios: {
    textMediumBoldText1: "Open Sans",
    openSansRegular: "Open Sans",
    sourceSerifPro: "Source Serif Pro",
    openSansBold: "Open Sans",
    outfitMedium: "Outfit",
    outfitRegular: "Outfit",
    outfitSemibold: "Outfit",
    outfitBold: "Outfit",
    outfitLight: "Outfit",
    // Add more iOS font entries here
  },
  android: {
    textMediumBoldText1: "Open_Sans",
    openSansRegular: "Open_Sans",
    sourceSerifPro: "Source_Serif_Pro",
    openSansBold: "Open_Sans",
    outfitMedium: "Outfit",
    outfitRegular: "Outfit",
    outfitSemibold: "Outfit",
    outfitBold: "Outfit",
    outfitLight: "Outfit",
    // Add more Android font entries here
  },
});

/* fonts */
export const FontFamily = {
 ...fontNames
};

/* font sizes */
export const FontSize = {
  size_sm: 15,
  textMediumBoldText1_size: 16,
  size_lg: 42,
};
/* Colors */
export const Color = {
  goldenrod: "#fbb142",
  dark1: "#273242",
  whitesmoke: "#f8f8f8",
  textGrey2: "#8b8783",
  gray_200: "#8B8783",
  black: "#000",
  royalblue: "#2e54d9",
  white1: "#fff",
  cadetblue: "#00a9c0",
};
/* Paddings */
export const Padding = {
  p_2xs: 10,
  p_xs: 15,
  p_sm: 18,
  p_md: 20,
  p_lg: 32,
  p_xl: 110,
};
/* Margins */
export const Margin = {
  m_3xs: 0,
  m_2xs: 24,
  m_xs: 33,
  m_sm: 40,
  m_md: 48,
  m_lg: 66,
  m_xl: 72,
  m_2xl: 120,
};
/* border radiuses */
export const Border = {
  br_md: 100,
};
