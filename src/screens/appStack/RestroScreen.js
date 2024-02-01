import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../../styles/theme";
import { useDispatch } from "react-redux";
import DishRow from "../../components/dishRow";
import CartIcon from "../../components/cartIcon";
import { setRestro } from "../../redux/slices/restroSlice";
import { useEffect } from "react";
import { urlFor } from "../../../sanity";

const RestroScreen = ({ navigation }) => {
  const { params } = useRoute();
  let item = params;
  const dispatch = useDispatch();
  console.log("restro+++++++>", item);
  useEffect(() => {
    if (item && item._id) {
      dispatch(setRestro({ ...item }));
    }
    return () => {};
  }, []);

  return (
    <SafeAreaView className="flex-1" edges={["bottom"]}>
      <View className="relative">
        <Image className="w-full h-72" source={{ uri: urlFor(item.restro_image).url()}} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="bg-white -mt-12 pt-6"
      >
        <View className="px-5">
          <Text className="text-3xl font-bold">{item.restro_name}</Text>
          {/* copy this code from restaurant card */}
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{item.star}</Text>
                <Text className="text-gray-700"> ({item.restro_reviews} reviews)</Text> ·
                <Text className="font-semibold text-gray-700">
                  {item.category}
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text className="text-gray-800 text-xs">
                {" "}
                Nearby · {item.restro_type.category_name}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2">{item.restro_description}</Text>
        </View>
      </View>
      <View className="flex-1 bg-white">
        <Text className="px-4 py-2 text-2xl font-bold">Menu</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* dishes */}
          {item.dishes.map((dish, index) => {
            return <DishRow key={index} item={{ ...dish }} />;
          })}
          <View style={{ height: 75 }} />
        </ScrollView>
        <CartIcon />
      </View>
    </SafeAreaView>
  );
};

export default RestroScreen;
