import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import ExchangeRate from "../screens/ExchangeRate";
import EnterPhone from "../screens/Auth/EnterPhone";
import Login from "../screens/Auth/Login";
import VerifyPhone from "../screens/Auth/VerifyPhone";
import VerifyEmail from "../screens/Auth/VerifyEmail";
import Register from "../screens/Auth/Register";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import PersonalInfo from "../screens/Auth/PersonalInfo";
import SetUpPin from "../screens/Auth/SetUpPin";
import Home from "../screens/Home/Home";
import BottomTabNavigator from "./BottomTabNavigator";
import ForgotOtp from "../screens/Auth/ForgotOtp";
import ResetPassword from "../screens/Auth/ResetPassword";

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

  ForgotOtp: {
    email: string;
  };

  ForgotPassword: {
    email: string;
  };
  ResetPassword: undefined;
  PersonalInfo: undefined;
  SetUpPin: undefined;
  Home: undefined;
  MainApp: undefined;
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
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ForgotOtp" component={ForgotOtp} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="SetUpPin" component={SetUpPin} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="MainApp"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
