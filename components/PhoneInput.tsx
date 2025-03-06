import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  FlatList,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";
import CustomKeyboard from "./CustomKeyboard";
import countryData from "../data/countries_flags_codes.json";
import ChevronDown from "./svgs/ChevronDown";

interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
}

interface PhoneInputProps {
  onChangePhone: (phone: string) => void;
  onChangeCountry: (country: Country) => void;
  value: string;
  error?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  onChangePhone,
  onChangeCountry,
  value,
  error,
}) => {
  const defaultCountry =
    countryData.find(
      (country) => country.idd.root === "+1" && country.idd.suffixes[0] === ""
    ) || countryData[0];
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] =
    useState<Country>(defaultCountry);
  const [showCursor, setShowCursor] = useState(true);

  const formatPhoneNumber = (number: string) => {
    if (number.length <= 3) return number;
    if (number.length <= 6) return `(${number.slice(0, 3)}) ${number.slice(3)}`;
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
      6,
      10
    )}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (key: string) => {
    if (key === "delete") {
      onChangePhone(value.slice(0, -1));
    } else if (value.length < 10) {
      onChangePhone(value + key);
    }
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    onChangeCountry(country);
    setIsCountryModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.countrySelect}
        onPress={() => setIsCountryModalVisible(true)}
      >
        <Image
          source={{ uri: selectedCountry.flags.png }}
          style={styles.flag}
        />
        <Text style={styles.countryCode}>
          {selectedCountry.idd.root}
          {selectedCountry.idd.suffixes[0]}
        </Text>
        <ChevronDown width={16} height={16} color={colors.gray2} />
      </TouchableOpacity>
      <Pressable
        style={[styles.phoneInput, error ? styles.inputError : null]}
        onPress={() => setIsKeyboardVisible(true)}
      >
        <Text style={styles.phoneText}>
          {value
            ? `${formatPhoneNumber(value)}${
                showCursor && isKeyboardVisible ? "|" : ""
              }`
            : `(506) 210-0661${showCursor && isKeyboardVisible ? "|" : ""}`}
        </Text>
      </Pressable>

      <Modal
        visible={isCountryModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsCountryModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={countryData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => handleCountrySelect(item)}
                >
                  <Image
                    source={{ uri: item.flags.png }}
                    style={styles.countryFlag}
                  />
                  <Text style={styles.countryCodeText}>
                    {item.idd.root}
                    {item.idd.suffixes[0]}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

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
            <CustomKeyboard onKeyPress={handleKeyPress} />
          </View>
        </TouchableOpacity>
      </Modal>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  countrySelect: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 18,
    gap: 6,
    shadowColor: "#1a1a1a",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },
  flag: {
    width: 24,
    height: 16,
    borderRadius: 2,
  },
  countryCode: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.md,
    color: colors.gray2,
  },
  phoneInput: {
    flex: 3,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    shadowColor: "#1a1a1a",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },
  inputError: {
    borderColor: colors.red,
    borderWidth: 1,
  },
  phoneText: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.md,
    color: colors.gray2,
    letterSpacing: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "70%",
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray + "20",
  },
  countryFlag: {
    width: 32,
    height: 20,
    borderRadius: 2,
  },
  countryCodeText: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.md,
    color: colors.black,
  },
  keyboardOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  keyboardContainer: {
    backgroundColor: colors.background,
    // padding: 16,
  },
  errorText: {
    position: "absolute",
    bottom: -20,
    left: 0,
    color: colors.red,
    fontSize: FONTSIZE.xs,
    fontFamily: FONTFAMILY.regular,
  },
});

export default PhoneInput;
