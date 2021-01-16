import * as React from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
// import Geolocation from "@react-native-community/geolocation";

// Geolocation.setRNConfiguration(config);

// const getLocation = () => {
//   // Geolocation.getCurrentPosition((info) => console.log(info));
//   // navigator.geolocation.getCurrentPosition(
//   //   (pos) => {
//   //     console.log(pos);
//   //   },
//   //   (err) => console.log(err)
//   // );
//   navigator.geolocation.getCurrentPosition(
//     position => {
//       const location = JSON.stringify(position);

//     }
//   )
// };

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
