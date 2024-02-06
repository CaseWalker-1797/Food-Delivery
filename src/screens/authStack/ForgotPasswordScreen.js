import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { TextInput, Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      className="bg-white justify-top flex-1 space-y-5"
      edges={["bottom"]}
    >
      <Image
        className="w-full h-2/5"
        source={require("../../assets/images/forgotPasswordImage.png")}
      />
      <ScrollView className="space-y-4">
        <Text className=" font-bold self-start text-4xl my-4 mx-2">
          Forgot Password?
        </Text>
        <Text className="text-lg font-semibold self-start m-2">
          Don't worry! It happens to the best of us. Please enter the email
          associated with your account.
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
        {/* Submit Button */}
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1), elevation: 6 }}
          className="rounded-full items-center shadow-md pl-20 pr-20 pt-3 pb-3 m-4"
          onPress={() => {
            setEmail("");
          }}
        >
          <Text className="font-bold text-xl text-white">Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
