import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../../components/ScreenHeader";
import CustomOtpInput from "../../components/CustomOtpInput";
import CustomButton from "../../components/CustomButton";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type VerifyEmailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "VerifyEmail"
>;

type VerifyEmailScreenRouteProp = RouteProp<RootStackParamList, "VerifyEmail">;

export type RootStackParamList = {
  PersonalInfo: undefined;
  VerifyEmail: {
    email: string;
  };
};

const VerifyEmail = () => {
  const navigation = useNavigation<VerifyEmailNavigationProp>();
  const route = useRoute<VerifyEmailScreenRouteProp>();
  const { email } = route.params;
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleResend = () => {
    if (canResend) {
      // Add your resend logic here
      setTimeLeft(60);
      setCanResend(false);
    }
  };

  const handleVerify = () => {
    if (otp.length < 6) {
      setError("Please enter complete verification code");
      return;
    }

    navigation.navigate("PersonalInfo");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Verify Email" showBackButton />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Please verify your email address</Text>
        <Text style={styles.subtitle}>
          We have sent a 6-digit verification code to {"\n"} {email} {"\n"}
          Enter this code below
        </Text>

        <View style={styles.otpContainer}>
          <CustomOtpInput
            length={6}
            value={otp}
            onChangeOtp={setOtp}
            error={error}
          />
        </View>

        <View style={styles.resendContainer}>
          {timeLeft > 0 ? (
            <Text style={styles.timerText}>
              Didn’t get the code?{" "}
              <Text style={styles.resendLink}>
                Resend code ({formatTime(timeLeft)})
              </Text>
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendButton}>Resend Code</Text>
            </TouchableOpacity>
          )}
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
    marginVertical: 20,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 32,
  },
  resendContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  timerText: {
    fontSize: FONTSIZE.md,
    fontFamily: FONTFAMILY.regular,
    color: colors.gray3,
  },
  resendButton: {
    fontSize: FONTSIZE.md,
    fontFamily: FONTFAMILY.medium,
    color: colors.blue,
  },
  resendLink: {
    fontSize: FONTSIZE.md,
    fontFamily: FONTFAMILY.medium,
    color: colors.blue,
  },
  otpContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 32,
  },
});

export default VerifyEmail;
