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
import { addTodo } from "../util/todos";
import Loading from "../ui/Loading";

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
  const [isLoading, setIsLoading] = useState(false);
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

  // TODO: 에러 메시지 렌더링 시 전체가 렌더링 되는 문제 해결해야 함. 인풋 컨테이너를 컴포넌트로 빼면 될 듯
  const onAddClick = (type) => {
    if (!inputRef.current.value.length) {
      setErrMsg("내용을 입력해주세요.");
      return;
    }
    const newData = {
      content: inputRef.current.value,
      type,
      important: false,
      checked: false,
    };

    setIsLoading(true);
    addTodo(newData).then((res) => {
      dispatch(addData(res.data[0]));
      setErrMsg("");
      inputRef.current.value = "";
      setIsLoading(false);
    });
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
          {isLoading && <Loading />}
          <StyledToDoContainer>
            {[...data]
              .filter((a) => filterByPath(a, path))
              .sort((a) => (a.checked ? 1 : -1))
              .sort((a) => (a.important && !a.checked ? -1 : 1))
              .map((a) => (
                <ToDoItem key={a.id} item={a} setModalItem={setModalItem} />
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
