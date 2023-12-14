"use client";
import { action, configure, makeAutoObservable, runInAction ,observable } from "mobx";
import todosStore2 from "./store2";
import { create, persist } from "mobx-persist";

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

class TodosStore {
  // // @ts-expect-error
  persist   token: string | null = null;
  



  // @persist("object") remember: {
  //   email: string;
  //   password: string;
  //   rememberme: boolean;
  // } | null = null;



  todosList: ITodoModel[] = [];
  todo: ITodoModel = this.resetTodoData();

  tool: ToolModel = {
    fillColor: "",
    strokeColor: "",
    name: "maher",
  };

  todoDetails = "";
  openModal: boolean = false;

  count: number = 0;

  toggle: boolean = false;

  resetTodoData() {
    return {
      //   id: 0,
      id: Math.max(0, Math.max(...this.todosList.map(({ id }) => id))) + 1,
      text: "",
      status: "",
    };
  }

  constructor() {
    // makeAutoObservable(this);
    makeAutoObservable(this, {});
  }

  get Count() {
    return this.count;
  }


  get FromText2() {
    return ;
  }

  addTodo() {
    console.log(`myTodo ${this.todo.text}`);
    this.todosList.push(this.todo);
    this.todo = this.resetTodoData();
  }
  deleteTodo = (id: number) => {
    // console.log(`todos : ${this.todosList}`);
    for (let i = 0; i < this.todosList.length; i++) {
      console.log(this.todosList[i].text);
    }
    console.log(`delete id : ${id}`);
    this.todosList = this.todosList.filter((todo) => todo.id !== id);
  };

  setTool(tool: ToolModel) {
    this.tool = tool;
  }

  changeVisability(num: number) {
    this.count = num;
    this.toggle = !this.toggle;
  }

  showTodoData(todo: any) {
    console.log("DATA", todo);

    this.todoDetails = todo;
  }
}


const hydrate = create({});

hydrate("MainStore", TodosStore).then(() => {
  console.log("MainStore hydrated");
});

const todosStore = new TodosStore();
export default todosStore;
