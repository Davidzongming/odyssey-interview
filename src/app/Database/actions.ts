"use server";

import prisma from "./client";

// READ
export const fetchAllTodos = async () => {
  return await prisma.todoItem.findMany({
    orderBy: { id: "asc" },
  });
};

// CREATE
export const createTodo = async (text: string) => {
  const trimmed = text.trim();
  if (trimmed.length === 0) return null;

  return await prisma.todoItem.create({
    data: {
      text: trimmed,
      completed: false,
    },
  });
};

// UPDATE (toggle or set completed)
export const completeTodo = async (id: number, completed: boolean) => {
  return await prisma.todoItem.update({
    where: { id },
    data: { completed },
  });
};

// DELETE
export const deleteTodo = async (id: number) => {
  return await prisma.todoItem.delete({
    where: { id },
  });
};
