import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import colors from "../utils/colors";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>; // Correct typing for style
  textStyle?: StyleProp<TextStyle>;
  borderRadius?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: number;
  loadingColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: number | string;
  height?: number;
}

const CustomButton = ({
  onPress,
  title,
  loading = false,
  disabled = false,
  style,
  textStyle,
  borderRadius = 8,
  backgroundColor = colors.primaryColor,
  textColor = colors.white,
  borderColor,
  borderWidth,
  loadingColor = colors.white,
  leftIcon,
  rightIcon,
  width = "auto",
  height = 48,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          borderRadius,
          backgroundColor: disabled ? colors.gray : backgroundColor,
          borderColor: borderColor,
          borderWidth: borderWidth,
          width: width, // width is correctly passed here
          height: height,
        } as ViewStyle, // Cast it to ViewStyle to satisfy the type checker
        style,
      ]}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={loadingColor} size="small" />
      ) : (
        <>
          {leftIcon && leftIcon}
          <Text style={[styles.text, { color: textColor }, textStyle]}>
            {title}
          </Text>
          {rightIcon && rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    fontFamily: "JostMedium",
    fontSize: 16,
  },
});

export default CustomButton;
