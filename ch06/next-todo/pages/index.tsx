import React from "react";
import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

const todos: TodoType[] = [
  { id: 1, text: "마트 가서 장보기", color: "red", checked: false },
  { id: 2, text: "수학 숙제하기", color: "orange", checked: false },
  { id: 3, text: "코딩하기", color: "yellow", checked: true },
  { id: 4, text: "넥스트 공부하기", color: "green", checked: true },
  { id: 5, text: "요리 연습하기", color: "blue", checked: false },
  { id: 6, text: "분리수거 하기", color: "navy", checked: false },
];

const app: NextPage = () => {
  console.log(process.env, "클라이언트");
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    console.log(process.env, "서버");
    const { data } = await getTodosAPI();
    console.log(data);
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default app;
