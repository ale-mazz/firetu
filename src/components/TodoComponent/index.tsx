import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Todo, TodoPriority } from "../../types/todo";
import { Feather } from "@expo/vector-icons";

/**
 * Convert priority into color for the todo
 * @param priority
 */
const convertPriorityIntoColor = (priority: TodoPriority) => {
  switch (priority) {
    case TodoPriority.LOW:
      return "#95E1D3";
    case TodoPriority.MEDIUM:
      return "#FCE38A";
    case TodoPriority.HIGH:
      return "#F38181";
    default:
      return "white";
  }
};

/**
 * Todo component
 * @param item - todo item
 * @param onPressDelete - function to call on delete button press
 */
interface Props extends TouchableOpacityProps {
  item: Todo;
  onPressDelete: () => void;
}

/**
 * Todo component to display todo item
 * @param item - todo item
 * @param onPressDelete - function to call on delete button press
 * @param rest - other props
 * @constructor
 */
const TodoComponent = ({ item, onPressDelete, ...rest }: Props) => {
  const date = new Date(item.timestamp.seconds * 1000).toLocaleDateString(
    "it-IT",
    { dateStyle: "medium" }
  );
  const time = new Date(item.timestamp.seconds * 1000).toLocaleTimeString(
    "it-IT",
    { hour12: false, timeStyle: "short" }
  );
  return (
    <TouchableOpacity
      onPress={() => console.log("test")}
      style={styles({ item }).container}
      {...rest}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles({ item }).header, styles({ item }).completed]}>
          {item.text}
        </Text>
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPressDelete}>
          <Feather name="trash-2" size={21} />
        </TouchableOpacity>
      </View>

      <View style={styles({ item }).innerContainer}>
        <View style={styles({ item }).dot} />
        <View style={styles({ item }).dateTimeStyle}>
          <Text style={styles({ item }).dateStyle}>{date}</Text>
          <Text style={styles({ item }).timeStyle}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ({ item }: { item: Todo }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 6,
      marginHorizontal: 12,
      padding: 8,
      backgroundColor: "#FEFBE9",
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    innerContainer: {
      marginTop: 10,
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    dot: {
      backgroundColor: convertPriorityIntoColor(item.priority),
      height: 22,
      width: 22,
      borderRadius: 11,
    },
    header: { fontSize: 18, fontFamily: "Lato_400Regular" },
    completed: {
      opacity: item.completed ? 0.5 : 1,
      textDecorationLine: item.completed ? "line-through" : "none",
    },
    image: {
      height: 42,
      width: 42,
      borderRadius: 21,
    },
    dateTimeStyle: { flexDirection: "row" },
    dateStyle: { marginRight: 5, fontFamily: "Lato_400Regular" },
    timeStyle: { fontFamily: "Lato_400Regular" },
  });

export default TodoComponent;
