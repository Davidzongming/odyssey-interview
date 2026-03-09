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
      className={`flex flex-row justify-between cursor-pointer bg-blue-50 items-center px-4 py-2 rounded-md `}
    >
      <div
        className={`flex items-center gap-4 ${completed ? "opacity-50" : "opacity-100"}`}
      >
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={completed}
          readOnly
          aria-label={completed ? "Completed todo" : "Incomplete todo"}
        />
        <div className={`${completed ? "line-through" : ""}`}>{text}</div>
      </div>

      <button
        className="rounded-md border border-gray-300 bg-white px-3 py-1 font-medium hover:bg-gray-100 hover:cursor-pointer"
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
