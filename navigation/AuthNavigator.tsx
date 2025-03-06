import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import ExchangeRate from "../screens/ExchangeRate";
import EnterPhone from "../screens/Auth/EnterPhone";
import Login from "../screens/Auth/Login";
import VerifyPhone from "../screens/Auth/VerifyPhone";

export type RootStackParamList = {
  Splash: undefined;
  ExchangeRate: undefined;
  Register: undefined;
  Login: undefined;
  EnterPhone: undefined;
  VerifyPhone: undefined;
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

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
