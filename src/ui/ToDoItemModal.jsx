import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import UtilButtonContainer from "../components/UtilButtonContainer";
import StyledContainer from "../styled/StyledContainer";
import StyledInput from "../styled/StyledInput";
import StyledInputContainer from "../styled/StyledInputContainer";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledSubTitle from "../styled/StyledSubTitle";
import StyledErrorMsg from "../styled/StyledErrorMsg";

import { removeData, updateData } from "../features/dataSlice";
import { useDispatch } from "react-redux";

const StyledWrapper = styled(StyledContainer)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
  color: #fff;
`;

function ToDoItemModal({ item, setModalItem }) {
  const inputRef = useRef(null);
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  const onUpdateClick = (type) => {
    if (!inputRef.current.value) {
      setErrMsg("내용을 입력해주세요.");
      return;
    }
    const newItem = { ...item, type, content: inputRef.current.value };
    dispatch(updateData(newItem));
    setModalItem(null);
  };
  const onDeleteClick = () => {
    console.log(item.id);
    dispatch(removeData({ id: item.id }));
    setModalItem(null);
  };
  useEffect(() => {
    inputRef.current.value = item.content;
  }, []);
  return (
    <StyledWrapper>
      <StyledInputContainer>
        <StyledMainTitle>수정하기</StyledMainTitle>
        <StyledSubTitle>내용</StyledSubTitle>
        <StyledInput
          ref={inputRef}
          placeholder={"오늘 할 일을 여기에 입력해주세요."}
        />
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
  );
}

export default ToDoItemModal;
