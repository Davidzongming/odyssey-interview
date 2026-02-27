"use client";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};
type TodoProps = TodoItem & {
  onToggle: () => void;
  onDelete: () => void;
};

export const Todo = ({ text, completed, onToggle, onDelete }: TodoProps) => {
  return (
    <div
      onClick={onToggle}
      className={`flex flex-row gap-[32px] bg-blue-50 items-center px-4 py-2 rounded-md ${completed ? "opacity-50" : "opacity-100"}`}
    >
      <input
        type="checkbox"
        checked={completed}
        readOnly
        aria-label={completed ? "Completed todo" : "Incomplete todo"}
      />
      <div className={`${completed ? "line-through" : ""}`}>{text}</div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
};
