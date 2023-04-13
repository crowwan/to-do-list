import { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import StyledContainer from "../styled/StyledContainer";
import UtilButtonContainer from "../components/UtilButtonContainer";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledInput from "../styled/StyledInput";
import ToDoItemModal from "../ui/ToDoItemModal";
import StyledInputContainer from "../styled/StyledInputContainer";
import StyledErrorMsg from "../styled/StyledErrorMsg";
import { addData } from "../features/dataSlice";
import { addTodo } from "../api/todos";
import Loading from "../ui/Loading";
import ToDoContainer from "../components/ToDoContainer";
import { filterByPath } from "../util/filterByPath";

const StyledMain = styled.main`
  color: #fff;
  max-height: calc(100vh - 3rem);
  padding: 2rem 0;
  overflow: hidden;
`;

const StyledToDoWrapper = styled.div`
  overflow: scroll;
  height: calc(100vh - 360px);
`;
// TODO: 윈도우 디스플레이에서 스크롤 바 없애기
function Main({ title, path }) {
  const [isLoading, setIsLoading] = useState(false);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [modalItem, setModalItem] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const inputRef = useRef();

  const onAddClick = type => {
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
    addTodo(newData).then(res => {
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
            <StyledInput placeholder="오늘 할 일을 여기에 입력하세요." ref={inputRef} />

            <UtilButtonContainer btns={[{ onClickHandler: onAddClick, text: "추가하기" }]} name="today" />
            {errMsg && <StyledErrorMsg>{errMsg}</StyledErrorMsg>}
          </StyledInputContainer>
          {isLoading && <Loading />}
          <StyledToDoWrapper>
            <ToDoContainer
              data={[...data]
                .filter(a => !a.checked)
                .filter(filterByPath(path))
                .sort(a => (a.important ? -1 : 1))}
              setModalItem={setModalItem}
              type="작업"
            />
            <ToDoContainer
              data={[...data]
                .filter(a => a.checked)
                .filter(filterByPath(path))
                .sort(a => (a.important ? -1 : 1))}
              setModalItem={setModalItem}
              type="완료됨"
            />
          </StyledToDoWrapper>
        </StyledMain>
      </StyledContainer>

      {modalItem && <ToDoItemModal item={modalItem} setModalItem={setModalItem} />}
    </>
  );
}

export default Main;
