import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { themeColors } from "../styles/theme";
import * as Icon from "react-native-feather";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../../sanity";

const DishRow = ({ item }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state,_id) =>
    selectCartItemsById(state, item._id)
  );
  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };
  return (
    <View
      style={styles.container}
      className=" border border-gray-100 flex-row items-center bg-white px-3 py-3 rounded-3xl shadow-2xl mb-3 mx-2"
    >
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{ uri: urlFor(item.dish_image).url() }}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.dish_name}</Text>
          <Text className="text-gray-700">{item.dish_description}</Text>
        </View>
        <View className="flex-row pl-3 justify-between items-center">
          <Text className="text-gray-700 text-lg font-bold">
            ${item.dish_price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "gray",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 9,
  },
});
export default DishRow;
