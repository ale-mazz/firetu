import { atom } from "recoil";
import { Todo } from "../types/todo";
import { mmkvStorage, TODO_LIST_KEY } from "../lib/mmkvStorage";

const todoListState = atom<Todo[]>({
  key: "todolist",
  default:
    (JSON.parse(mmkvStorage.getString(TODO_LIST_KEY) || "") as Todo[]) ||
    ([] as Todo[]),
  effects: [
    ({ onSet }) => {
      onSet((newList) => {
        console.log("New list saved inside the storage", newList);
        mmkvStorage.set(TODO_LIST_KEY, JSON.stringify(newList));
      });
    },
  ],
});

export default todoListState;
