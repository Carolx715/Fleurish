import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// import NavBar from "./components/NavBar";
import MapScreen from "./components/MapScreen";
import CameraScreen from "./components/CameraScreen";
import PlantIndexScreen from "./components/PlantIndexScreen";

const Tab = createMaterialBottomTabNavigator();
const icon = <FontAwesome5 name={"circle"} solid size={25} color="#E8E8E8" />;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: "#ffff", height: 70 }}>
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ title: icon }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: icon }}
        />
        <Tab.Screen
          name="PlantIndex"
          component={PlantIndexScreen}
          options={{ title: icon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
