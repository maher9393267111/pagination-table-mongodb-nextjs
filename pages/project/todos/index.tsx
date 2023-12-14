'use client';
import React from "react";
import AddTodo from "./AddTodo";
import TodosList from "./TodoList";
import styled from "styled-components";

const TodosCompIndex = () => {
  return (
    <StyledContainer>
      <div className="m-auto p-5">
        <TodosList />
        <AddTodo />
      </div>
    </StyledContainer>
  );
};

export default TodosCompIndex;

const StyledContainer = styled.div`
 display:flex;
 alignItems:center;
 justifyContent:center;
 background:green;
 margin-top:10px;
 padding:10px;
 border-radiues:12px;


`;
