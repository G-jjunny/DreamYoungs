import styled from "styled-components";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NavContain = styled.div`
  /* padding-top: 20px; */
  width: 256px;
  height: 100vh;
  border-right: 1px solid var(--primary);
`;

// 좌측 sideNav menu 컴포넌트
function SideNav({ formattedInfoData }) {
  const [nowRoute, setNowRoute] = useState();
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname.replace("/", ""));
    setNowRoute(location.pathname.replace("/", ""));
    // console.log(nowRoute);
  }, [location, nowRoute]);
  return (
    <NavContain>
      {/* id 1, 2값 전달 */}
      <Menu
        isActive={nowRoute === "1" || nowRoute === "2" ? "active" : ""}
        formattedInfoData1={formattedInfoData[1]}
        formattedInfoData2={formattedInfoData[2]}
      />
      {/* id 3, 4값 전달 */}
      <Menu
        isActive={nowRoute === "3" || nowRoute === "4" ? "active" : ""}
        formattedInfoData1={formattedInfoData[3]}
        formattedInfoData2={formattedInfoData[4]}
      />
    </NavContain>
  );
}

export default SideNav;
