import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import useAddTodo from "../../hooks/useAddTodo";
import { TodoPriority } from "../../types/todo";

const TodoForm = () => {
  const [todoText, setTodoText] = useState<string>("");
  const navigation = useNavigation();
  const { addTodo } = useAddTodo();

  const addNewTodoAndExit = async () => {
    navigation.goBack();
    if (todoText !== "") {
      await addTodo({
        text: todoText,
        priority: TodoPriority.LOW,
        completed: false,
      });
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "rgba(246, 247, 249, 0.8)" }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={addNewTodoAndExit}
        activeOpacity={1}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            width: "70%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Insert your new Todo
          </Text>
          <TextInput
            multiline={true}
            onChangeText={(e) => setTodoText(e)}
            value={todoText}
            placeholder={"Meet Jane tomorrow..."}
            style={{
              fontSize: 16,
              marginTop: 20,
              textAlign: "left",
              borderColor: "#F2F2F2",
              borderWidth: 1,
              borderRadius: 8,
              paddingBottom: 60,
              paddingHorizontal: 8,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TodoForm;
