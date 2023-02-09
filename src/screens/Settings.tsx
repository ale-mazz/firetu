import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const Settings: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
