import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Description = ({ temp, descp, weatherIcon }) => {

  let k = temp;
  let C = k - 273.15;

  const getIcon = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{C.toFixed(1)} &#8451; </Text>
      <View style={{ alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 20 }}
          source={{ url: getIcon(weatherIcon) }}
        />
        <Text style={{ justifyContent: "center", marginHorizontal: 10, fontSize: 20, color: 'white'}}>
          {descp}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    fontSize: 90,
  },
});

export default Description;
