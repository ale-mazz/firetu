import React from "react";
import { LogBox } from "react-native";
import { RecoilRoot } from "recoil";
import RootNavigator from "./src/navigation/RootNavigator";

// Fix for the warning: "AsyncStorage has been extracted from react-native core" cause by firebase package
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);

export default function App() {
  return (
    <RecoilRoot>
      <RootNavigator />
    </RecoilRoot>
  );
}
