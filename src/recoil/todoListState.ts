import { atom } from "recoil";
import { Todo } from "../types/todo";
import { mmkvStorage, TODO_LIST_KEY } from "../lib/mmkvStorage";

/**
 * The state of the todo list
 */
const todoListState = atom<Todo[]>({
  key: "todolistState",
  default: mmkvStorage.getString(TODO_LIST_KEY)
    ? JSON.parse(mmkvStorage.getString(TODO_LIST_KEY)!)
    : [],
  effects: [
    ({ onSet }) => {
      onSet((newList) => {
        mmkvStorage.set(TODO_LIST_KEY, JSON.stringify(newList));
      });
    },
  ],
});

export default todoListState;
