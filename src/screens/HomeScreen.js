import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../styles/theme";
import Categories from "../components/categories";
import FeatureRow from "../components/featuredRow";
import { getFeaturedRestro} from "../../api";

const HomeScreen = () => {
  const [featuredRestro, setFeaturedRestro] = useState([]);

  useEffect(() => {
    getFeaturedRestro().then((data) => {
      setFeaturedRestro(data);
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 p-2">
        <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Restaurants"
            className="ml-2 flex-1"
            keyboardType="default"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">PIET, PU</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Menu
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </TouchableOpacity>
      </View>
      {/* Main Content */}
      <ScrollView>
        {/* Categories */}
        <Categories />
        {/* Featured */}
        <View className="mt-5">
          {
            featuredRestro.map((item, index) => {
            return (
              <FeatureRow
                key={index}
                title={item.feature_restro_name}
                restaurants={item.feature_restro_restaurant}
                description={item.feature_restro_descrption}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
