import "./App.css";
import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const deleteAllTodos = async () => {
    try {
      await fetch("http://localhost:5000/api/todos", {
        method: "DELETE",
      });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting all todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-md w-full max-w-lg">
        <h1 className="text-6xl font-semibold mt-5 mb-4 text-center text-indigo-900">
          To-Do-List
        </h1>
        <AddTodo fetchTodos={fetchTodos} />
        <TodoList todos={todos} fetchTodos={fetchTodos} />
        <button
          onClick={deleteAllTodos}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default App;
