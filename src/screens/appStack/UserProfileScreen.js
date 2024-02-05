import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { IconButton } from "react-native-paper";

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));

    navigation.navigate("Login");
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-100 justify-top">
      {/* Back Button */}
      <IconButton
        className="self-start shadow-lg m-4"
        icon="arrow-left"
        iconColor={themeColors.bgColor(1)}
        backgroundColor="white"
        theme={{elevation:9}}
        size={24}
        onPress={()=>navigation.goBack()}
      />
      <ScrollView className="flex-1 space-y-2">
        {/* Profile Picture */}
        <Image
          className=" w-36 h-36 self-center rounded-full m-2"
          source={require("../../assets/images/deliveryGuy.jpeg")}
        />
        {/* Your Order & Favorite Button */}
        <View className="flex-row justify-center items-center space-x-6 m-2 p-1">
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="flex-row flex-1 space-x-2 justify-center items-center rounded-full p-3"
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
            className="flex-row flex-1 space-x-2 justify-center items-center rounded-full p-3"
            onPress={() => navigation.navigate("User")}
          >
            <Icon.Heart
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="white"
            />
            <Text className="text-base text-white font-bold">Favorite</Text>
          </TouchableOpacity>
        </View>
        {/* Coupons & FAQs Button */}
        <View className=" flex-row justify-center items-center space-x-6 m-2 p-1">
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="flex-row flex-1 space-x-2 justify-center items-center rounded-full p-3"
            onPress={() => navigation.navigate("User")}
          >
            <Icon.Box height={20} width={20} strokeWidth="2.5" stroke="white" />
            <Text className="text-base text-white font-bold">Coupons</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="flex-row flex-1 space-x-2 justify-center items-center rounded-full p-3"
            onPress={() => navigation.navigate("User")}
          >
            <Icon.HelpCircle
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="white"
            />
            <Text className="text-base text-white font-bold text-center">
              FAQs
            </Text>
          </TouchableOpacity>
        </View>
        {/* Other Options */}
        <View className="space-y-3 rounded-lg m-2 p-2">
          {/* Your Account Button */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center bg-white border-b-2 border-gray-200 rounded-lg m-1 p-5 shadow-lg"
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
          {/* Address Book */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center bg-white border-b-2 border-gray-200 rounded-lg m-1 p-5 shadow-lg"
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

          {/* Payment Methods */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center bg-white border-b-2 border-gray-200 rounded-lg m-1 p-5 shadow-lg"
            onPress={() => navigation.navigate("User")}
          >
            <Icon.CreditCard
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
            <Text className="text-base font-semibold">
              Manage Payment Methods
            </Text>
            <Icon.ChevronRight
              height={20}
              width={20}
              strokeWidth="2.5"
              stroke="black"
            />
          </TouchableOpacity>
          {/* Feedback Button */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center bg-white border-b-2 border-gray-200 rounded-lg m-1 p-5 shadow-lg"
            // style={{elevation:12}}
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
        {/* Logout Button */}
        <View className=" flex-row justify-center items-center m-2 p-3 ">
          <TouchableOpacity
            style={styles.container}
            className="flex-row flex-1 space-x-2 bg-white justify-center items-center rounded-full shadow-lg p-4"
            onPress={logout}
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
      </ScrollView>
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
