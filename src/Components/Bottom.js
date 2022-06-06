import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5, MaterialCommunityIcons, SimpleLineIcons   } from '@expo/vector-icons';

const Bottom = ({ weather }) => {
  let k = weather.temp;
  let C = k - 273.15;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.Text}>Temperature</Text>
        <FontAwesome5 name="temperature-low" size={30} color="red" />
        <Text style={styles.Text}>{C.toFixed(2)} &#8451;</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.Text}> Humidity</Text>
        <MaterialCommunityIcons name="water-percent" size={30} color="blue" />
        <Text style={styles.Text}> {weather.humidity} %</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.Text}>Pressure</Text>
        <SimpleLineIcons name="speedometer" size={30} color="#c2d0e1" />
        <Text style={styles.Text}>{weather.press} mb</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flexDirection: "row",
     justifyContent: "space-between",
     marginHorizontal: 10,
   //   opacity: .15,
     
  },
  box: {
    margin: 10,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Text: {
     marginVertical: 10,
     color: 'black'
  }
});

export default Bottom;
