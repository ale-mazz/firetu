import React from "react";
import { RecoilRoot } from "recoil";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <RecoilRoot>
      <RootNavigator />
    </RecoilRoot>
  );
}
