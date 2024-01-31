import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { AppleButton } from "@invertase/react-native-apple-authentication";
import auth from "@react-native-firebase/auth";

async function onAppleButtonPress() {}

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClickListner = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("Home");
        console.log("User account logged in!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <SafeAreaView className="bg-white justify-center flex-1">
      <View className="border self-center m-1">
        <Text className=" font-bold self-center border text-4xl m-12 p-8">
          Welcome Back!!
        </Text>

        {/* User email */}
        <View className="flex-row items-center m-2 p-2 rounded-lg border border-gray-300">
          <Icon.User height="25" width="25" stroke="gray" />
          <TextInput
            className="ml-2"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email-id"
            keyboardType="default"
          />
        </View>
        {/* User password */}
        <View className="flex-row items-center m-2 p-2 rounded-lg border border-gray-300">
          <Icon.Key height="25" width="25" stroke="gray" />
          <TextInput
            className="ml-2"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            keyboardType="default"
          />
        </View>
        {/* Forgot Password Button */}
        <Text className=" m-2 p-2 text-gray-600 self-end font-bold text-sm text">
          Forgot Password?
        </Text>
        {/* Login Button */}
        <View className="flex-row self-center items-center space-x-2 m-12 ">
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="rounded-full pl-20 pr-20 pt-2 pb-2"
            onPress={() => {
              onLoginClickListner();
              reset();
            }}
          >
            <Text className="font-bold text-xl">Login</Text>
          </TouchableOpacity>
        </View>
        {/* Social Login Buttons */}
        <View className=" justify-center items-center m-2 p-2">
          <Text className=" font-semibold text-base m-2 p-2">
            Or Login with
          </Text>
          {/* Apple Login Button */}
          <AppleButton
            buttonStyle={AppleButton.Style.DEFAULT}
            buttonType={AppleButton.Type.SIGN_IN}
            style={{
              width: 160,
              height: 45,
            }}
            onPress={() => onAppleButtonPress()}
          />
          {/* Google Login Button */}
          {/* Facebook Login Button */}
        </View>
      </View>
      {/* Register Button */}
      <View className=" border flex-row space-x-2 justify-center m-3 p-2">
        <Text className="text-base font-semibold">Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{ color: themeColors.bgColor(1) }}
            className="font-bold text-base"
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
