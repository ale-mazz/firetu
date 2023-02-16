import { useEffect } from "react";
import db from "../services/firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { converter, convertFromFirestore } from "../services/firebaseUtils";
import { Todo } from "../types/todo";
import { useSetRecoilState } from "recoil";
import todoListState from "../recoil/todoListState";

const useListenTodos = () => {
  const setTodos = useSetRecoilState(todoListState);
  useEffect(() => {
    const q = query(
      collection(db, "todos").withConverter(converter<Todo>()),
      orderBy("timestamp", "desc")
    );
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
