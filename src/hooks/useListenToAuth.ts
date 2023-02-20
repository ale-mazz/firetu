import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../services/firebaseConfig";
import { useRecoilState } from "recoil";
import userState from "../recoil/userState";

/**
 * Hook that allows you to listen to the auth state
 * @returns {object} user, initializing - The user and whether the app is initializing
 */
const useListenToAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useRecoilState(userState);
  /**
   * Listen to the auth state and update the userState
   */
  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser && firebaseUser.email) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        });
      }
      if (initializing) setInitializing(false);
    });
  }, []);

  return {
    user,
    initializing,
  };
};

export default useListenToAuth;
