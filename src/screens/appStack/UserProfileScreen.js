import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "../../../sanity";

const UserProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 justify-center">
      <Image
        style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        className=" w-36 h-36 self-center rounded-full m-2 p-2 "
        source={require("../../assets/images/deliveryGuy.jpeg")}
      />
      {/* Your Order & Favorite Button */}
      <View className="flex-row justify-center items-center space-x-6 m-1 p-2 ">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="flex-row flex-1 space-x-4 justify-center items-center rounded-full p-3"
          onPress={() => navigation.navigate("User")}
        >
          <Icon.ShoppingBag
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
          <Text className="text-base text-white font-bold">Your Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="flex-row flex-1 space-x-4 justify-center items-cetner rounded-full p-3"
          onPress={() => navigation.navigate("User")}
        >
          <Icon.Heart height={20} width={20} strokeWidth="2.5" stroke="white" />
          <Text className="text-base text-white font-bold">Favorite</Text>
        </TouchableOpacity>
      </View>
      {/* Coupons & FAQs Button */}
      <View className=" flex-row justify-center items-center space-x-6 m-1 p-2 ">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="flex-row flex-1 space-x-4 justify-center items-center rounded-full p-3"
          onPress={() => navigation.navigate("User")}
        >
          <Icon.Box height={20} width={20} strokeWidth="2.5" stroke="white" />
          <Text className="text-base text-white font-bold">Coupons</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="flex-row flex-1 space-x-4 justify-center items-center rounded-full p-3"
          onPress={() => navigation.navigate("User")}
        >
          <Icon.HelpCircle
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
          <Text className="text-base text-white font-bold text-center">FAQs</Text>
        </TouchableOpacity>
      </View>
      {/* Other Options */}
      <View className=" bg-white space-y-2 m-4 p-2 rounded-lg">
        {/* Your Account Button */}
        <View className=" flex-row justify-center items-center m-1 p-2 ">
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center bg-white border-b-2 border-gray-200 rounded-lg p-4 "
            onPress={() => navigation.navigate("User")}
          >
            <Icon.User
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
            <Text className="text-base font-semibold">Your Account</Text>
            <Icon.ChevronRight
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
          </TouchableOpacity>
        </View>
        {/* Address Book */}
        <View className=" flex-row justify-center items-center m-1 p-2 ">
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center bg-white border-b-2 border-gray-200 rounded-lg p-4 "
            onPress={() => navigation.navigate("User")}
          >
            <Icon.Book
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
            <Text className="text-base font-semibold">Address Book</Text>
            <Icon.ChevronRight
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
          </TouchableOpacity>
        </View>
        {/* Payment Methods */}
        <View className=" flex-row justify-center items-center m-1 p-2 ">
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center bg-white border-b-2 border-gray-200 rounded-lg p-4 "
            onPress={() => navigation.navigate("User")}
          >
            <Icon.CreditCard
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
            <Text className="text-base font-semibold">Manage Payment Methods</Text>
            <Icon.ChevronRight
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
          </TouchableOpacity>
        </View>
        {/* Feedback Button */}
        <View className=" flex-row justify-center items-center m-1 p-2 ">
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center bg-white border-b-2 border-gray-200 rounded-lg p-4 "
            onPress={() => navigation.navigate("User")}
          >
            <Icon.Edit
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
            <Text className="text-base font-semibold">Send Feedback</Text>
            <Icon.ChevronRight
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
          </TouchableOpacity>
        </View>
      </View>
       {/* Logout Button */}
        <View className=" flex-row justify-center items-center m-1 p-2 ">
          <TouchableOpacity
            style={styles.container}
            className="flex-row flex-1 space-x-2 bg-white justify-center items-center rounded-full shadow-lg p-3"
            onPress={() => navigation.navigate("User")}
          >
            <Icon.LogOut
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
            <Text className="text-base font-semibold">Logout</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#F97316",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 9,
  },
});

export default UserProfileScreen;
