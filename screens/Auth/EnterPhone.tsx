import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import PhoneInput from "../../components/PhoneInput";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";
import ScreenHeader from "../../components/ScreenHeader";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AuthNavigator";

// Import the Country type from PhoneInput
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

type EnterPhoneNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EnterPhone"
>;

const EnterPhone = () => {
  const navigation = useNavigation<EnterPhoneNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [error, setError] = useState("");

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleContinue = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }
    setError("");
    navigation.navigate("VerifyPhone");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader showBackButton />
      <View style={styles.content}>
        <Text style={styles.title}>Enter Phone Number</Text>
        <Text style={styles.subtitle}>We'll send you a verification code</Text>
        <PhoneInput
          value={phoneNumber}
          onChangePhone={(value) => {
            setPhoneNumber(value);
            setError(""); // Clear error when user starts typing
          }}
          onChangeCountry={handleCountryChange}
          error={error}
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Continue"
            onPress={handleContinue}
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    marginTop: -120,
  },
  title: {
    fontSize: FONTSIZE.xxl,
    fontFamily: FONTFAMILY.medium,
    color: colors.deepBlue,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FONTSIZE.lg,
    fontFamily: FONTFAMILY.medium,
    color: colors.gray2,
    marginTop: 5,
    marginBottom: 32,
    textAlign: "center",
  },

  buttonContainer: {
    width: "100%",
    marginTop: 40,
  },
});

export default EnterPhone;
