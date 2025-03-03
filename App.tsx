import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import colors from "./utils/colors";
import CustomButton from "./components/CustomButton";

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
      <CustomButton
        title="Press Me"
        onPress={() => console.log("Button pressed")}
        loading={false}
        backgroundColor={colors.primaryColor}
        textColor={colors.white}
        borderRadius={25}
        borderColor={colors.primaryColor}
        borderWidth={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
