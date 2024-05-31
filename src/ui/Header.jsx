import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: start;
    padding: 16px;
  }
`;

const LogoContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: row-reverse;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContainer>
        <UserAvatar />
        <HeaderMenu />
      </MenuContainer>
    </StyledHeader>
  );
}

export default Header;
