export interface TodoAuthor {
  nickname: string;
  profilePicUri: string;
}

export enum TodoPriority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: TodoPriority;
  author: TodoAuthor;
  timestamp: string;
}
