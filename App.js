import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.canvas}>
      <Text>DANI</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "#118eea",
  },
});
