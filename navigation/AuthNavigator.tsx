import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import ExchangeRate from "../screens/ExchangeRate";
import EnterPhone from "../screens/Auth/EnterPhone";

export type RootStackParamList = {
  Splash: undefined;
  ExchangeRate: undefined;
  Register: undefined;
  EnterPhone: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen name="EnterPhone" component={EnterPhone} />

        <Stack.Screen name="ExchangeRate" component={ExchangeRate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
