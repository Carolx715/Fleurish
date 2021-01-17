import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import NavBar from "../components/NavBar";
import MapScreen from "./MapScreen";
import Plant from "../images/plant.png";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Fleurish</Text>
      <Text style={styles.h2}>Plants near me</Text>
      <Image source={Plant} style={styles.image} />
      <Button
        color="#56A06B"
        title="Go"
        onPress={() => navigation.navigate(NavBar, { screen: MapScreen })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  h1: {
    fontSize: 48,
    fontFamily: "sans-serif-medium",
    color: "#326C43",
  },
  h2: {
    fontSize: 28,
    fontFamily: "sans-serif-medium",
    color: "#56A06B",
  },
  image: {
    width: 200,
    height: 200,
  },
});
