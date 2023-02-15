import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Image } from "expo-image";
import { Todo, TodoPriority } from "../../types/todo";
import { Feather } from "@expo/vector-icons";

const convertPriorityIntoColor = (priority: TodoPriority) => {
  switch (priority) {
    case TodoPriority.LOW:
      return "green";
    case TodoPriority.MEDIUM:
      return "orange";
    case TodoPriority.HIGH:
      return "red";
    default:
      return "white";
  }
};

interface Props extends TouchableOpacityProps {
  item: Todo;
  onPressDelete: () => void;
}

const TodoComponent = ({ item, onPressDelete, ...rest }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("test")}
      style={styles({ item }).container}
      {...rest}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles({ item }).font, styles({ item }).completed]}>
          {item.text}
        </Text>
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPressDelete}>
          <Feather name="trash-2" size={21} />
        </TouchableOpacity>
      </View>

      <View style={styles({ item }).innerContainer}>
        <View style={styles({ item }).dot} />
        <Image
          contentFit={"cover"}
          /*
          source={item.author.profilePicUri}
*/
          style={styles({ item }).image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = ({ item }: { item: Todo }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 8,
      padding: 8,
      backgroundColor: "white",
      borderRadius: 12,
    },
    innerContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    dot: {
      backgroundColor: convertPriorityIntoColor(item.priority),
      height: 22,
      width: 22,
      borderRadius: 11,
    },
    font: { fontSize: 21 },
    completed: {
      opacity: item.completed ? 0.5 : 1,
      textDecorationLine: item.completed ? "line-through" : "none",
    },
    image: {
      height: 42,
      width: 42,
      borderRadius: 21,
    },
  });

export default TodoComponent;
