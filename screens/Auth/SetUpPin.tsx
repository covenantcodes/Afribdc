import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AuthNavigator";
import ScreenHeader from "../../components/ScreenHeader";
import CustomKeyboard from "../../components/CustomKeyboard";
import CustomButton from "../../components/CustomButton";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";

type SetUpPinNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SetUpPin"
>;

const SetUpPin = () => {
  const navigation = useNavigation<SetUpPinNavigationProp>();
  const [pin, setPin] = useState<string>("");
  const [error, setError] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (key: string) => {
    if (key === "delete") {
      setPin((prev) => prev.slice(0, -1));
      setError("");
      return;
    }

    if (pin.length >= 4) return;

    setPin((prev) => prev + key);
    setError("");
  };

  const handleVerify = () => {
    if (pin.length < 4) {
      setError("Please enter a complete 4-digit PIN");
      return;
    }
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Set Up Pin" showBackButton />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          Set up your 4 digit pin to make your account more {"\n"} secure.
          You'll be asked to enter this pin {"\n"} when making transactions.
        </Text>

        <Pressable
          onPress={() => setIsKeyboardVisible(true)}
          style={styles.pinContainer}
        >
          {[...Array(4)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.pinCircle,
                pin.length > index && styles.pinCircleFilled,
              ]}
            >
              {pin.length > index && <View style={styles.innerCircle} />}
            </View>
          ))}
        </Pressable>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Proceed"
            onPress={handleVerify}
            width="100%"
            borderRadius={25}
            height={58}
            textStyle={{ fontSize: FONTSIZE.lg }}
          />
        </View>

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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  subtitle: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.md,
    color: colors.gray2,
    textAlign: "center",
    marginVertical: 40,
    lineHeight: 24,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 40,
  },
  pinCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  pinCircleFilled: {
    borderColor: colors.primaryColor,
  },
  innerCircle: {
    width: 27,
    height: 27,
    borderRadius: 15,
    backgroundColor: colors.primaryColor,
  },
  errorText: {
    color: colors.red,
    fontSize: FONTSIZE.sm,
    fontFamily: FONTFAMILY.regular,
    marginTop: 8,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 32,
  },
  keyboardOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  keyboardContainer: {
    backgroundColor: colors.background,
  },
});

export default SetUpPin;
