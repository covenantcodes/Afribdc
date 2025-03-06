import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

interface CustomInputProps extends TextInputProps {
  label?: string;
  width?: number | string;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  showShadow?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  width = "100%",
  height = 48,
  borderRadius = 8,
  borderColor = colors.gray,
  borderWidth = 0,
  showShadow = false,
  errorMessage,
  leftIcon,
  rightIcon,
  required = false,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  placeholder,
  ...props
}) => {
  const widthStyle =
    typeof width === "number" ? width : width === "100%" ? "100%" : "auto";

  return (
    <View style={[styles.container, { width: widthStyle }, containerStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>
            {label}
            {required && <Text style={styles.required}> *</Text>}
          </Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={[
            styles.input,
            {
              height,
              borderRadius,
              borderColor,
              borderWidth,
            },
            leftIcon ? { paddingLeft: 44 } : {},
            rightIcon ? { paddingRight: 44 } : {},
            showShadow && styles.shadow,
            inputStyle,
            errorMessage && styles.inputError,
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          {...props}
        />

        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>

      {errorMessage && (
        <Text style={[styles.errorText, errorStyle]}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  labelContainer: {
    marginBottom: 8,
  },
  label: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.sm,
    color: colors.black,
  },
  required: {
    color: colors.black,
    fontFamily: FONTFAMILY.bold,
  },
  inputContainer: {
    position: "relative",
  },
  shadow: {
    shadowColor: "#1a1a1a",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 8,
  },
  input: {
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: FONTFAMILY.regular,
    color: colors.black,
    backgroundColor: colors.white,
  },
  inputError: {
    borderColor: colors.red,
  },
  leftIcon: {
    position: "absolute",
    left: 12,
    height: "100%",
    justifyContent: "center",
    zIndex: 1,
  },
  rightIcon: {
    position: "absolute",
    right: 12,
    height: "100%",
    justifyContent: "center",
    zIndex: 1,
  },
  errorText: {
    color: colors.red,
    fontSize: FONTSIZE.xs,
    fontFamily: FONTFAMILY.regular,
    marginTop: 4,
  },
});

export default CustomInput;
