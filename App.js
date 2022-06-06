import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Screens/Home";


export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
