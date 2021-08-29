import { readFileSync } from "fs";
import { TodoType } from "../../types/todo";

//* 투두리스트 데이터 불러오기
const getList = () => {
  const todosBuffer = readFileSync("data/todos.json");
  const todoString = todosBuffer.toString();
  if (!todoString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todoString);
  return todos;
};

export default {getList };
