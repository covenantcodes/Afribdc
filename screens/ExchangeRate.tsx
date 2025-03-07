import { useRef, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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

type ExchangeRateNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ExchangeRate"
>;

const ExchangeRate = () => {
  const navigation = useNavigation<ExchangeRateNavigationProp>();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const listItemAnimations = useRef<Animated.Value[]>(
    exchangeRateData.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    Animated.parallel([
      // Header animations
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      // Staggered animations for list items
      Animated.stagger(
        100,
        listItemAnimations.map((anim) =>
          Animated.spring(anim, {
            toValue: 1,
            tension: 50,
            friction: 7,
            useNativeDriver: true,
          })
        )
      ),
    ]).start();
  }, []);

  const renderItem = ({
    item,
    index,
  }: {
    item: ExchangeRateCardData;
    index: number;
  }) => (
    <Animated.View
      style={{
        opacity: listItemAnimations[index],
        transform: [
          {
            translateY: listItemAnimations[index].interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0],
            }),
          },
        ],
      }}
    >
      <ExchangeRateCard
        profileImage={item.profileImage}
        username={item.username}
        fromCurrency={item.fromCurrency}
        toCurrency={item.toCurrency}
        rate={item.rate}
        type={item.type}
      />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Exchange Rates" showBackButton />

      <ScrollView style={styles.body}>
        <Animated.View
          style={[
            styles.subTextContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.subText}>Live exchange rates</Text>
        </Animated.View>

        <View style={styles.listMainContainer}>
          <FlatList
            data={exchangeRateData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <Animated.View
          style={[
            styles.ctaContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <CustomButton
            title="Get Started"
            onPress={() => navigation.navigate("EnterPhone")}
            width="100%"
            borderRadius={25}
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
      </ScrollView>
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
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.lg,
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
