import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import UtilButtonContainer from "../components/UtilButtonContainer";
import StyledContainer from "../styled/StyledContainer";
import StyledInput from "../styled/StyledInput";
import StyledInputContainer from "../styled/StyledInputContainer";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledSubTitle from "../styled/StyledSubTitle";
import StyledErrorMsg from "../styled/StyledErrorMsg";

import { removeData, updateData } from "../features/dataSlice";
import { deleteTodo, updateTodo } from "../api/todos";
import Loading from "./Loading";

const StyledWrapper = styled(StyledContainer)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.fontColor};
  z-index: 15;
`;

function ToDoItemModal({ item, setModalItem }) {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();

  const onModalOutsideClick = e => {
    if (e.target === containerRef.current) setModalItem(null);
  };

  const onUpdateClick = type => {
    if (!inputRef.current.value) {
      setErrMsg("내용을 입력해주세요.");
      return;
    }
    const newItem = { ...item, type, content: inputRef.current.value };

    setIsLoading(true);
    updateTodo(item.id, newItem)
      .then(res => {
        dispatch(updateData(newItem));
        setModalItem(null);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  };

  const onDeleteClick = () => {
    setIsLoading(true);
    deleteTodo(item.id).then(res => {
      dispatch(removeData({ id: item.id }));
      setModalItem(null);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    inputRef.current.value = item.content;
  }, [item.content]);
  return (
    <>
      {isLoading && <Loading />}
      <StyledWrapper onClick={onModalOutsideClick} ref={containerRef}>
        <StyledInputContainer>
          <StyledMainTitle>수정하기</StyledMainTitle>
          <StyledSubTitle>내용</StyledSubTitle>
          <StyledInput ref={inputRef} placeholder="오늘 할 일을 여기에 입력해주세요." />
          <StyledSubTitle>타입</StyledSubTitle>
          <UtilButtonContainer
            btns={[
              { onClickHandler: onUpdateClick, text: "수정하기" },
              {
                onClickHandler: onDeleteClick,
                text: "삭제하기",
                bgColor: "#ff6d6d",
              },
            ]}
            name={item.type}
          />
          {errMsg && <StyledErrorMsg>{errMsg}</StyledErrorMsg>}
        </StyledInputContainer>
      </StyledWrapper>
    </>
  );
}

export default ToDoItemModal;
