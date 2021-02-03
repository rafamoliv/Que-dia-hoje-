import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

export default function App() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let current_date = `${date}/${month}/${year}`;

  return (
    <View style={styles.container}>
      <AdMobBanner style={styles.banner1} bannerSize="fullBanner" adUnitID="ca-app-pub-2851827333967207/5007147426" servePersonalizedAds />

      <Text style={styles.text1}>Hoje é:</Text>
      <Text style={styles.text2}>{current_date}</Text>
      <StatusBar style="auto" />

      <AdMobBanner style={styles.banner2} bannerSize="fullBanner" adUnitID="ca-app-pub-2851827333967207/5007147426" servePersonalizedAds />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171515",
    justifyContent: "center",
  },

  text1: {
    marginLeft: 75,
    fontSize: 20,
    textAlign: "left",
    color: "#f5ffff",
  },

  text2: {
    marginTop: 25,
    fontSize: 50,
    textAlign: "center",
    color: "#f5ffff",
  },

  banner1: {
    position: "absolute",
    marginTop: 30,
    top: 0,
  },

  banner2: {
    position: "absolute",
    bottom: 0,
  },
});
