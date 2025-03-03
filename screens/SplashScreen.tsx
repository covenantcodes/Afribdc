import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";
import CustomButton from "../components/CustomButton";
import Globe from "../components/Globe";
import SafeAreaView from "react-native-safe-area-context";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Globe width={264} height={268} />
        <Text style={styles.subtitle}>
          Exchange currencies with ease and {"\n"} confidence, anytime,
          anywhere.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Create an Account"
          onPress={() => {}}
          width="100%"
        />
        <CustomButton
          title="Learn More"
          onPress={() => {}}
          width="100%"
          backgroundColor={colors.white}
          textColor={colors.primaryColor}
          borderWidth={1}
          borderColor={colors.primaryColor}
        />
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Text style={styles.loginLink} onPress={() => {}}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.xxl,
    textAlign: "center",
    marginTop: 24,
    marginBottom: 32,
    color: colors.deepBlue,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    gap: 20,
    marginTop: 15,
    width: "100%",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  loginText: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.md,
    color: colors.gray,
  },
  loginLink: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.md,
    color: colors.primaryColor,
  },
});

export default SplashScreen;
