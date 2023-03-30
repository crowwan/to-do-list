import styled from "styled-components";
import Loader from "./Loader";

const StyledLoading = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <StyledLoading>
      <Loader />
    </StyledLoading>
  );
}
