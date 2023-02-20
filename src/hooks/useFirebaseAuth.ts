import { useCallback, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { useNavigation } from "@react-navigation/native";

/**
 * Custom hook to handle firebase authentication
 * @returns {object} login, signup, logout, error, setError
 */
const useFirebaseAuth = () => {
  const [error, setError] = useState<string | null>();
  const navigation = useNavigation<any>();

  /**
   * Login with email and password and navigate to Home
   */
  const login = useCallback(
    async (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation.reset({ index: 0, routes: [{ name: "Home" }] }))
        .catch((error) => setError(error.message));
    },
    [navigation]
  );

  /**
   * Signup with email and password and navigate to home
   */
  const signup = useCallback(
    async (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigation.reset({ index: 0, routes: [{ name: "Home" }] }))
        .catch((error) => setError(error.message));
    },
    [navigation]
  );

  /**
   * Logout and navigate to WelcomePage
   */
  const logout = useCallback(async () => {
    return signOut(auth)
      .then(() =>
        navigation.reset({ index: 0, routes: [{ name: "WelcomePage" }] })
      )
      .catch((error) => setError(error.message));
  }, [navigation]);

  return { login, signup, logout, error, setError };
};

export default useFirebaseAuth;
