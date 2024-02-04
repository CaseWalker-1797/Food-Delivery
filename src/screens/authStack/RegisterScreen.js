import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { themeColors } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white justify-center items-center flex-1">
      <Text className=" font-bold text-4xl self-start m-4">Sign Up</Text>
      <View className="justify-center">
        {/*Email Id*/}
        <TextInput
          mode="outlined"
          className="m-3"
          activeOutlineColor={themeColors.bgColor(1)}
          outlineColor="gray"
          theme={{ colors: { background: "white" } }}
          label="Enter your Email-id"
          value={email}
          left={<TextInput.Icon name="account"/>}
          onChangeText={(email) => setEmail(email)}
        />
        {/*Password*/}
        <TextInput
          mode="outlined"
          secureTextEntry
          className="m-3"
          activeOutlineColor={themeColors.bgColor(1)}
          outlineColor="gray"
          label="Enter your Password"
          theme={{ colors: { background: "white" } }}
          value={password}
          right={<TextInput.Icon name="eye"  iconColor="black" />}
          onChangeText={(password) => setPassword(password)}
        />
        {/*Confirm Password*/}
        <TextInput
          mode="outlined"
          secureTextEntry
          className="m-3"
          activeOutlineColor={themeColors.bgColor(1)}
          outlineColor="gray"
          label="Confirm Password"
          theme={{ colors: { background: "white" } }}
          value={conPassword}
          right={<TextInput.Icon name="eye" />}
          onChangeText={(conPassword) => setConPassword(conPassword)}
        />
        <Text className="text-lg font-semibold self-center m-2">
          By siging up, you agree to our Terms & Conditions and Private Policy
        </Text>
      </View>
      {/* Login Button */}
      <View className="  flex-row space-x-2 justify-center m-4">
        <Text className="text-base font-semibold">
          Already have an account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{ color: themeColors.bgColor(1) }}
            className="font-bold text-base"
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
