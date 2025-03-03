import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import colors from "./utils/colors";
import CustomInput from "./components/CustomInput";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [fontsLoaded] = useFonts({
    JostThin: require("./assets/fonts/Jost-Thin.ttf"),
    JostThinItalic: require("./assets/fonts/Jost-ThinItalic.ttf"),
    JostLight: require("./assets/fonts/Jost-Light.ttf"),
    JostExtraLight: require("./assets/fonts/Jost-ExtraLight.ttf"),
    JostMedium: require("./assets/fonts/Jost-Medium.ttf"),
    JostMediumItalic: require("./assets/fonts/Jost-MediumItalic.ttf"),
    JostRegular: require("./assets/fonts/Jost-Regular.ttf"),
    JostSemiBold: require("./assets/fonts/Jost-SemiBold.ttf"),
    JostBold: require("./assets/fonts/Jost-Bold.ttf"),
    JostExtraBold: require("./assets/fonts/Jost-ExtraBold.ttf"),
    JostExtraBoldItalic: require("./assets/fonts/Jost-ExtraBoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color={colors.primaryColor} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      // Basic usage
      <CustomInput label="Username" placeholder="Enter your username" />
      // With icons and required field
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        required
        leftIcon={<MaterialIcons name="email" size={20} color={colors.gray} />}
        rightIcon={
          <MaterialIcons
            name="check-circle"
            size={20}
            color={colors.primaryColor}
          />
        }
      />
      // With error message
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        required
        showShadow
        width="50%"
        leftIcon={<MaterialIcons name="lock" size={20} color={colors.gray} />}
      />
      // With custom styles
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
