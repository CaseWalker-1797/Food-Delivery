import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { themeColors } from "../styles/theme";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1 justify-top">
      <LottieView
        style={{
          width: "100%",
          height: Dimensions.get("window").height / 3,
        }}
        source={require("../assets/lottie.json")}
        autoPlay
        loop
      />
      <Text className="font-bold text-4xl self-start my-4 mx-2">
        Welcome to Foodzie
      </Text>
      <Text className="font-base text-xl self-start my-4 mx-2">
        Your favourite foods delivered fastest at your door step
      </Text>
      <View className=" space-y-4 m-4 p-2 ">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1), elevation: 9 }}
          className="rounded-full items-center shadow-md pl-20 pr-20 pt-3 pb-3 m-2"
          onPress={() => Navigation.navigate("Login")}
        >
          <Text className="font-bold text-xl text-white">Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderColor: themeColors.bgColor(1), elevation: 9 }}
          className="rounded-full border items-center shadow-md pl-20 pr-20 pt-3 pb-3 m-2"
          onPress={() => Navigation.navigate("Register")}
        >
          <Text
            style={{ color: themeColors.bgColor(1) }}
            className="font-bold text-xl"
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
