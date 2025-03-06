import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../../components/ScreenHeader";
import CustomOtpInput from "../../components/CustomOtpInput";
import CustomButton from "../../components/CustomButton";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";

const VerifyPhone = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (otp.length < 6) {
      setError("Please enter complete verification code");
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Verify Phone" showBackButton />
      <View style={styles.content}>
        <Text style={styles.title}>Please verify your phone {"\n"} number</Text>
        <Text style={styles.subtitle}>
          We have sent an 6-digit verification code to {"\n"} +1 (506) 210 -0661{" "}
          {"\n"} Enter this code below
        </Text>

        <View></View>
        <CustomOtpInput
          length={6}
          value={otp}
          onChangeOtp={setOtp}
          error={error}
        />

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code? </Text>
          <Text style={styles.resendLink}>Resend </Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Submit"
            onPress={handleVerify}
            width="100%"
            borderRadius={25}
            height={58}
            textStyle={{ fontSize: FONTSIZE.lg }}
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
    marginTop: 50,
  },
  title: {
    fontSize: FONTSIZE.xxl,
    fontFamily: FONTFAMILY.medium,
    color: colors.deepBlue,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FONTSIZE.md,
    fontFamily: FONTFAMILY.medium,
    color: colors.gray2,
    marginVertical: 38,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 32,
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  resendText: {
    fontSize: FONTSIZE.lg,
    fontFamily: FONTFAMILY.medium,
    color: colors.deepBlue,
  },
  resendLink: {
    fontSize: FONTSIZE.lg,
    fontFamily: FONTFAMILY.medium,
    color: colors.blue,
  },
});

export default VerifyPhone;
