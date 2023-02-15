import React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/TopBar";
import TodoComponent from "../../components/TodoComponent";
import { useRecoilValue } from "recoil";
import todoListState from "../../recoil/todoListState";
import useListenTodos from "../../hooks/useFetchTodos";
import TodoButton from "../../components/TodoButton";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import useManageTodo from "../../hooks/useManageTodo";
import { useNavigation } from "@react-navigation/native";

const renderItem = ({ item }: ListRenderItemInfo<any>) => {
  const { deleteTodo } = useDeleteTodo();
  const { updateTodoStatus } = useManageTodo();
  return (
    <TodoComponent
      item={item}
      onPressDelete={() => deleteTodo(item.id.toString())}
      onPress={() => updateTodoStatus(item.id.toString())}
    />
  );
};

const HomeScreen = () => {
  useListenTodos();
  const navigation = useNavigation<any>();
  const todos = useRecoilValue(todoListState);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 12 }}
    >
      <TopBar />
      <View style={{ flex: 1, backgroundColor: "#F2F2F2", borderRadius: 12 }}>
        <Text style={{ fontSize: 21, fontWeight: "bold", margin: 8 }}>
          Today
        </Text>
        <FlatList
          data={todos}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TodoButton onPress={() => navigation.navigate("AddTodo")} />
    </SafeAreaView>
  );
};

export default HomeScreen;
