import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Title } from "react-native-paper";
import { View, Text, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { REACT_APP_LOCAL_IP } from "@env";
import axios from "axios";
import PlantDetails from "./PlantDetails";
import styles from "../styles/globalStyles";

export const PlantIndexScreen = ({ navigation }) => {
  // console.log(plantResults[0].image_field)
  return (
    <View style={styles.scrollViewContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.scrollTitle}>Plant Index</Title>
        <Text> Scroll through our index of plants! </Text>
        <View style={styles.centeredView}>
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
      </ScrollView>
    </View>
  );
};
