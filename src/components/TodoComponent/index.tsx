import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

interface Props {
  item: any;
}

const TodoComponent: React.FC<Props> = ({ item }) => {
  const [done, setDone] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setDone((prev) => !prev)}
      style={{
        flex: 1,
        margin: 8,
        padding: 8,
        backgroundColor: "white",
        borderRadius: 12,
        opacity: done ? 0.3 : 1,
      }}
    >
      <Text style={{ fontSize: 21 }}>{item.text}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: item.priority,
            height: 22,
            width: 22,
            borderRadius: 11,
          }}
        />
        <Image
          contentFit={"cover"}
          source={item.author.profilePic}
          style={{
            height: 42,
            width: 42,
            borderRadius: 21,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TodoComponent;
