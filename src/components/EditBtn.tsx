import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type EditBtnType = {
  edit?: string;

  /** Style props */
  pressablePaddingHorizontal?: number | string;
  pressablePaddingVertical?: number | string;
  editFontSize?: number;
  editBtnHeight?: number | string;
  editBtnPaddingHorizontal?: number | string;
  editBtnPaddingVertical?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const EditBtn = ({
  pressablePaddingHorizontal,
  pressablePaddingVertical,
  edit,
  editFontSize,
  editBtnHeight,
  editBtnPaddingHorizontal,
  editBtnPaddingVertical,
}: EditBtnType) => {
  const pressableStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingHorizontal", pressablePaddingHorizontal),
      ...getStyleValue("paddingVertical", pressablePaddingVertical),
    };
  }, [pressablePaddingHorizontal, pressablePaddingVertical]);

  const editStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", editFontSize),
    };
  }, [editFontSize]);

  const editBtnStyle = useMemo(() => {
    return {
      ...getStyleValue("height", editBtnHeight),
      ...getStyleValue("paddingHorizontal", editBtnPaddingHorizontal),
      ...getStyleValue("paddingVertical", editBtnPaddingVertical),
    };
  }, [editBtnHeight, editBtnPaddingHorizontal, editBtnPaddingVertical]);

  return (
    <LinearGradient
      style={[styles.editBtn, editBtnStyle]}
      locations={[0, 1]}
      colors={["#fbb142", "#f6a326"]}
      useAngle={true}
      angle={180}
    >
      <Pressable style={[styles.pressable, pressableStyle]}>
        <Text style={[styles.edit, editStyle]}>{edit}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  edit: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.openSansRegular,
    color: Color.white1,
    textAlign: "center",
  },
  pressable: {
    borderRadius: Border.br_lg,
    height: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  editBtn: {
    height: 38,
    width: '100%',
    borderRadius: 60
  },
});

export default EditBtn;
