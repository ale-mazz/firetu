import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {}

/**
 * Button to add new todo
 * @param onPress - function to call on press event
 * @param rest - other props
 * @constructor
 */
const TodoButton = ({ onPress, ...rest }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} {...rest}>
      <Feather name="plus" size={32} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 40,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF9F9F",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TodoButton;
