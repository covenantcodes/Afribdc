import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AuthNavigator";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";
import CustomButton from "../components/CustomButton";
import CustomKeyboard from "../components/CustomKeyboard";
import Globe from "../components/svgs/Globe";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Splash"
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { width, height } = Dimensions.get("window");

  const handleKeyPress = (key: string) => {
    if (key === "delete") {
      setInputValue((prev) => prev.slice(0, -1));
    } else {
      setInputValue((prev) => prev + key);
    }
  };

  // Create animated values
  const globeScale = new Animated.Value(0.3);
  const subtitleOpacity = new Animated.Value(0);
  const buttonsOpacity = new Animated.Value(0);

  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      // Globe scale animation
      Animated.spring(globeScale, {
        toValue: 1,
        useNativeDriver: true,
        tension: 10,
        friction: 8,
        velocity: 0.4,
      }),
      // Subtitle fade in
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Buttons fade in
      Animated.timing(buttonsOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={[{ transform: [{ scale: globeScale }] }]}>
          <Globe width={width * 0.7} height={height * 0.3} />
        </Animated.View>

        <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
          <Text>
            Exchange currencies with ease and{"\n"} confidence, anytime,
            anywhere.
          </Text>
        </Animated.Text>
      </View>

      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: buttonsOpacity,
          },
        ]}
      >
        <CustomButton
          title="View Best Rate Now"
          onPress={() => navigation.navigate("ExchangeRate")}
          width="100%"
          backgroundColor={colors.white}
          textColor={colors.deepBlue}
          borderWidth={1}
          borderRadius={20}
          height={58}
          borderColor={colors.deepBlue}
          textStyle={{ fontSize: FONTSIZE.md }}
        />

        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate("EnterPhone")}
          width="100%"
          borderRadius={20}
          height={58}
          textStyle={{ fontSize: FONTSIZE.md }}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
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
    fontSize: FONTSIZE.xl,
    textAlign: "center",
    marginTop: 35,
    marginBottom: 37,
    color: colors.deepBlue,
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
    fontSize: FONTSIZE.md,
    color: colors.deepBlue,
  },
  loginLink: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.md,
    color: colors.blue,
  },
});

export default SplashScreen;
