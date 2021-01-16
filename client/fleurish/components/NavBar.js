import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// import MapScreen from "./MapScreen";
// import CameraScreen from "./CameraScreen";
// import PlantIndexScreen from "./PlantIndexScreen";

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map</Text>
    </View>
  );
}

function PlantIndexScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Plant Index</Text>
    </View>
  );
}

function CameraScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const NavBar = () => {
  return (
    // <View>
    //   <Text>Map</Text>
    // </View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="PlantIndex" component={PlantIndexScreen1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
