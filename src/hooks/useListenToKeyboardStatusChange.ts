import { useSetRecoilState } from "recoil";
import { Keyboard } from "react-native";
import { useEffect } from "react";
import keyboardState from "../recoil/keyboardState";

const useListenToKeyboardStatusChange = () => {
  const setKeyboardOpen = useSetRecoilState(keyboardState);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
};

export default useListenToKeyboardStatusChange;
