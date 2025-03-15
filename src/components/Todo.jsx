import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const inputTaskRef = useRef();
  const [todoList, setTodoList] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) :[] );
  const addTask = () => {
    const inputTaskTitle = inputTaskRef.current.value.trim();
    if (inputTaskTitle === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputTaskTitle,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputTaskRef.current.value = "";
  };

  const removeTask = (id) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(todoList));
  },[todoList])
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* -Title-*/}
      <div className="flex items-center mt-7 gap-2">
        <h1 className="text-3xl font-semibold">ToDo App</h1>
      </div>
      {/* -Input-*/}
      <div className="flex items-center my-7  bg-gray-200 rounded-full">
        <input
          ref={inputTaskRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="add your task"
        ></input>
        <button
          onClick={addTask}
          className="border-none rounded-full bg-blue-500 text-white w-28 h-14 text-lg cursor-pointer"
        >
          add
        </button>
      </div>
      {/* -Todo List-*/}
      <div>
        {todoList.map((items, index) => {
          return (
            <TodoItem
              key={index}
              taskTitle={items.text}
              id={items.id}
              isCompleted={items.isCompleted}
              removeTask={removeTask}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
