import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { Image } from "expo-image";
import { Todo, TodoPriority } from "../../types/todo";

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
}

const TodoComponent = ({ item, ...rest }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("test")}
      style={[styles({ item }).container, styles({ item }).completed]}
      {...rest}
    >
      <Text style={styles({ item }).font}>{item.text}</Text>
      <View style={styles({ item }).innerContainer}>
        <View style={styles({ item }).dot} />
        <Image
          contentFit={"cover"}
          source={item.author.profilePicUri}
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
    completed: {
      opacity: item.completed ? 0.3 : 1,
    },
    font: { fontSize: 21 },
    image: {
      height: 42,
      width: 42,
      borderRadius: 21,
    },
  });

export default TodoComponent;
