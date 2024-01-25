import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useState,useEffect } from "react";
import { getCategories } from "../../api";
import { urlFor } from "../../sanity";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories?.map((category, index) => {
          let isActive = category._id == activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-white-100";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={"p-1 rounded-full shadow" + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{uri:urlFor(category.catergory_image).url()}}
                />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.category_name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
