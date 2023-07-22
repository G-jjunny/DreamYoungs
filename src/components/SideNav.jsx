import styled from "styled-components";
import Menu from "./Menu";

const NavContain = styled.div`
  /* padding-top: 20px; */
  width: 256px;
  height: 100vh;
  border-right: 1px solid var(--primary);
`;

// 좌측 sideNav menu 컴포넌트
function SideNav() {
  return (
    <NavContain>
      <Menu />
      <Menu />
    </NavContain>
  );
}

export default SideNav;
