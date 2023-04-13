import { useState } from "react";
import styled from "styled-components";
import StyledSubmitBtn from "../styled/StyledSubmitBtn";
import StyledTypeBtn from "../styled/StyledTypeBtn";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${props => props.theme.inputColor};
  font-size: 20px;
  width: 100%;
  & *:not(div) {
    cursor: pointer;
  }
`;

const StyledTypeBtnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding-left: 0.5rem;
  margin-bottom: 2rem;
`;

function UtilButtonContainer({ btns, name }) {
  const [type, setType] = useState([
    {
      name: "Today",
      checked: name === "today",
    },
    {
      name: "Everyday",
      checked: name === "everyday",
    },
  ]);
  const onTypeBtnClick = names => {
    setType(prev => prev.map(a => (a.name === names ? { ...a, checked: true } : { ...a, checked: false })));
  };
  return (
    <StyledContainer>
      <StyledTypeBtnContainer>
        {type.map(a => (
          <StyledTypeBtn onClick={() => onTypeBtnClick(a.name)} checked={a.checked} key={a.name}>
            {a.name}
          </StyledTypeBtn>
        ))}
      </StyledTypeBtnContainer>
      {btns.map((a, i) => (
        <StyledSubmitBtn
          onClick={() => a.onClickHandler(type.find(el => el.checked).name.toLowerCase())}
          bgc={a.bgColor}
          key={i}
        >
          {a.text}
        </StyledSubmitBtn>
      ))}
    </StyledContainer>
  );
}

export default UtilButtonContainer;
