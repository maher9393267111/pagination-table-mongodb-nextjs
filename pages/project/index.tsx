import React, { useState } from "react";
import TodosCompIndex from "./todos";
import { observer } from "mobx-react-lite";
import todosStore from "./store";
import { Button } from "@zendeskgarden/react-buttons";
import {
  Modal,
  Header,
  Body,
  Footer,
  FooterItem,
  Close,
} from "@zendeskgarden/react-modals";
import { Row, Col } from "@zendeskgarden/react-grid";
function Index() {
  const execute = () => {
    const data = {
      fillColor: "121212",
      strokeColor: "",
      name: "ma12121asher",
    };

    todosStore.setTool(data);
  };

  const chanegeNumToggle = () => {
    todosStore.changeVisability(5);
  };

  const [visible, setVisible] = useState(false);
  console.log("??", todosStore.openModal);

  return (
    <div>
      {todosStore.todoDetails}

      <button
        onClick={() => {
          execute();
        }}
      >
        OPEN
      </button>

      <button onClick={chanegeNumToggle}>change toggle</button>


Count : {todosStore.Count
}


      {todosStore.toggle && <TodosCompIndex />}
    </div>
  );
}

export default observer(Index);
