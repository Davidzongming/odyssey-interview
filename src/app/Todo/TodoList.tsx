"use client";

import { IconPlus } from "@tabler/icons-react";
import { Todo, TodoItem } from "./Todo";
import { useState } from "react";
import {
  createTodo,
  deleteTodo as deleteTodoAction,
  completeTodo,
} from "../Database/actions";

export const TodoList = ({ initialTodos }: { initialTodos: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddItem = async () => {
    if (newTodoText.length === 0) return;
    const newTodo = await createTodo(newTodoText);
    if (!newTodo) return;
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoText("");
  };

  const toggleTodo = async (id: number) => {
    const todoToToggle = todos.find((t) => t.id === id);
    if (!todoToToggle) return;

    const updatedTodo = await completeTodo(id, !todoToToggle.completed);

    setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
  };

  const deleteTodo = async (id: number) => {
    await deleteTodoAction(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="font-medium text-2xl">My Todo List</div>
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left bg-content w-full px-2 py-1 rounded-md flex flex-col gap-2">
        {todos.map((val) => (
          <Todo
            key={val.id}
            {...val}
            onToggle={() => toggleTodo(val.id)}
            onDelete={() => deleteTodo(val.id)}
          />
        ))}
      </ul>
      <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
        <input
          placeholder="Todo text"
          className="rounded-full border-solid border-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto bg-background text-foreground grow"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          onClick={handleAddItem}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:cursor-pointer"
        >
          <IconPlus />
          Add Item
        </button>
      </div>
    </>
  );
};
