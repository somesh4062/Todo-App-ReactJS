import React from "react";
import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const TodoItem = ({ taskTitle, id, isCompleted, removeTask, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <CheckCircleIcon
          onClick={() => {
            toggle(id);
          }}
          className={`h-6 w-6 ${isCompleted ? "fill-orange-400" : ""}`}
        />

        <p className={`text-xl ml-4 decoration-slate-500 ${isCompleted ? "line-through":""}`}>{taskTitle}</p>
      </div>
      <TrashIcon
        onClick={() => removeTask(id)}
        className="h6 w-6 cursor-pointer ml-auto"
      />
    </div>
  );
};

export default TodoItem;
