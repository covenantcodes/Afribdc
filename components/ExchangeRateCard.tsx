import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

interface ExchangeRateCardProps {
  profileImage: string;
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
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.rateText}>
            Rate 1 {fromCurrency} = {rate} {toCurrency}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.badge,
          type === "buying" ? styles.buyingBadge : styles.sellingBadge,
        ]}
      >
        <Text
          style={[
            styles.badgeText,
            type === "buying" ? styles.buyingText : styles.sellingText,
          ]}
        >
          {type}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    paddingVertical: 6,
    borderRadius: 16,
  },
  buyingBadge: {
    backgroundColor: colors.primaryColor + "20",
  },
  sellingBadge: {
    backgroundColor: colors.primaryColor + "20",
  },
  badgeText: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.sm,
    textTransform: "capitalize",
  },
  buyingText: {
    color: colors.primaryColor,
  },
  sellingText: {
    color: colors.primaryColor,
  },
});

export default ExchangeRateCard;
