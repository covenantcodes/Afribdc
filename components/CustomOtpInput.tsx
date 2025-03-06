import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import CustomKeyboard from "./CustomKeyboard";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

interface CustomOtpInputProps {
  length?: number;
  value: string;
  onChangeOtp: (otp: string) => void;
  error?: string;
}

const CustomOtpInput: React.FC<CustomOtpInputProps> = ({
  length = 4,
  value,
  onChangeOtp,
  error,
}) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFocusedIndex(value.length < length ? value.length : length - 1);
  }, [value, length]);

  const handleKeyPress = (key: string) => {
    if (key === "delete") {
      if (value.length > 0) {
        onChangeOtp(value.slice(0, -1));
      }
    } else if (value.length < length) {
      onChangeOtp(value + key);
    }
  };

  const renderOtpBoxes = () => {
    const boxes = [];
    for (let i = 0; i < length; i++) {
      boxes.push(
        <View
          key={i}
          style={[
            styles.otpBox,
            error && styles.otpBoxError,
            i === focusedIndex && isKeyboardVisible && styles.otpBoxFocused,
          ]}
        >
          <Text style={styles.otpText}>
            {value[i] ||
              (i === focusedIndex && showCursor && isKeyboardVisible
                ? "|"
                : "")}
          </Text>
        </View>
      );
    }
    return boxes;
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.otpContainer}
        onPress={() => setIsKeyboardVisible(true)}
      >
        {renderOtpBoxes()}
      </Pressable>

      <Modal
        visible={isKeyboardVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsKeyboardVisible(false)}
      >
        <TouchableOpacity
          style={styles.keyboardOverlay}
          activeOpacity={1}
          onPress={() => setIsKeyboardVisible(false)}
        >
          <View style={styles.keyboardContainer}>
            <CustomKeyboard
              onKeyPress={handleKeyPress}
              onOutsidePress={() => setIsKeyboardVisible(false)}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  otpBox: {
    width: 46,
    height: 56,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  otpBoxFocused: {
    borderColor: colors.primaryColor,
    borderWidth: 1,
  },
  otpBoxError: {
    borderColor: colors.red,
    borderWidth: 1,
  },
  otpText: {
    fontSize: FONTSIZE.xxl,
    fontFamily: FONTFAMILY.medium,
    color: colors.deepBlue,
  },
  keyboardOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  keyboardContainer: {
    backgroundColor: colors.background,
  },
  errorText: {
    color: colors.red,
    fontSize: FONTSIZE.xs,
    fontFamily: FONTFAMILY.regular,
    marginTop: 8,
    textAlign: "center",
  },
});

export default CustomOtpInput;
