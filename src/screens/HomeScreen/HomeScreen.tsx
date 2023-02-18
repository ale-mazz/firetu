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
import useListenTodos from "../../hooks/useListenTodos";
import TodoButton from "../../components/TodoButton";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import useManageTodo from "../../hooks/useManageTodo";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import todoListState from "../../recoil/todoListState";

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
  container: { flex: 1, backgroundColor: "#FCDDB0", paddingHorizontal: 12 },
  homeView: {
    flex: 1,
    backgroundColor: "#FFFAD7",
    borderRadius: 12,
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
