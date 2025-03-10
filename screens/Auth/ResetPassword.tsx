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

type ResetPasswordNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ResetPassword"
>;

const ResetPassword = () => {
  const navigation = useNavigation<ResetPasswordNavigationProp>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const validatePassword = (password: string) => {
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      return false;
    }
    if (password.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, password: "" }));
    return true;
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    if (!confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Confirm password is required",
      }));
      return false;
    }
    if (confirmPassword !== password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    return true;
  };

  const handleSubmit = () => {
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (isPasswordValid && isConfirmPasswordValid) {
      navigation.navigate("MainApp");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Reset Password" showBackButton />
      <View style={styles.content}>
        <Text style={styles.subtitle}>Enter your new password below</Text>

        <CustomInput
          label="New Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            validatePassword(text);
          }}
          placeholder="Enter new password"
          leftIcon={
            <MaterialCommunityIcons
              name="lock-outline"
              size={20}
              color={colors.gray2}
            />
          }
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialCommunityIcons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={colors.gray2}
              />
            </TouchableOpacity>
          }
          secureTextEntry={!showPassword}
          errorMessage={errors.password}
          showShadow
        />

        <CustomInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            validateConfirmPassword(text);
          }}
          placeholder="Confirm new password"
          leftIcon={
            <MaterialCommunityIcons
              name="lock-outline"
              size={20}
              color={colors.gray2}
            />
          }
          rightIcon={
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <MaterialCommunityIcons
                name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={colors.gray2}
              />
            </TouchableOpacity>
          }
          secureTextEntry={!showConfirmPassword}
          errorMessage={errors.confirmPassword}
          showShadow
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Reset Password"
            onPress={handleSubmit}
            width="100%"
            borderRadius={25}
            height={58}
            textStyle={{ fontSize: FONTSIZE.lg }}
          />

          <CustomButton
            title="Cancel"
            onPress={() => navigation.navigate("ExchangeRate")}
            width="100%"
            backgroundColor={colors.white}
            textColor={colors.deepBlue}
            borderWidth={1}
            borderRadius={20}
            height={58}
            borderColor={colors.deepBlue}
            textStyle={{ fontSize: FONTSIZE.md }}
            style={{ marginTop: 40 }}
          />
        </View>
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
    fontSize: FONTSIZE.xl,
    fontFamily: FONTFAMILY.medium,
    color: colors.deepBlue,
    marginBottom: 32,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 32,
  },
});

export default ResetPassword;
