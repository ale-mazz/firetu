import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../services/firebaseConfig";
import { Todo } from "../types/todo";
import { converter } from "../services/firebaseUtils";

const useManageTodo = () => {
  const updateTodoStatus = async (id: string) => {
    const todoRef = doc(db, "todos", id).withConverter(converter<Todo>());
    const existingTodo = await getDoc(todoRef);

    await updateDoc(todoRef, {
      completed: !existingTodo.data()?.completed,
    });
  };

  return {
    updateTodoStatus,
  };
};

export default useManageTodo;
