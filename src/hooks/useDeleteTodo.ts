import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

/**
 * Hook that allows you to delete a todo from the database
 * @returns {object} deleteTodo
 */
const useDeleteTodo = () => {
  /**
   * Delete a todo from the database
   * @param id - The id of the todo
   */
  const deleteTodo = async (id: string) => {
    return deleteDoc(doc(db, "todos", id));
  };

  return {
    deleteTodo,
  };
};

export default useDeleteTodo;
