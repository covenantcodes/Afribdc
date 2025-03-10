import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";
import NotificationBell from "../../components/svgs/NotificationBell";
import images from "../../utils/images";
import CustomButton from "../../components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Wallet from "../../components/svgs/Wallet";
import Fund from "../../components/svgs/Fund";
import Swap from "../../components/svgs/Swap";
import Sell from "../../components/svgs/Sell";
import Withdraw from "../../components/svgs/Withdraw";
import { exchangeRateData } from "../../data/data";
import ExchangeRateCard from "../../components/ExchangeRateCard";

type ExchangeRateCardData = {
  id: string;
  profileImage: any;
  username: string;
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  type: "buying" | "selling";
};

const Home = () => {
  const [showBalance, setShowBalance] = useState(true);

  const renderExchangeRateItem = ({ item }: { item: ExchangeRateCardData }) => (
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
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image source={images.profile} style={styles.profileImage} />
          </View>

          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome back, Walter</Text>
          </View>

          <View style={styles.notificationContainer}>
            <NotificationBell width={30} height={30} color={colors.deepBlue} />
          </View>
        </View>

        <View style={styles.actionButtonContainer}>
          <CustomButton
            title="Complete ID Check "
            backgroundColor={colors.orange}
            onPress={() => {}}
          />
        </View>

        <View style={styles.actionTextContainer}>
          <Text style={styles.actionText}>
            Verify your identity to access full features
          </Text>
        </View>

        <LinearGradient
          colors={[colors.secondaryColor, colors.primaryColor]}
          start={{ x: -0.3, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.balanceCard}
        >
          <View style={styles.balanceContainer}>
            <View style={styles.walletContainer}>
              <Wallet
                width={50}
                height={50}
                fillColor={colors.white}
                strokeWidth={5}
              />
            </View>

            <View style={styles.balanceInfo}>
              <Text style={styles.balanceLabel}>Current Balance</Text>
              <View style={styles.amountContainer}>
                <Text style={styles.balanceAmount}>
                  {showBalance ? "CAD 0.00" : "• • • • • • • •"}
                </Text>
                <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                  <MaterialCommunityIcons
                    name={showBalance ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={colors.white}
                    style={{ marginLeft: 12 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <View style={styles.iconBox}>
              <Fund width={25} height={25} color={colors.primaryColor} />
            </View>
            <Text style={styles.actionButtonText}>Fund Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <View style={styles.iconBox}>
              <Swap width={28} height={28} color={colors.primaryColor} />
            </View>
            <Text style={styles.actionButtonText}>Swap</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <View style={styles.iconBox}>
              <Sell width={38} height={38} color={colors.primaryColor} />
            </View>
            <Text style={styles.actionButtonText}>Buy/Sell</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <View style={styles.iconBox}>
              <Withdraw width={28} height={28} color={colors.primaryColor} />
            </View>
            <Text style={styles.actionButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sellOffersContainer}>
          <View style={styles.sellOffersHeader}>
            <Text style={styles.sellOffersTitle}>Sell Offers</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.exchangeRatesContainer}>
            <FlatList
              data={exchangeRateData.slice(0, 5)}
              renderItem={renderExchangeRateItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  profileContainer: {
    width: 40,
    height: 40,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  welcomeContainer: {
    flex: 1,
    marginLeft: 12,
  },
  welcomeText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.xl,
    color: colors.deepBlue,
    textAlign: "center",
  },
  nameText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.lg,
    color: colors.deepBlue,
  },
  notificationContainer: {
    marginLeft: 12,
    padding: 8,
  },

  actionButtonContainer: {
    width: "56.2%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  actionTextContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  actionText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.lg,
    color: colors.gray2,
  },

  balanceCard: {
    marginHorizontal: 20,
    // marginTop: 5,
    borderRadius: 12,
    padding: 25,
    height: 130,
    justifyContent: "center",
  },
  balanceContainer: {
    flexDirection: "row",
    gap: 12,
  },

  walletContainer: {
    width: "23%",
  },
  balanceInfo: {
    width: "50%",
  },
  balanceLabel: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.lg,
    color: colors.white,
    opacity: 0.8,
    marginBottom: 4,
    textAlign: "center",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  balanceAmount: {
    fontFamily: FONTFAMILY.semibold,
    fontSize: FONTSIZE.xxl,
    color: colors.white,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  actionButton: {
    alignItems: "center",
    width: "20%",
  },
  iconBox: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  actionButtonText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.sm,
    color: colors.deepBlue,
    textAlign: "center",
  },
  sellOffersContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sellOffersHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sellOffersTitle: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.lg,
    color: colors.deepBlue,
  },
  seeAllText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.md,
    color: colors.blue,
  },
  exchangeRatesContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
  },
  separator: {
    height: 12,
  },
});

export default Home;
