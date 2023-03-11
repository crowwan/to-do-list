import React, { useRef, useState } from "react";
import StyledContainer from "../styled/StyledContainer";
import styled from "styled-components";
import UtilButtonContainer from "../components/UtilButtonContainer";
import ToDoItem from "../components/ToDoItem";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledInput from "../styled/StyledInput";
import ToDoItemModal from "../ui/ToDoItemModal";
import StyledInputContainer from "../styled/StyledInputContainer";
import StyledErrorMsg from "../styled/StyledErrorMsg";
import { addData } from "../features/dataSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledMain = styled.main`
  color: #fff;
  min-height: calc(100vh - 3rem);
  padding: 2rem 0;
`;

const StyledToDoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const filterByPath = (a, path) => {
  switch (path) {
    case "important":
      return a.important;
    case "today":
      return a.type === "today" || a.type === "everyday";
    case "everyday":
      console.log(a, path);
      return a.type === "everyday";
    default:
      return null;
  }
};

function Main({ title, path }) {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [modalItem, setModalItem] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const inputRef = useRef();

  // useEffect(() => {
  //   // route가 바뀌긴 했는데 Main이 다시 렌더링 되지 않아서 useEffect가 실행되지 않은 것 같음
  //   // 그래서 의존성 배열에 path를 넣어주었음

  //   setData((prev) => prev.filter((a) => filterByPath(a, path)));
  // }, [path]);

  const onAddClick = (type) => {
    if (!inputRef.current.value.length) {
      setErrMsg("내용을 입력해주세요.");
      return;
    }
    const newData = {
      id: Date.now(),
      content: inputRef.current.value,
      type,
      important: false,
      isDone: false,
      createdAt: Date.now(),
    };
    dispatch(addData(newData));
    setErrMsg("");
    inputRef.current.value = "";
  };
  return (
    <>
      <StyledContainer>
        <StyledMain>
          <StyledMainTitle>{title}</StyledMainTitle>
          <StyledInputContainer>
            <StyledInput
              placeholder={"오늘 할 일을 여기에 입력하세요."}
              ref={inputRef}
            />

            <UtilButtonContainer
              btns={[{ onClickHandler: onAddClick, text: "추가하기" }]}
              name="today"
            />
            {errMsg && <StyledErrorMsg>{errMsg}</StyledErrorMsg>}
          </StyledInputContainer>
          <StyledToDoContainer>
            {data
              .filter((a) => filterByPath(a, path))
              .map((a, i) => (
                <ToDoItem key={i} item={a} setModalItem={setModalItem} />
              ))}
          </StyledToDoContainer>
        </StyledMain>
      </StyledContainer>
      {modalItem && (
        <ToDoItemModal item={modalItem} setModalItem={setModalItem} />
      )}
    </>
  );
}

export default Main;
