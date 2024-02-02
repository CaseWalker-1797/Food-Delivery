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
import { User } from "react-native-feather";
import UserProfileScreen from "../screens/appStack/UserProfileScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restro" component={RestroScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal", headerShown: false }}
          component={CartScreen}
        />
        <Stack.Screen
          name="PreparingOrder"
          options={{ presentation: "fullScreenModal", headerShown: false }}
          component={PreparingOrderScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal", headerShown: false }}
          component={DeliveryScreen}
        />
        <Stack.Screen
          name="User"
          options={{ headerShown: false }}
          component={UserProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
