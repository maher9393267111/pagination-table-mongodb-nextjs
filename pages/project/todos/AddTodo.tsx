"use client";
import * as React from "react";
import { useState } from "react";
import todosStore from "../store";
import { observer } from "mobx-react-lite";

function AddTodo() {
  
  return (
    <div className='pt-2' >
      <input className="text-black mx-2"
        placeholder="New todo"
        value={todosStore.todo.text}
        
        onChange={(evt) => (todosStore.todo.text = evt.target.value)}
      />
      <select name="status" id="" onChange={(evt)=>(todosStore.todo.status=evt.target.value)} className="text-black">
        <option value="">Select Status</option>
        <option value="To Do">To do</option>
        <option value="In Progress">In Progress</option>
        <option value="Compeleted">Completed</option>
      </select>
      <button className="p-6" onClick={() => {
          if (todosStore.todo.text === "") {
            return alert("Hey! your Todo can't be empty!!");
          }
         
          return todosStore.addTodo();
         
        }}>Add Todo</button>
       
    </div>
  );
}

export default observer(AddTodo);