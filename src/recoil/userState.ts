import { atom } from "recoil";

/**
 * The user type
 * @property uid - The uid of the user
 * @property email - The email of the user
 */
export interface FiretuUser {
  uid: string;
  email: string;
}

/**
 * The state of the user
 */
const userState = atom<FiretuUser | null>({
  key: "userState",
  default: null,
});

export default userState;
