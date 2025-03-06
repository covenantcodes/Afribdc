import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import ExchangeRate from "../screens/ExchangeRate";
import EnterPhone from "../screens/Auth/EnterPhone";
import Login from "../screens/Auth/Login";
import VerifyPhone from "../screens/Auth/VerifyPhone";
import VerifyEmail from "../screens/Auth/VerifyEmail";
import Register from "../screens/Auth/Register";

export type RootStackParamList = {
  Splash: undefined;
  ExchangeRate: undefined;
  Register: undefined;
  Login: undefined;
  EnterPhone: undefined;
  VerifyPhone: {
    phoneNumber: string;
    countryCode: string;
  };
  VerifyEmail: {
    email: string;
  };
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

        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
