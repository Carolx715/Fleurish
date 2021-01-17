import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as Progress from "react-native-progress";

import profile from "../images/profile2.png";
import badge1 from "../images/badge.png";
import badge2 from "../images/badge2.png";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profImage}></Image>
      <Text style={styles.h3}>Level 2 Plant Expert</Text>
      <Progress.Bar progress={0.6} width={200} height={20} color={"#56A06B"} />
      <Text>12/20 plants</Text>

      <Text style={styles.h4}>Badges</Text>

      <Image source={badge1} style={styles.image}></Image>
      <Text>Identified First Plant</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  h3: {
    fontSize: 18,
    fontFamily: "sans-serif-medium",
    color: "#000",
  },
  h4: {
    fontSize: 18,
    fontFamily: "sans-serif-medium",
    color: "#000",
    paddingTop: 40,
    textAlign: "left",
  },
  profImage: {
    width: 200,
    height: 200,
    marginTop: 80,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    flexDirection: "row",
  },
});
