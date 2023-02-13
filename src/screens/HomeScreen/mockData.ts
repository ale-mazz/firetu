import { Todo, TodoPriority } from "../../types/todo";

export const mockData: Todo[] = [
  {
    id: 1,
    author: {
      nickname: "Test",
      profilePicUri:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    text: "Hi i am a todo test post",
    completed: false,
    priority: TodoPriority.LOW,
    timestamp: new Date().toDateString(),
  },
];
