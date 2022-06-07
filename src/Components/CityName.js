import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const CityName = ({ name, country }) => {
   const [time, setTime] = useState('');

   useEffect(() => {   
      setInterval(() => {
         const today = new Date();
         const date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
         setTime(date);
      }, 1000);
   }, []);

  //  console.log(time)

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Entypo name="location-pin" size={30} color="black" />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={{fontSize: 20, color: 'black'}}>{time}</Text>
      <Text style={{fontSize: 20, color: 'black'}}>{country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  name: {
    fontSize: 20,
    flexDirection: "row",
    color: 'black'
  },
});

export default CityName;
