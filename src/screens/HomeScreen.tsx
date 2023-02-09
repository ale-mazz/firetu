import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <TopBar />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
