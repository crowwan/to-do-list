import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsFillSunFill } from "react-icons/bs";
import { clearUser } from "../features/userSlice";
import StyledContainer from "../styled/StyledContainer";
import NavButton from "../components/NavButton";
import { logout } from "../api/auth";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 3rem;
  gap: 1.2rem;
  color: #fff;
  & > div:nth-child(2) {
    flex: 1 0 0;
  }
`;

const StyledHeaderContainer = styled(StyledContainer)`
  background-color: ${props => props.theme.headerColor};
`;

const StyledLogoutBtn = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
`;
function Header({ onNavBtnClick, setTheme }) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    (() => {
      logout().then(res => {
        dispatch(clearUser(false));
      });
    })();
  };
  const onThemeClick = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
  console.log(user);
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <NavButton onNavBtnClick={onNavBtnClick} />
        <div>To Do</div>
        <span>{user}님</span>
        <BsFillSunFill onClick={onThemeClick} />
        <StyledLogoutBtn onClick={onLogoutClick}>Log Out</StyledLogoutBtn>
      </StyledHeader>
    </StyledHeaderContainer>
  );
}

export default Header;
