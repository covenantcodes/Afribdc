import { View, FlatList, StyleSheet } from "react-native";
import ScreenHeader from "../components/ScreenHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import ExchangeRateCard from "../components/ExchangeRateCard";
import { exchangeRateData, ExchangeRateCardData } from "../data/data";
import colors from "../utils/colors";

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
      <FlatList
        data={exchangeRateData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    padding: 16,
  },
});

export default ExchangeRate;
