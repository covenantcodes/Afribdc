import { View, Text } from "react-native";
import ScreenHeader from "../components/ScreenHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const ExchangeRate = () => {
  return (
    <SafeAreaView>
      <ScreenHeader title="Exchange Rates" showBackButton />
    </SafeAreaView>
  );
};

export default ExchangeRate;
