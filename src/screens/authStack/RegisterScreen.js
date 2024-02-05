import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { themeColors } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { Icon, IconButton } from "react-native-paper";
import auth from "@react-native-firebase/auth";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [conPassword, setConPassword] = useState("");
  const navigation = useNavigation();

  const onSignupButtonPress = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("Login");
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }
        if (confirmPassword !== password) {
          console.log("Password does not match");
        }
        console.error(error);
      });
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <SafeAreaView
      // className="bg-white justify-top flex-1"
      style={{ flex: 1, backgroundColor: "white", justifyContent: "top"}}
      edges={["bottom"]}
    >
      <Image
        className="w-full h-2/5"
        source={require("../../assets/images/signupImage.png")}
      />
      <View className="space-y-2">
        <Text className="font-bold text-4xl self-start my-4 mx-2">Sign Up</Text>
        <View className="justify-center items-center">
          {/*Email Id*/}
          <View className="flex-row items-center space-x-4 rounded-lg m-2">
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
          {/*Password*/}
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
              right={
                <TextInput.Icon
                  name="eye"
                  style={{ borderWidth: 1, width: 24, height: 24 }}
                />
              }
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          {/*Confirm Password*/}
          {/* <View className="flex-row items-center space-x-4 my-3 p-2 rounded-lg">
          <TextInput
            mode="outlined"
            secureTextEntry
            className="flex-1"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            label="Confirm Password"
            theme={{ colors: { background: "white", onSurface:'aqua' } }}
            right={<TextInput.Icon name="eye" style={{ borderWidth: 1, width: 24,height: 24,}} />}

            value={conPassword}
            onChangeText={(conPassword) => setConPassword(conPassword)}
          />
        </View> */}
          <Text className="text-lg font-semibold self-start m-2">
            By siging up, you agree to our Terms & Conditions and Private Policy
          </Text>
        </View>
        {/* Sign Up Button */}
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1), elevation: 6 }}
          className="rounded-full items-center shadow-md pl-20 pr-20 pt-3 pb-3 m-2"
          onPress={() => {
            onSignupButtonPress();
            reset();
          }}
        >
          <Text className="font-bold text-xl text-white">Continue</Text>
        </TouchableOpacity>
        {/* Social Login Buttons */}
        <View className="justify-center items-center ">
          <Text className=" font-semibold text-base m-1">Or</Text>
          <View className="flex-row justify-center items-center space-x-4">
            {/* Apple Login Button */}
            <IconButton
              icon="apple"
              iconColor="black"
              size={48}
              onPress={() => onAppleButtonPress()}
            />
            {/* Google Login Button */}
            <IconButton
              icon="google"
              iconColor="red"
              size={48}
              onPress={() => onGoogleButtonPress()}
            />
            {/* Facebook Login Button */}
            <IconButton
              icon="facebook"
              iconColor="blue"
              size={48}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </View>
        {/* Go to Sign In Button */}
        <View className="self-center flex-row space-x-2 m-1">
          <Text className="text-base font-semibold">Have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{ color: themeColors.bgColor(1) }}
              className="font-bold text-base"
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
