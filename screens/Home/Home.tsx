import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../../utils/fonts";
import NotificationBell from "../../components/svgs/NotificationBell";
import images from "../../utils/images";
import CustomButton from "../../components/CustomButton";

const Home = () => {
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
});

export default Home;
