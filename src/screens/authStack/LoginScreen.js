import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
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
      // scopes: ["email", "profile"],
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
    <SafeAreaView className="bg-white justify-top flex-1" edges={["bottom"]}>
      <Image
        className="w-full h-2/5"
        source={require("../../assets/images/signinImage.png")}
      />
      <ScrollView className="space-y-2">
        <Text className=" font-bold self-start text-4xl my-4 mx-2">
          Sign In
        </Text>
        {/* User email */}
        <View className="flex-row justify-start items-center space-x-4 m-2">
          <Icon source="account" size={25} />
          <TextInput
            mode="outlined"
            className="flex-1"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            theme={{ colors: { background: "white" } }}
            label="Enter your Email-id"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        {/* User password */}
        <View className="flex-row items-center space-x-4 rounded-lg m-2">
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
        <TouchableOpacity className="self-end my-3 p-1">
          <Text className="text-gray-600 font-bold text-sm">
            Forgot Password?
          </Text>
        </TouchableOpacity>
        {/* Sign In Button */}
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1), elevation: 6 }}
          className="rounded-full items-center shadow-md pl-20 pr-20 pt-3 pb-3 m-2"
          onPress={() => {
            onLoginButtonPress();
            reset();
          }}
        >
          <Text className="font-bold text-xl text-white">Sign In</Text>
        </TouchableOpacity>

        {/* Social Login Buttons */}
        <View className="space-y-3 justify-center items-center">
          <Text className=" font-semibold text-base m-2">Or</Text>
          <View className="flex-row justify-center items-center space-x-4">
            {/* Apple Login Button */}
            <IconButton
              icon="apple"
              iconColor="black"
              size={48}
              onPress={() => onAppleButtonPress()}
            />
            {/* Google Login Button */}
            <GoogleSigninButton
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Light}
              onPress={() => onGoogleButtonPress()}
              style={{ width: 48, height: 48 }}
              // disabled={this.state.isSigninInProgress}
            />
            {/* <IconButton
              icon="google"
              iconColor="red"
              size={48}
              onPress={() => onGoogleButtonPress()}
            /> */}
            {/* Facebook Login Button */}
            <IconButton
              icon="facebook"
              iconColor="blue"
              size={48}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </View>
        {/* Go to Sign Up Button */}
        <View className="  flex-row justify-center space-x-2 m-1">
          <Text className="text-base font-semibold">
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{ color: themeColors.bgColor(1) }}
              className="font-bold text-base"
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
