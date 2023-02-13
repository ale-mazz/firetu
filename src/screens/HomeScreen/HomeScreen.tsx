import React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mockData } from "./mockData";
import TopBar from "../../components/TopBar";
import TodoComponent from "../../components/TodoComponent";

const renderItem = ({ item }: ListRenderItemInfo<any>) => {
  return <TodoComponent item={item} />;
};

const HomeScreen = () => {
  console.log("render Homescreen");
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
          data={mockData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
