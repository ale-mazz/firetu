import { addDoc, collection } from "firebase/firestore";
import db from "../services/firebaseConfig";
import { Todo } from "../types/todo";

const useAddTodo = () => {
  const addTodo = async (todo: Todo) => {
    await addDoc(collection(db, "todos"), todo);
  };

  return {
    addTodo,
  };
};

export default useAddTodo;
