import React, { useEffect, useState } from "react";
import { Title } from "react-native-paper";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { REACT_APP_LOCAL_IP } from "@env";
import axios from "axios";

export const PlantDetail = () => {
  const [plantResults, setPlantResults] = useState([]);
  const [notLoading, setNotLoading] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(`http://${REACT_APP_LOCAL_IP}:8000/api/v1/plants`)
  //     .then((res) => {
  //       setPlantResults(res.data);
  //       setNotLoading(true);
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //       console.log("Something is wrong!");
  //     });
  // }, []);

  return (
    <View style={{ padding: 40, flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Title style={{ fontSize: 32 }}>Rhubarb</Title>
      <Text> Edibility: <Text style={{ color: 'red' }}> POISONOUS</Text></Text>
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
        />
      <Text style={{ fontStyle: 'italic' }}> Rheum Rhabarbarum</Text>
      <Text> Habitat: North America </Text>
      <Text> 
        Rhubarb is a vegetable derived from cultivated plants in the genus Rheum in the family Polygonaceae.[2] The whole plant – a herbaceous perennial growing from short, thick rhizomes – is also called rhubarb. Historically, different plants have been called "rhubarb" in English. The fleshy, edible stalks (petioles) of other species and hybrids (culinary rhubarb) were cooked and used for food. The large, triangular leaves contain high levels of oxalic acid and anthrone glycosides, making them inedible. The small flowers are grouped in large compound leafy greenish-white to rose-red inflorescences.  The precise origin of culinary rhubarb is unknown. The species Rheum rhabarbarum (syn. R. undulatum) and R. rhaponticum were grown in Europe before the 18th century and used for medicinal purposes. By the early 18th century, these two species and a possible hybrid of unknown origin, R. × hybridum, were grown as vegetable crops in England and Scandinavia. They readily hybridize, and culinary rhubarb was developed by selecting open-pollinated seed, so that its precise origin is almost impossible to determine.[3] In appearance, samples of culinary rhubarb vary on a continuum between R. rhaponticum and R. rhabarbarum. However, modern rhubarb cultivars are tetraploids with 2n = 44, in contrast to 2n = 22 for the wild species.[4]  Although rhubarb is a vegetable, it is often put to the same culinary uses as fruits.[5] The leaf stalks can be used raw, when they have a crisp texture (similar to celery, although it is in a different family), but are most commonly cooked with sugar and used in pies, crumbles and other desserts. They have a strong, tart taste. Many cultivars have been developed for human consumption, most of which are recognised as Rheum × hybridum by the Royal Horticultural Society.
      </Text>
    </View>
  )
}

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
            onPress={() => navigation.navigate('PlantDetail')}
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