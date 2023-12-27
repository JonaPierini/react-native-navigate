import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreenCOMPONENTE</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
        style={{
          backgroundColor: "purple",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Go stack screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
