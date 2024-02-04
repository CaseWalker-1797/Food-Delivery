import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { Icon, IconButton } from "react-native-paper";
import { TextInput } from "react-native-paper";
import onAppleButtonPress from "./AppleAuth";
import onGoogleButtonPress from "./GoogleAuth";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "172956847543-75t69fffvc8snq9r1dfbi5iu59705ds4.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

  const onLoginButtonPress = () => {
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
    <SafeAreaView className="bg-white justify-center items-center flex-1">
      <View className=" flex-1 justify-center items-center">
        <Text className=" font-bold text-4xl  m-4 p-1">Sign In</Text>
        {/* User email */}
        <View className="flex-row justify-start items-center space-x-4 m-2">
          <Icon source="account" size={25} />
          <TextInput
            mode="outlined"
            className="flex-1 m-3"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            theme={{ colors: { background: "white" } }}
            label="Enter your Email-id"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        {/* User password */}
        <View className="flex-row items-center space-x-4 my-3 p-2 rounded-lg">
          <Icon source="key" size={25} />
          <TextInput
            mode="outlined"
            secureTextEntry
            className="flex-1"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            label="Enter your Password"
            theme={{ colors: { background: "white" } }}
            value={password}
            right={<TextInput.Icon name="eye" iconColor="black" />}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        {/* Forgot Password Button */}
        <Text className=" m-2 p-2 text-gray-600 self-end font-bold text-sm text">
          Forgot Password?
        </Text>
        {/* Login Button */}
        <View className="flex-row self-center items-center space-x-2 m-10">
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1), elevation: 8 }}
            className="rounded-full pl-20 pr-20 pt-2 pb-2"
            onPress={() => {
              onLoginButtonPress();
              reset();
            }}
          >
            <Text className="font-bold text-xl text-white">Sign In</Text>
          </TouchableOpacity>
        </View>
        {/* Social Login Buttons */}
        <View className="space-y-3 justify-center items-center m-2 p-2">
          <Text className=" font-semibold text-base m-2 p-2">
            Or Sign in with
          </Text>
          <View className="flex-row justify-center items-center">
            {/* Apple Login Button */}
            <IconButton
              icon="apple"
              size={48}
              onPress={() => onAppleButtonPress()}
            />
            {/* Google Login Button */}
            <IconButton
              icon="google"
              size={48}
              onPress={() => onGoogleButtonPress()}
            />
            {/* Facebook Login Button */}
            <IconButton
              icon="facebook"
              size={48}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </View>
        {/* Register Button */}
        <View className="  flex-row space-x-2 justify-center m-4">
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
