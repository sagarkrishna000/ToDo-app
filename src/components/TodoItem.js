import React, { useState } from "react";

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:5000/api/todos/${todo._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, completed: todo.completed }),
      });
      setIsEditing(false);
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/api/todos/${todo._id}`, {
        method: "DELETE",
      });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <li className="flex items-center space-x-4">
      {isEditing ? (
        <div className="flex space-x-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      )}
      <button
        onClick={() => setIsEditing(true)}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
