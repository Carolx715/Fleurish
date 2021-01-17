import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Title } from "react-native-paper";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { REACT_APP_LOCAL_IP } from "@env";
import axios from "axios";
import PlantDetails from "./PlantDetails";

export const PlantIndexScreen = ({ navigation }) => {
  // console.log(plantResults[0].image_field)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title style={{ fontSize: 32 }}>Plant Index</Title>
      <Text> Scroll through our index of plants! </Text>
      <View>
        <Image
          key={`rhubarb`}
          source={require("./assets/Rhubarb.jpg")}
          style={{
            marginTop: 20,
            width: 200,
            height: 200,
            borderRadius: 20,
            borderColor: "#96bb7c",
            borderWidth: 5,
          }}
          onPress={() => navigation.navigate(PlantDetails)}
        />
        <Image
          key={`img-wisteria`}
          source={require("./assets/Wisteria.jpg")}
          style={{
            marginTop: 20,
            width: 200,
            height: 200,
            borderRadius: 20,
            borderColor: "#96bb7c",
            borderWidth: 5,
          }}
        />
      </View>
    </View>
  );
};
