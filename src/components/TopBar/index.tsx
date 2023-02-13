import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { homeLogo } from "../../assets";

interface Props extends ViewProps {}

const TopBar = ({ ...rest }: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container} {...rest}>
      <Image contentFit={"cover"} source={homeLogo} style={styles.image} />
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Feather name="settings" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    height: 52,
    width: 52,
  },
});

export default TopBar;
