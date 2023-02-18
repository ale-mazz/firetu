import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { Todo } from "../types/todo";

/**
 * Hook that allows you to add a todo to the database
 */
const useAddTodo = () => {
  /**
   * Add a todo to the database
   * @param todo - The todo to add
   */
  const addTodo = async (todo: Todo) => {
    return addDoc(collection(db, "todos"), todo);
  };

  return {
    addTodo,
  };
};

export default useAddTodo;
