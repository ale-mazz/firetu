import { atom } from "recoil";

/**
 * The state of the keyboard (true if the keyboard is open)
 */
const keyboardState = atom<boolean>({
  key: "keyboardState",
  default: false,
});

export default keyboardState;
