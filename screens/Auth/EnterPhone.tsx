import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import PhoneInput from "../../components/PhoneInput";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";
import ScreenHeader from "../../components/ScreenHeader";

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

const EnterPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [error, setError] = useState("");

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader showBackButton />
      <View style={styles.content}>
        <Text style={styles.title}>Enter Phone Number</Text>
        <Text style={styles.subtitle}>
          Please enter your phone number to continue
        </Text>

        <View style={styles.phoneInputContainer}>
          <PhoneInput
            value={phoneNumber}
            onChangePhone={setPhoneNumber}
            onChangeCountry={handleCountryChange}
            error={error}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: FONTSIZE.xl,
    fontFamily: FONTFAMILY.bold,
    color: colors.black,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: FONTSIZE.md,
    fontFamily: FONTFAMILY.regular,
    color: colors.gray3,
    marginBottom: 24,
  },

  phoneInputContainer: {
    width: "100%",
    paddingHorizontal: 25,
  },
});

export default EnterPhone;
