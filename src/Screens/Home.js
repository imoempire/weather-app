import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import CityName from "../Components/CityName";
import Bottom from "../Components/Bottom";
import Description from "../Components/Description";

const Home = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [icons, setIcons] = useState("");

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "";
  }

  // API call
  const apiCall = async () => {
    try {
      const ApiKey = "2e8af4f1fe583288d0627085a045b509";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${ApiKey}`;
      // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.lati}&lon=-0.18498449586349072&appid=${ApiKey}`;

      const req = axios.get(url);

      const res = await req;
      setWeather({
        descp: res.data.weather[0].description,
        temp: res.data.main.temp,
        city: res.data.name,
        humidity: res.data.main.humidity,
        press: res.data.main.pressure,
        country: res.data.sys.country,
        icons: res.data.weather[0].icon
      });
      // console.log(res.data);
      setCity(res.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  //Converting K to C
  let k = weather.temp;
  let C = k - 273.15;

  return (
    <ImageBackground blurRadius={5} source={{url: 'https://i.pinimg.com/originals/ac/ae/b8/acaeb8dee54987880768262623db3d58.jpg'}} style={styles.container}>
      <Text>{text}</Text>
      <View style={styles.CityName}>
        <CityName name={city} country={weather.country} />
      </View>

      <View style={styles.Description}>
        <Description temp={weather.temp} descp={weather.descp} weatherIcon={weather.icons} />
      </View>
      <View style={styles.Bottom}>
        <Bottom weather={weather} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CityName: {
    flex: 0.2,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  Description: {
    flex: 1,
    marginHorizontal: 10,
  },
  Bottom: {
    flex: 0.4,
    
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
   //  borderBottomLeftRadius: 10,
   //  borderBottomRightRadius: 10,
    justifyContent: "center",
  },
});

export default Home;
