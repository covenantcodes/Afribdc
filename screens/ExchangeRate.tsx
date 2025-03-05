import { View, FlatList, StyleSheet, Text } from "react-native";
import ScreenHeader from "../components/ScreenHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AuthNavigator";
import ExchangeRateCard from "../components/ExchangeRateCard";
import { exchangeRateData, ExchangeRateCardData } from "../data/data";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";
import CustomButton from "../components/CustomButton";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Splash"
>;

const ExchangeRate = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const renderItem = ({ item }: { item: ExchangeRateCardData }) => (
    <ExchangeRateCard
      profileImage={item.profileImage}
      username={item.username}
      fromCurrency={item.fromCurrency}
      toCurrency={item.toCurrency}
      rate={item.rate}
      type={item.type}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Exchange Rates" showBackButton />

      <View style={styles.body}>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>Live exchange rates</Text>
        </View>

        <View style={styles.listMainContainer}>
          <FlatList
            data={exchangeRateData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.ctaContainer}>
          <CustomButton
            title="Get Started"
            onPress={() => navigation.navigate("Register")}
            width="100%"
            borderRadius={20}
            height={58}
            textStyle={{ fontSize: FONTSIZE.lg }}
          />

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Text style={styles.loginLink}>Login</Text>
          </View>
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
  body: {
    paddingHorizontal: 15,
  },
  listMainContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 16,
  },
  listContainer: {
    padding: 16,
  },
  subTextContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  subText: {
    marginTop: 16,
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.xl,
  },
  ctaContainer: {
    paddingVertical: 28,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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

export default ExchangeRate;
