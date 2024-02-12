import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { Icon, IconButton, TextInput } from "react-native-paper";

const UserProfileScreen = () => {
  return (
    <SafeAreaView>
      {/* Back Button & Header */}
      <View className="flex-row justify-start m-1">
        {/* Back Button */}
        <IconButton
          className="self-start bg-white shadow-2xl m-2"
          icon="arrow-left"
          iconColor={themeColors.bgColor(1)}
          backgroundColor="white"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text className="text-lg font-bold self-center m-2">Your Profile</Text>
      </View>
      <ScrollView className="space-y-4 m-2">
        <Image
          className=" w-36 h-36 self-center rounded-full m-2"
          source={require("../../assets/images/deliveryGuy.jpeg")}
        />
        {/* User Name */}
        <TextInput
          mode="outlined"
          className="flex-1"
          activeOutlineColor={themeColors.bgColor(1)}
          outlineColor="gray"
          theme={{ colors: { background: "white" } }}
          label="Name"
          // value={email}
          // onChangeText={(email) => setEmail(email)}
        />
        {/* User email */}
        <TextInput
          mode="outlined"
          className="flex-1"
          activeOutlineColor={themeColors.bgColor(1)}
          outlineColor="gray"
          theme={{ colors: { background: "white" } }}
          label="Email-id"
          // value={email}
          // onChangeText={(email) => setEmail(email)}
        />
        {/* User password */}
        <TextInput
          mode="outlined"
          className="flex-1"
          activeOutlineColor={themeColors.bgColor(1)}
          outlineColor="gray"
          theme={{ colors: { background: "white" } }}
          label="Password"
          // value={email}
          // onChangeText={(email) => setEmail(email)}
        />
        {/* User Gender */}
        <TextInput
          mode="outlined"
          className="flex-1"
          activeOutlineColor={themeColors.bgColor(1)}
          outlineColor="gray"
          theme={{ colors: { background: "white" } }}
          label="Gender"
          // value={email}
          // onChangeText={(email) => setEmail(email)}
        />
      </ScrollView>
      {/* Submit Button */}
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1), elevation: 6 }}
        className="rounded-full items-center shadow-md pl-20 pr-20 pt-3 pb-3 m-4"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text className="font-bold text-xl text-white">Update Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
