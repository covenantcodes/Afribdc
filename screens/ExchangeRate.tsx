import { View, FlatList, StyleSheet, Text } from "react-native";
import ScreenHeader from "../components/ScreenHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import ExchangeRateCard from "../components/ExchangeRateCard";
import { exchangeRateData, ExchangeRateCardData } from "../data/data";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

const ExchangeRate = () => {
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
});

export default ExchangeRate;
