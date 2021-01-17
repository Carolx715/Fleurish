import React, { useEffect, useState } from "react";
import { Title } from "react-native-paper";
import { View, Text } from "react-native";
import { REACT_APP_LOCAL_IP } from "@env";
import axios from "axios";

const PlantIndexScreen = () => {
  const [plantResults, setPlantResults] = useState([]);
  const [notLoading, setNotLoading] = useState(false);
  useEffect(() => {
      console.log(REACT_APP_LOCAL_IP);
      console.log("Hello")
      axios.get(`http://${REACT_APP_LOCAL_IP}:8000/api/v1/plants`)
        .then(res => {
          console.log(res.data);
          setPlantResults(res.data);
          setNotLoading(true);
        })
        .catch(err => {
          console.warn(err);
          console.log("Something is wrong!")
        })
  }, [])

  console.log(plantResults);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title>Plant Index</Title>
      {!!notLoading && plantResults.map(plant => (
        <Text key={plant.id}>{plant.id}</Text>
      ))}
    </View>
  );
};

export default PlantIndexScreen;
