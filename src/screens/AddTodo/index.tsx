import React, { useCallback, useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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
import { useRecoilValue } from "recoil";
import userState from "../../recoil/userState";
import { StatusBar } from "expo-status-bar";

const TodoForm = () => {
  const navigation = useNavigation();
  const { addTodo } = useAddTodo();
  const [value, setValue] = useState<number>(1);
  const [isPickerOpened, setIsPickerOpened] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const user = useRecoilValue(userState);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const addNewTodoAndExit = async () => {
    navigation.goBack();
    if (todoText !== "" && user) {
      await addTodo({
        text: todoText,
        priority: value,
        completed: false,
        timestamp: firestore.Timestamp.now(),
        author: user.uid,
      });
    }
  };

  const onBackgroundPress = useCallback(() => {
    if (isKeyboardVisible) {
      Keyboard.dismiss();
    } else {
      navigation.goBack();
    }
  }, [isKeyboardVisible]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity
        style={styles.fakeButton}
        onPress={onBackgroundPress}
        activeOpacity={1}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={200}
          style={styles.flexCenter}
        >
          <View style={styles.modalView} onStartShouldSetResponder={() => true}>
            <Text style={styles.mainHeader}>Insert your new Todo</Text>
            <Text style={styles.header}>Add some text</Text>
            <TextInput
              multiline={true}
              onChangeText={(e) => setTodoText(e)}
              value={todoText}
              placeholder={"Meet Jane tomorrow..."}
              style={styles.input}
            />
            <Text style={[styles.header, { marginVertical: 16 }]}>
              Set a priority
            </Text>

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
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgba(252, 221, 176, 0.6)" },
  fakeButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flexCenter: { flex: 1, justifyContent: "center" },
  modalView: {
    zIndex: 2,
    backgroundColor: "#FFFAD7",
    padding: 15,
    borderRadius: 8,
    width: "85%",
  },
  header: { fontSize: 18, fontFamily: "Lato_700Bold" },
  mainHeader: { fontSize: 22, fontFamily: "Lato_900Black", marginBottom: 16 },
  input: {
    fontSize: 16,
    marginTop: 16,
    textAlign: "left",
    borderColor: "#FFE7CC",
    borderWidth: 1,
    borderRadius: 8,
    paddingBottom: 80,
    paddingHorizontal: 8,
    fontFamily: "Lato_400Regular",
  },
  addButton: {
    backgroundColor: "#FF9F9F",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
});

export default TodoForm;
