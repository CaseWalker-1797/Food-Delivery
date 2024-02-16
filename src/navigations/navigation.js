import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/appStack/HomeScreen";
import RestroScreen from "../screens/appStack/RestroScreen";
import CartScreen from "../screens/appStack/CartScreen";
import PreparingOrderScreen from "../screens/appStack/PreparingOrderScreen";
import DeliveryScreen from "../screens/appStack/DeliveryScreen";
import LoginScreen from "../screens/authStack/LoginScreen";
import RegisterScreen from "../screens/authStack/RegisterScreen";
import ForgotPasswordScreen from "../screens/authStack/ForgotPasswordScreen";

import FeedbackScreen from "../screens/appStack/FeedbackScreen";
import ManagePaymentScreen from "../screens/appStack/ManagePaymentScreen";
import AddressBook from "../screens/appStack/AddressBook";
import SettingsScreen from "../screens/appStack/SettingsScreen";
import UserProfileScreen from "../screens/appStack/UserProfileScreen";
// import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      f
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restro" component={RestroScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={UserProfileScreen} />
        <Stack.Screen name="Payment" component={ManagePaymentScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="PreparingOrder"
          options={{ presentation: "fullScreenModal" }}
          component={PreparingOrderScreen}
        />
        <Stack.Screen
          name="Address"
          options={{ presentation: "fullScreenModal" }}
          component={AddressBook}
        />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
