import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";
import NotificationBell from "../../components/svgs/NotificationBell";
import images from "../../utils/images";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            // source={require("../../assets/images/profile.png")}
            source={images.profile}
            style={styles.profileImage}
          />
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
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.balanceCard}
      >
        <View style={styles.balanceContainer}>
          <MaterialCommunityIcons
            name="wallet-outline"
            size={24}
            color={colors.white}
          />

          <View style={styles.balanceInfo}>
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.balanceAmount}>
                {showBalance ? "CAD 0.00" : "• • • • •"}
              </Text>
              <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                <MaterialCommunityIcons
                  name={showBalance ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
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
    width: "40%",
    padding: 20,
  },

  actionTextContainer: {
    paddingHorizontal: 20,
  },

  actionText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.lg,
    color: colors.gray2,
  },

  balanceCard: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    padding: 20,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  balanceInfo: {
    flex: 1,
  },
  balanceLabel: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.md,
    color: colors.white,
    opacity: 0.8,
    marginBottom: 4,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  balanceAmount: {
    fontFamily: FONTFAMILY.semibold,
    fontSize: FONTSIZE.xl,
    color: colors.white,
  },
});

export default Home;
