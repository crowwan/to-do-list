import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #252423;
  font-size: 20px;
  width: 100%;
  & * {
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
const StyledTypeBtn = styled.button`
  cursor: pointer;
  border: none;
  font-weight: bold;
  color: ${(props) => (props.checked ? "#4e87e9" : "#ffffff")};
  background-color: transparent;
  font-size: 16px;
`;

const StyledSubmitBtn = styled.button`
  background-color: transparent;
  padding: 0.2rem 1rem;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 2rem;
  color: #fff;
  background-color: #4e87e9;
`;

function UtilButtonContainer() {
  const [type, setType] = useState([
    {
      name: "Today",
      checked: true,
    },
    {
      name: "Everyday",
      checked: false,
    },
  ]);
  const onTypeBtnClick = (name) => {
    setType((prev) =>
      prev.map((a) =>
        a.name === name ? { ...a, checked: true } : { ...a, checked: false }
      )
    );
  };
  return (
    <StyledContainer>
      <StyledTypeBtnContainer>
        {type.map((a) => (
          <StyledTypeBtn
            onClick={() => onTypeBtnClick(a.name)}
            checked={a.checked}
            key={a.name}
          >
            {a.name}
          </StyledTypeBtn>
        ))}
      </StyledTypeBtnContainer>
      <StyledSubmitBtn>추가</StyledSubmitBtn>
    </StyledContainer>
  );
}

export default UtilButtonContainer;
