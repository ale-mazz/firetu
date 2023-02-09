import React from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";

interface Props {}

const TopBar: React.FC<Props> = () => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <FastImage
        source={require("../../assets/homeLogo.jpg")}
        resizeMode={FastImage.resizeMode.cover}
        style={{
          height: 300,
          width: 300,
        }}
      />
    </View>
  );
};

export default TopBar;
