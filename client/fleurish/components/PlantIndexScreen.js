import React, { useEffect, useState } from "react";
import { Title } from "react-native-paper";
import { View, Text, Image } from "react-native";
import { REACT_APP_LOCAL_IP } from "@env";
import axios from "axios";

const PlantIndexScreen = () => {
  const [plantResults, setPlantResults] = useState([]);
  const [notLoading, setNotLoading] = useState(false);
  
  useEffect(() => {
      axios.get(`http://${REACT_APP_LOCAL_IP}:8000/api/v1/plants`)
        .then(res => {
          setPlantResults(res.data);
          setNotLoading(true);
        })
        .catch(err => {
          console.warn(err);
          console.log("Something is wrong!")
        })
  }, [])
  // console.log(plantResults[0].image_field)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title style={{ fontSize: 32 }}>
      Plant Index
      </Title>
      <Text> Scroll through our index of plants! </Text>
      {!!notLoading && (
        <View>
          <Image
            key={`img`}
            source={require('./assets/Alfalfa.jpg')}
            style={{
              marginTop: 20,
              width: 200,
              height: 200,
              borderRadius: 20,
              borderColor: "#96bb7c",
              borderWidth: 5
            }}
          />
          <Image
            key={`img-aspargus`}
            source={require('./assets/Asparagus.jpg')}
            style={{
              marginTop: 20,
              width: 200,
              height: 200,
              borderRadius: 20,
              borderColor: "#96bb7c",
              borderWidth: 5
            }}
          />
        </View>
      )}
    </View>
  );
};

export default PlantIndexScreen;
