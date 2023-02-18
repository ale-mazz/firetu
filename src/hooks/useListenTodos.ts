import { useEffect } from "react";
import { db } from "../services/firebaseConfig";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { converter, convertFromFirestore } from "../services/firebaseUtils";
import { Todo } from "../types/todo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import todoListState from "../recoil/todoListState";
import userState from "../recoil/userState";

/**
 * Hook that allows you to listen to the todos from the database
 */
const useListenTodos = () => {
  const user = useRecoilValue(userState);
  const setTodos = useSetRecoilState(todoListState);
  /**
   * Listen to the todos from the database
   */
  useEffect(() => {
    if (!user) return;
    /** Query the todos from the database */
    const q = query(
      collection(db, "todos").withConverter(converter<Todo>()),
      where("author", "==", user.uid),
      orderBy("timestamp", "desc")
    );
    /** Listen to the query */
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const result = convertFromFirestore<Todo>(querySnapshot);
      if (result) {
        setTodos(result);
      }
    });
    return () => unsubscribe();
  }, []);
};

export default useListenTodos;
