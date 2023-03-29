import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { drop } from "../animations/drop";

const StyledItemContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #252423;
  gap: 0.7rem;
  border-radius: 5px;
  height: 4rem;
  align-items: center;
  padding: 0.8rem 1.5rem;
  font-size: 16px;
  animation: ${drop} 0.2s ease;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: #3b3a39;
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
  border: 2px solid #252423;
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#82abf1" : "")};
`;
const StyledStarContainer = styled.div`
  display: flex;
  align-items: center;
`;
function ToDoItem({ item, setModalItem }) {
  // 텍스트 길이를 넘어가면 그냥 없애라

  // TODO: click event handler 수정
  return (
    <>
      <StyledItemContainer onClick={() => setModalItem(item)}>
        <StyledCheckCircle checked={item.isDone} />
        <StyledTask>
          <span>{item.content}</span>
        </StyledTask>
        <StyledStarContainer>
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
