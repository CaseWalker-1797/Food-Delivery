import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";

const FeedbackScreen = () => {
  const navigation = useNavigation();
  const [feedback, setFeedback] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-gray-100 justify-top">
      {/* Back Button */}
      <IconButton
        className="self-start bg-white shadow-2xl m-4"
        icon="arrow-left"
        iconColor={themeColors.bgColor(1)}
        backgroundColor="white"
        size={24}
        onPress={() => navigation.goBack()}
      />
      <View className="flex-1 space-y-4 m-2">
        <Text className=" font-bold self-start text-4xl my-4 mx-2">
          Send Feedback
        </Text>
        <Text className="text-lg font-semibold self-start m-2">
          Tell us what ypu love about the app and what we could be doing better.
        </Text>
        {/* User Feedback */}
        <TextInput
          className="m-2 bg-white"
          activeUnderlineColor={themeColors.bgColor(1)}
          underlineColor="gray"
          multiline={true}
          theme={{ colors: { background: "white" } }}
          label="Enter Feedback"
          value={feedback}
          onChangeText={(feedback) => setFeedback(feedback)}
        />
        {/* Submit Feedback Button */}
        <TouchableOpacity
          style={{ backgroundColor: "gray", elevation: 6 }}
          className="rounded-full items-center shadow-md pl-20 pr-20 pt-3 pb-3 m-4"
          onPress={() => {
            setFeedback("");
            navigation.goBack();
          }}
        >
          <Text className="font-bold text-xl text-white">Submit Feedback</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FeedbackScreen;
