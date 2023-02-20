import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { Todo } from "../types/todo";
import { converter } from "../services/firebaseUtils";

/**
 * Hook that allows you to manage the todos from the database
 * @returns {object} updateTodoStatus - Update the status of a todo
 */
const useManageTodo = () => {
  /**
   * Update the status of a todo
   * @param id - The id of the todo
   */
  const updateTodoStatus = async (id: string) => {
    /** Get the todo from the database */
    const todoRef = doc(db, "todos", id).withConverter(converter<Todo>());
    const existingTodo = await getDoc(todoRef);
    /** Update the todo in the database */
    return updateDoc(todoRef, {
      completed: !existingTodo.data()?.completed,
    });
  };

  return {
    updateTodoStatus,
  };
};

export default useManageTodo;
