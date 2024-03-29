import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React from "react";
import { themeColors } from "../styles/theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../../sanity";

const ResturantCard = ({ item }) => {
  const navigation = useNavigation();
  // console.log("got++++>",item)
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restro", { ...item })}
    >
      <View
        // style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7,}}
        style={styles.container}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: urlFor(item.restro_image).url() }}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.restro_name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs space-x-1">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.restro_reviews} reviews){" "}
              </Text>
              ·{" "}
              <Text className="font-semibold text-gray-700 ">
                {item.restro_type.category_name}
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              Nearby · {item.restro_address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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

export default ResturantCard;
