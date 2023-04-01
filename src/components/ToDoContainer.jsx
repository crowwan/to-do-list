import styled from "styled-components";
import ToDoItem from "./ToDoItem";
const StyledToDoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;
export default function ToDoContainer({ data, setModalItem, type }) {
  return (
    <>
      <StyledToDoContainer>
        {data.map((a) => (
          <ToDoItem key={a.id} item={a} setModalItem={setModalItem} />
        ))}
      </StyledToDoContainer>
    </>
  );
}
