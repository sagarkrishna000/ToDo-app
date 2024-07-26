import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ul className="list-disc pl-5 space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
