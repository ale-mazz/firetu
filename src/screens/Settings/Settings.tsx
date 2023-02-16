import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const Settings = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.header1}>Developed by </Text>
        <Text style={styles.header2}>Alessandro Mazzon </Text>
        <Text style={styles.header1}>with ❤️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8CBA6",
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  innerView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFE7CC",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  header1: {
    fontSize: 18,
    fontFamily: "Lato_400Regular",
  },
  header2: {
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
});

export default Settings;
