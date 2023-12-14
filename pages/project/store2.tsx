"use client";
import { action, configure, makeAutoObservable, runInAction } from "mobx";

configure({
  enforceActions: "never",
});
export interface ITodoModel {
  id: number;
  text: string;
  status: string;
}

export interface ToolModel {
  fillColor: string;
  strokeColor: string;
  name: string;
}

class TodosStore2 {


  todoDetails = "";
  openModal: boolean = false;
  store2 :string = "store2Text"



  constructor() {
    // makeAutoObservable(this);
    makeAutoObservable(this, {});
  }

 
}

const todosStore2 = new TodosStore2();
export default todosStore2;
