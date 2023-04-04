import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { drop } from "../animations/drop";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateData } from "../features/dataSlice";
import { updateTodo } from "../api/todos";
import Loading from "../ui/Loading";

const StyledItemContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.todoColor};
  gap: 0.7rem;
  border-radius: 5px;
  height: 4rem;
  align-items: center;
  padding: 0.8rem 1.5rem;
  font-size: 16px;
  animation: ${drop} 0.2s ease;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: ${(props) => props.theme.hover};
  }
`;
const StyledTask = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  flex: 1 0 0;
  & span {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const StyledCheckCircle = styled.div`
  cursor: pointer;
  width: 18px;
  height: 18px;
  outline: 1px solid #82abf1;
  /* border: 2px solid ${(props) => props.theme.todoColor}; */
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#82abf1" : "")};
`;
const StyledStarContainer = styled.div`
  display: flex;
  align-items: center;
`;
function ToDoItem({ item, setModalItem }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const onItemClick = () => {
    setModalItem(item);
  };
  const onButtonClick = (key) => (e) => {
    e.stopPropagation();
    const newItem = { ...item, [key]: !item[key] };
    setIsLoading(true);
    updateTodo(item.id, newItem).then((res) => {
      dispatch(updateData(newItem));
      setIsLoading(false);
    });
  };
  // TODO: click event handler 수정
  return (
    <>
      {isLoading && <Loading />}
      <StyledItemContainer onClick={onItemClick}>
        <StyledCheckCircle
          checked={item.checked}
          onClick={onButtonClick("checked")}
        />
        <StyledTask>
          <span>{item.content}</span>
        </StyledTask>
        <StyledStarContainer onClick={onButtonClick("important")}>
          {!item.important ? (
            <AiOutlineStar color="#82abf1" size="18px" />
          ) : (
            <AiFillStar color="#82abf1" />
          )}
        </StyledStarContainer>
      </StyledItemContainer>
    </>
  );
}

export default ToDoItem;
