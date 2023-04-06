import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
const StyledToDoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  color: ${(props) => props.theme.fontColor};
`;

const StyledToDoToggleContainer = styled.div`
  display: flex;
  border-bottom: 3px solid ${(props) => props.theme.todoColor};
  width: 100%;
  gap: 1rem;
  padding: 1rem;
`;
const StyledTodoToggle = styled.div`
  cursor: pointer;
  transform: rotate(${(props) => (props.rotate ? "90deg" : "0")});
  transition: all 0.2s;
`;
export default function ToDoContainer({ data, setModalItem, type }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledToDoContainer>
        <StyledToDoToggleContainer>
          <StyledTodoToggle
            rotate={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <AiOutlineRight />
          </StyledTodoToggle>
          <span>{type}</span>
          <span>{data.length}</span>
        </StyledToDoToggleContainer>
        {isOpen &&
          data.map((a) => (
            <ToDoItem key={a.id} item={a} setModalItem={setModalItem} />
          ))}
      </StyledToDoContainer>
    </>
  );
}
