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
    TiemposHeadlineSemiboldItalic:"TiemposHeadline-SemiboldItalic",
    TiemposHeadlineSemibold:"TiemposHeadline-Semibold",
    TiemposHeadlineRegularItalic:"TiemposHeadline-RegularItalic",
    TiemposHeadlineRegular:"TiemposHeadline-Regular",
    TiemposHeadlineMediumItalic:"TiemposHeadline-MediumItalic",
    TiemposHeadlineMedium:"TiemposHeadline-Medium",
    TiemposHeadlineLightItalic:"TiemposHeadline-LightItalic",
    TiemposHeadlineLight:"TiemposHeadline-Light",
    TiemposHeadlineBoldItalic:"TiemposHeadline-BoldItalic",
    TiemposHeadlineBold:"TiemposHeadline-Bold",
    TiemposHeadlineBlackItalic:"TiemposHeadline-BlackItalic",
    TiemposHeadlineBlack:"TiemposHeadline-Black"
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
    TiemposHeadlineSemiboldItalic:"TiemposHeadline-SemiboldItalic",
    TiemposHeadlineSemibold:"TiemposHeadline-Semibold",
    TiemposHeadlineRegularItalic:"TiemposHeadline-RegularItalic",
    TiemposHeadlineRegular:"TiemposHeadline-Regular",
    TiemposHeadlineMediumItalic:"TiemposHeadline-MediumItalic",
    TiemposHeadlineMedium:"TiemposHeadline-Medium",
    TiemposHeadlineLightItalic:"TiemposHeadline-LightItalic",
    TiemposHeadlineLight:"TiemposHeadline-Light",
    TiemposHeadlineBoldItalic:"TiemposHeadline-BoldItalic",
    TiemposHeadlineBold:"TiemposHeadline-Bold",
    TiemposHeadlineBlackItalic:"TiemposHeadline-BlackItalic",
    TiemposHeadlineBlack:"TiemposHeadline-Black"
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
  size_base: 14
};
/* Colors */
export const Color = {
  orange_100: "#fbb142",
  orange_200: "#fbb142",
  goldenrod: "#fbb142",
  dark1: "#273242",
  whitesmoke: "#f8f8f8",
  textGrey2: "#8b8783",
  gray_200: "#8B8783",
  black: "#000",
  royalblue: "#2e54d9",
  white1: "#fff",
  cadetblue: "#00a9c0",
  grey_text: "#4b4b4b",
  warning_red: "#f44336",
  darkslategray_100: "#333",
};
/* Paddings */
export const Padding = {
  p_2xs: 10,
  p_xs: 15,
  p_sm: 18,
  p_md: 20,
  p_lg: 32,
  p_xl: 110,
  p_2xl: 120,
  p_3xl: 130,
  p_4xl: 140,
  p_5xl: 150,
  p_6xl: 160,
  p_7xl: 170,
  p_8xl: 180,
  p_9xl: 190,
  p_10xl: 200,
  p_7xs: 10,
  p_6xs: 12,
  p_5xs: 14,
  p_4xs: 16,
  p_3xs: 18,
  p_9xs: 20,
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
  m_6xs: 10,
  m_5xs: 12,
  m_4xs: 14,
};
/* border radiuses */
export const Border = {
  br_md: 100,
  br_81xl: 100,
  br_base: 10,
  br_sm: 12,
  br_xs: 14,
  br_2xs: 16,
  br_3xs: 18,
  br_4xs: 20,
  br_5xs: 24,
};
