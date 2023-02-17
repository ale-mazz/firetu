import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
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

const ListEmptyComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, fontFamily: "Lato_400Regular" }}>
        No todos yet
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  useListenTodos();
  const navigation = useNavigation<any>();
  const todos = useRecoilValue(todoListState);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.homeView}>
        <Text style={styles.header}>Todos</Text>
        <FlatList
          data={todos}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : item.text + index
          }
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TodoButton onPress={() => navigation.navigate("AddTodo")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8CBA6", paddingHorizontal: 12 },
  homeView: {
    flex: 1,
    backgroundColor: "#FFE7CC",
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
  emptyView: { flex: 1, alignItems: "center", marginTop: 200 },
  header: {
    fontSize: 21,
    fontFamily: "Lato_700Bold",
    margin: 8,
  },
  emptyText: { fontSize: 21, fontFamily: "Lato_400Regular", margin: 8 },
  contentContainer: { flexGrow: 1 },
});

export default HomeScreen;
