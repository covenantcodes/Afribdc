import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";
import CustomButton from "../components/CustomButton";
import Globe from "../components/Globe";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Globe width={264} height={268} />
        <Text style={styles.subtitle}>
          Exchange currencies with ease and {"\n"} confidence, anytime,
          anywhere.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="View Best Rate Now"
          onPress={() => {}}
          width="100%"
          backgroundColor={colors.white}
          textColor={colors.deepBlue}
          borderWidth={1}
          borderRadius={20}
          height={58}
          borderColor={colors.deepBlue}
          textStyle={{ fontSize: FONTSIZE.lg }}
        />

        <CustomButton
          title="Get Started"
          onPress={() => {}}
          width="100%"
          borderRadius={20}
          height={58}
          textStyle={{ fontSize: FONTSIZE.lg }}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Text style={styles.loginLink} onPress={() => {}}>
            Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
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
    marginTop: 30,
    marginBottom: 37,
    color: colors.deepBlue,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    gap: 20,
    marginTop: 20,
    width: "100%",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
  loginText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.lg,
    color: colors.deepBlue,
  },
  loginLink: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.lg,
    color: colors.blue,
  },
});

export default SplashScreen;
