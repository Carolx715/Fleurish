import * as React from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View>
      <MapView
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};

export default MapScreen;
