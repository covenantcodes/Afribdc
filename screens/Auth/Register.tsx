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

type RegisterNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

const Register = () => {
  const navigation = useNavigation<RegisterNavigationProp>();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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
    // Add more password requirements as needed
    setErrors((prev) => ({ ...prev, password: "" }));
    return true;
  };

  const validateConfirmPassword = (confirmPass: string) => {
    if (!confirmPass) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Please confirm your password",
      }));
      return false;
    }
    if (confirmPass !== password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    return true;
  };

  const handleSignup = () => {
    // Validate all fields
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      // Proceed with signup
      navigation.navigate("VerifyEmail", {
        email: email,
      });
    }
  };

  // Update the onChangeText handlers to validate on change
  const handleEmailChange = (text: string) => {
    setEmail(text);
    validateEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    validatePassword(text);
    if (confirmPassword) {
      validateConfirmPassword(confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    validateConfirmPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader showBackButton />
      <View style={styles.content}>
        <Text style={styles.title}>Create your account</Text>

        <CustomInput
          label="Email"
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Email"
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

        <CustomInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="Enter unique username"
          errorMessage={errors.username}
          showShadow
        />

        <CustomInput
          label="Create Password"
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Create Password"
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
          onChangeText={handleConfirmPasswordChange}
          placeholder="Confirm Password"
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
            title="Sign Up"
            onPress={handleSignup}
            width="100%"
            borderRadius={25}
            height={58}
            textStyle={{ fontSize: FONTSIZE.lg }}
          />
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    marginTop: -50,
  },
  title: {
    fontSize: FONTSIZE.xxxl,
    fontFamily: FONTFAMILY.medium,
    color: colors.deepBlue,
    marginBottom: 32,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 32,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  loginText: {
    fontSize: FONTSIZE.md,
    fontFamily: FONTFAMILY.regular,
    color: colors.gray3,
  },
  loginLink: {
    fontSize: FONTSIZE.md,
    fontFamily: FONTFAMILY.medium,
    color: colors.blue,
  },
});

export default Register;
