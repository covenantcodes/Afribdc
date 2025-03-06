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

  const handleSignup = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader showBackButton />
      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>

        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          leftIcon={
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={colors.gray2}
            />
          }
          errorMessage={errors.email}
        />

        <CustomInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          leftIcon={
            <MaterialCommunityIcons
              name="account-outline"
              size={20}
              color={colors.gray2}
            />
          }
          errorMessage={errors.username}
        />

        <CustomInput
          value={password}
          onChangeText={setPassword}
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
        />

        <CustomInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
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
