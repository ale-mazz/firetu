import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import useAddTodo from "../../hooks/useAddTodo";
import PriorityPicker from "../../components/PriorityPicker";
import firebase from "firebase/compat";
import firestore = firebase.firestore;

const TodoForm = () => {
  const [value, setValue] = useState<number>(1);
  const [isPickerOpened, setIsPickerOpened] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>("");
  const navigation = useNavigation();
  const { addTodo } = useAddTodo();

  const addNewTodoAndExit = async () => {
    navigation.goBack();
    if (todoText !== "") {
      await addTodo({
        text: todoText,
        priority: value,
        completed: false,
        timestamp: firestore.Timestamp.now(),
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.fakeButton}
        onPress={() => navigation.goBack()}
        activeOpacity={1}
      >
        <View style={styles.modalView} onStartShouldSetResponder={() => true}>
          <Text style={styles.header}>Insert your new Todo</Text>
          <TextInput
            multiline={true}
            onChangeText={(e) => setTodoText(e)}
            value={todoText}
            placeholder={"Meet Jane tomorrow..."}
            style={styles.input}
          />

          <PriorityPicker
            open={isPickerOpened}
            setOpen={setIsPickerOpened}
            value={value}
            setValue={setValue}
            multiple={false}
          />
          <TouchableOpacity
            onPress={addNewTodoAndExit}
            style={styles.addButton}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgba(248, 203, 166, 0.6)" },
  fakeButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  modalView: {
    zIndex: 2,
    backgroundColor: "#FFFBEB",
    padding: 15,
    borderRadius: 8,
    width: "80%",
  },
  header: { fontSize: 18, fontFamily: "Lato_700Bold" },
  input: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "left",
    borderColor: "#F8CBA6",
    borderWidth: 1,
    borderRadius: 8,
    paddingBottom: 80,
    paddingHorizontal: 8,
    fontFamily: "Lato_400Regular",
  },
  addButton: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lato_700Bold",
  },
});

export default TodoForm;
