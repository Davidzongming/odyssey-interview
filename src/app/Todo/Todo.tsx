"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export const Todo = ({ text, completed }: TodoItem) => {
  return (
    <div
      className={`flex flex-row gap-[32px] bg-blue-50 items-center px-4 py-2 rounded-md ${completed ? "opacity-50" : "opacity-100"}`}
    >
      <input
        type="checkbox"
        checked={completed}
        readOnly
        aria-label={completed ? "Completed todo" : "Incomplete todo"}
      />
      <div className={`${completed ? "line-through" : ""}`}>{text}</div>
    </div>
  );
};
