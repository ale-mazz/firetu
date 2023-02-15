import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  onPress: () => void;
}

const TodoButton = ({ onPress, ...rest }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: 50,
        right: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
      {...rest}
    >
      <Feather name="plus" size={32} color="white" />
    </TouchableOpacity>
  );
};

export default TodoButton;
