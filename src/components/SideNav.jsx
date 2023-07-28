import styled from "styled-components";
import Menu from "./Menu";

const NavContain = styled.div`
  /* padding-top: 20px; */
  width: 256px;
  height: 100vh;
  border-right: 1px solid var(--primary);
`;

// 좌측 sideNav menu 컴포넌트
function SideNav({ formattedInfoData }) {
  return (
    <NavContain>
      {/* id 1, 2값 전달 */}
      <Menu
        formattedInfoData1={formattedInfoData[1]}
        formattedInfoData2={formattedInfoData[2]}
      />
      {/* id 3, 4값 전달 */}
      <Menu
        formattedInfoData1={formattedInfoData[3]}
        formattedInfoData2={formattedInfoData[4]}
      />
    </NavContain>
  );
}

export default SideNav;
