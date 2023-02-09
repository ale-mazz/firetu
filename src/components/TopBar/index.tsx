import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Props {}

const TopBar: React.FC<Props> = () => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Image
        contentFit={"cover"}
        source={require("../../assets/homeLogo.jpg")}
        style={{
          height: 52,
          width: 52,
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Feather name="settings" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
