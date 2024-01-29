import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { AppleButton } from "@invertase/react-native-apple-authentication";

async function onAppleButtonPress() {}

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <SafeAreaView className="bg-white justify-center flex-1 space-y-6 p-6">
      <View className="self-center space-y-6 p-4">
        <Text className="font-bold text-4xl pb-4">Welcome Back!!</Text>

        <View className="flex-row items-center p-2 rounded-lg border border-gray-300">
          <Icon.User height="25" width="25" stroke="gray" />
          <TextInput
            className="ml-2"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email-id"
            keyboardType="default"
          />
        </View>

        <View className="flex-row items-center p-2 rounded-lg border border-gray-300">
          <Icon.Key height="25" width="25" stroke="gray" />
          <TextInput
            className="ml-2"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            keyboardType="default"
          />
        </View>

        <Text className=" text-gray-600 self-end font-bold text-sm text">
          Forgot Password?
        </Text>

        <View className="flex-row self-center items-center space-x-2">
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="rounded-full pl-20 pr-20 pt-2 pb-2"
          >
            <Text className="font-bold text-xl">Login</Text>
          </TouchableOpacity>
        </View>

        <View className="justify-center items-center space-x-2 space-y-4">
          <Text className="font-semibold text-base">Or Login with</Text>
          <AppleButton
            buttonStyle={AppleButton.Style.DEFAULT}
            buttonType={AppleButton.Type.SIGN_IN}
            style={{
              width: 160, // You must specify a width
              height: 45, // You must specify a height
            }}
            onPress={() => onAppleButtonPress()}
          />
          <View>
            <LoginButton
              onLoginFinished={(error, result) => {
                if (error) {
                  console.log("login has error: " + result.error);
                } else if (result.isCancelled) {
                  console.log("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then((data) => {
                    console.log(data.accessToken.toString());
                  });
                }
              }}
              onLogoutFinished={() => console.log("logout.")}
            />
          </View>
        </View>
        <View className="flex-row space-x-2 justify-center p-8">
          <Text className="text-base font-semibold">
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{ color: themeColors.bgColor(1) }}
              className="font-bold text-base"
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
