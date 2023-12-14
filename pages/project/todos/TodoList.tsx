'use client';
import * as React from "react";
import todosStore, { ITodoModel } from "../store";
import { observer } from "mobx-react-lite";
import { Button } from '@zendeskgarden/react-buttons';

function TodoListItems() {
  return (
    <>
      {todosStore.todosList.map((todo: ITodoModel) => (
        <div className="pt-2" key={todo.id}>
      
          <input className="mx-2 text-black" value={todo.text} onChange={(evt) =>todo.text= evt.target.value} />
          <select name="status" id="" onChange={(evt)=>(todo.status=evt.target.value)} value={todo.status} className="text-black">
        <option value="">Select Status</option>
        <option value="To Do">To do</option>
        <option value="In Progress">In Progress</option>
        <option value="Compeleted">Completed</option>
      </select>
          <button className="px-6" onClick={() => todosStore.deleteTodo(todo.id)} >Delete</button>
          <Button onClick={()=>todosStore.showTodoData(todo?.text)}>Open modal</Button>
        </div>
      ))}
    </>
  );
}

const TodoListObserver = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoListObserver />
    </>
  );
}

export default TodoList;