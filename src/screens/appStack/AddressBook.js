import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { Icon, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const AddressBook = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView flex-1 bg-gray-100 justify-top>
      {/* Back Button & Header */}
      <TouchableOpacity
        className="flex-row justify-start m-1 space-x-1"
        onPress={() => navigation.goBack()}
      >
        {/* Back Button */}
        <IconButton
          icon="chevron-down"
          size={36}
          onPress={() => navigation.goBack()}
        />
        <Text className="text-lg font-bold self-center">My Addresses</Text>
      </TouchableOpacity>
      <ScrollView>
        <View className="justify-between m-2 bg-white rounded-xl">
          {/* Add Card Button */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between border-b-2 border-gray-200 rounded-lg p-3"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon source="plus" color={themeColors.bgColor(1)} size={25} />
              <Text
                className="text-base font-semibold self-center"
                style={{ color: themeColors.bgColor(1) }}
              >
                Add address
              </Text>
            </View>
            <Icon source="chevron-right" size={25} />
          </TouchableOpacity>
        </View>
        <Text className="text-base font-semibold self-center p-2">
          SAVED ADDRESSES
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressBook;
