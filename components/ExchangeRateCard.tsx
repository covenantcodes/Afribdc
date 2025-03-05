import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

interface ExchangeRateCardProps {
  profileImage: ImageSourcePropType;
  username: string;
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  type: "buying" | "selling";
}

const ExchangeRateCard: React.FC<ExchangeRateCardProps> = ({
  profileImage,
  username,
  fromCurrency,
  toCurrency,
  rate,
  type,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.rateText}>
            Rate 1 {fromCurrency} = {rate} {toCurrency}
          </Text>
        </View>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userInfo: {
    gap: 4,
  },
  username: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.md,
    color: colors.deepBlue,
  },
  rateText: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.sm,
    color: colors.gray,
  },
  badge: {
    paddingHorizontal: 12,
  },
  badgeText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.md,
    textTransform: "capitalize",
    color: colors.primaryColor,
  },
});

export default ExchangeRateCard;
