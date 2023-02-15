import { deleteDoc, doc } from "firebase/firestore";
import db from "../services/firebaseConfig";

const useDeleteTodo = () => {
  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return {
    deleteTodo,
  };
};

export default useDeleteTodo;
