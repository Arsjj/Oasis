import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    grid-row: 2/ 3;
    padding: 24px 0;
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MainNav />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
