import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Wallet from "../screens/Wallet/Wallet";
import Orders from "../screens/Orders/Orders";
import Cards from "../screens/Cards/Cards";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

// Import SVG components with aliases
import HomeIcon from "../components/svgs/Home";
import WalletIcon from "../components/svgs/Wallet";
import OrdersIcon from "../components/svgs/Orders";
import CardIcon from "../components/svgs/Card";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 65,
          paddingHorizontal: 20,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
        tabBarLabelStyle: {
          fontFamily: FONTFAMILY.medium,
          fontSize: FONTSIZE.xs,
          marginTop: 4,
        },
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.deepBlue,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <HomeIcon
              width={24}
              height={24}
              fillColor={color}
              strokeWidth={2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <WalletIcon
              width={30}
              height={30}
              fillColor={color}
              strokeWidth={8}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <OrdersIcon width={30} height={30} fillColor={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <CardIcon
              width={30}
              height={30}
              fillColor={color}
              strokeWidth={1.2}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
