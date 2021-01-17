import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
var { vw, vh } = require("../node_modules/react-native-expo-viewport-units");
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },

    scrollView: {
      justifyContent: "center", 
      alignItems: "center"
    },

    centeredView: {
      justifyContent: "center", 
      alignItems: "center"
    },

    plantDetailContainer: {
      paddingLeft: 40, 
      paddingRight: 40, 
      paddingBottom: 40,
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center"
    },

    scrollTitle: {
      fontSize: 32,  
      marginTop: vh(10),
      textAlign: "center"
    }
});

export default styles;