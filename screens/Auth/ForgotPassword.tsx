import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootStackParamList } from "../../navigation/AuthNavigator";
import ScreenHeader from "../../components/ScreenHeader";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";

type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>;

const ForgotPassword = () => {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      return false;
    }
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: "" }));
    return true;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    validateEmail(text);
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmail(email);

    if (isEmailValid) {
      navigation.navigate("ForgotOtp", { email });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Forgot Password" showBackButton />
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Enter your email address and we'll {"\n"} send you OTP verification
          code.
        </Text>

        <CustomInput
          label="Email"
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Enter your email"
          leftIcon={
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={colors.gray2}
            />
          }
          errorMessage={errors.email}
          showShadow
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Next"
            onPress={handleSubmit}
            width="100%"
            borderRadius={25}
            height={58}
            textStyle={{ fontSize: FONTSIZE.lg }}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.returnText}>Return to Login</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 25,
    marginTop: 32,
  },
  subtitle: {
    fontSize: FONTSIZE.lg,
    fontFamily: FONTFAMILY.regular,
    color: colors.deepBlue,
    marginBottom: 32,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 32,
  },
  returnText: {
    fontSize: FONTSIZE.xl,
    fontFamily: FONTFAMILY.regular,
    color: colors.deepBlue,
    marginTop: 20,
    textAlign: "center",
  },
});

export default ForgotPassword;
