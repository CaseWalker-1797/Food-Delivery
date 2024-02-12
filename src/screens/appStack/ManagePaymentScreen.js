import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { Icon, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ManagePaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
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
        <Text className="text-lg font-bold self-center m-2">
          Manage Payment Methods
        </Text>
      </View>
      <ScrollView className="flex-1 space-y-4 m-2">
        {/* Add Payment Methods */}
        {/* Card Payment Section */}
        <Text className="text-base font-semibold self-center">CARDS</Text>
        <View className="justify-between m-2 bg-white rounded-xl">
          {/* Add Card Button */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon source="credit-card-outline" size={25} />
              <Text className="text-base font-semibold self-center">
                Add credit or debit cards
              </Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              ADD
            </Text>
          </TouchableOpacity>
        </View>
        {/* UPI Payment Section */}
        <Text className="text-base font-semibold self-center">UPI</Text>
        <View className="justify-between m-2 bg-white rounded-xl">
          {/* Add GPAY UPI */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon
                source={require("../../assets/images/gpay.png")}
                size={42}
              />
              <Text className="text-base font-semibold self-center">
                Google Pay UPI
              </Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              ADD
            </Text>
          </TouchableOpacity>
          {/* Add PAYTM UPI */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon
                source={require("../../assets/images/paytm.png")}
                size={42}
              />
              <Text className="text-base font-semibold self-center">
                Paytm UPI
              </Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              ADD
            </Text>
          </TouchableOpacity>
          {/* Add New UPI */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon source={require("../../assets/images/upi.png")} size={42} />
              <Text className="text-base font-semibold self-center">
                Add New UPI ID
              </Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              ADD
            </Text>
          </TouchableOpacity>
        </View>
        {/* Wallet Payment Section */}
        <Text className="text-base font-semibold self-center">Wallet</Text>
        <View className="justify-between m-2 bg-white rounded-xl">
          {/* Add Amazon Pay Wallet */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon
                source={require("../../assets/images/amazonpay.png")}
                size={42}
              />
              <Text className="text-base font-semibold self-center">
                Amazon Pay Balance
              </Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              LINK
            </Text>
          </TouchableOpacity>
          {/* Add Mobiwik Wallet */}
          <TouchableOpacity
            className=" flex-row justify-between border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon
                source={require("../../assets/images/mobikwik.png")}
                size={42}
              />
              <Text className="text-base font-semibold self-center">
                Mobikwik
              </Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              LINK
            </Text>
          </TouchableOpacity>
          {/* Add PAYTM Wallet */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon
                source={require("../../assets/images/paytmwallet.png")}
                size={42}
              />
              <Text className="text-base font-semibold self-center">Paytm</Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              LINK
            </Text>
          </TouchableOpacity>
        </View>
        {/* PayLater Payment Section */}
        <Text className="text-base font-semibold self-center">PAY LATER</Text>
        <View className="justify-between m-2 bg-white rounded-xl">
          {/* Add Simpl  */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon
                source={require("../../assets/images/simpl.png")}
                size={42}
              />
              <Text className="text-base font-semibold self-center">Simpl</Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              ADD
            </Text>
          </TouchableOpacity>
          {/* Add Lazypay */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon
                source={require("../../assets/images/lazypay.png")}
                size={42}
              />
              <Text className="text-base font-semibold self-center">
                Lazypay
              </Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              ADD
            </Text>
          </TouchableOpacity>
        </View>
        {/* NetBanking Payment Section */}
        <Text className="text-base font-semibold self-center">NETBANKING</Text>
        <View className="justify-between m-2 bg-white rounded-xl">
          {/* Add Net Banking Details  */}
          <TouchableOpacity
            className=" flex-row flex-1 justify-between items-center border-b-2 border-gray-200 rounded-lg p-5"
            onPress={() => navigation.navigate("User")}
          >
            <View className="flex-row space-x-3">
              <Icon source="bank" size={25} />
              <Text className="text-base font-semibold self-center">
                Netbanking
              </Text>
            </View>
            <Text
              className="text-base font-semibold"
              style={{ color: themeColors.bgColor(1) }}
            >
              ADD
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManagePaymentScreen;
