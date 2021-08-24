import React from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import { TodoType } from "../types/todo";

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  }
`;

interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  //* 색깔 객체 구하기 1
  const getTodoColorNums = () => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach((todo) => {
      if (todo.color === "red") {
        red += 1;
      }
      if (todo.color === "orange") {
        orange += 1;
      }
      if (todo.color === "yellow") {
        yellow += 1;
      }
      if (todo.color === "green") {
        green += 1;
      }
      if (todo.color === "blue") {
        blue += 1;
      }
      if (todo.color === "navy") {
        navy += 1;
      }
    });
    return {
      red,
      orange,
      yellow,
      green,
      blue,
      navy,
    };
  };
  console.log(getTodoColorNums());

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span>{todos.length}개</span>
        </p>
      </div>
    </Container>
  );
};

export default TodoList;
