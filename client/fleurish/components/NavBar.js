import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";
import { PlantIndexScreen, PlantDetail } from "../screens/PlantIndexScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === "Map") {
              return (
                <Ionicons
                  name={"ellipse"}
                  color={focused ? "#5DB075" : "#E8E8E8"}
                  size={26}
                />
              );
            } else if (route.name === "Camera") {
              return (
                <Ionicons
                  name={"ellipse"}
                  color={focused ? "#5DB075" : "#E8E8E8"}
                  size={26}
                />
              );
            } else if (route.name === "Plant Index") {
              return (
                <Ionicons
                  name={"ellipse"}
                  color={focused ? "#5DB075" : "#E8E8E8"}
                  size={26}
                />
              );
            } else if (route.name === "Profile") {
              return (
                <Ionicons
                  name={"ellipse"}
                  color={focused ? "#5DB075" : "#E8E8E8"}
                  size={26}
                />
              );
            }
          },
        })}
        barStyle={{ backgroundColor: "#ffff", height: 70 }}
      >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Plant Index" component={PlantIndexScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
