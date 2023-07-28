import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DropArrow from "../icons/DropArrow";
import DropArrowInactive from "../icons/DropArrowInactive";
import UpArrow from "../icons/UpArrow";
import UpArrowInactive from "../icons/UpArrowInactive";
import MenuItem from "./MenuItem";
import { Link, NavLink } from "react-router-dom";
const MenuItems = styled.div`
  margin-top: 20px;

  .menu-title {
    padding: 9px 25px 9px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu {
      display: inline-block;
      color: #565656;
    }
  }
  .menu-title:hover {
    background-color: var(--secondary);
  }
  .item {
    padding: 9px 25px 9px 40px;
    color: #777777;
  }
  .item:hover {
    background-color: var(--secondary);
  }
`;

// Menu를 컴포넌트화 시킴
function Menu({ formattedInfoData1, formattedInfoData2 }) {
  // useState를 이용해서 메뉴토글 상태관리
  const [isFold, setIsfold] = useState(false);

  const handleFold = () => {
    setIsfold(!isFold);
  };
  useEffect(() => {
    console.log(formattedInfoData1);
    console.log(formattedInfoData2);
  }, [formattedInfoData1, formattedInfoData2]);

  return (
    <MenuItems
      isActive={formattedInfoData1.isActive || formattedInfoData2.isActive}
    >
      <div className="menu-title">
        <p className="menu">대메뉴</p>
        <button className="btn" onClick={handleFold}>
          {isFold ? (
            <DropArrowInactive className="icon" />
          ) : (
            <UpArrowInactive className="icon" />
          )}
        </button>
      </div>
      <div className="items" style={{ display: isFold ? "none" : "block" }}>
        {formattedInfoData1 && formattedInfoData2 && (
          <>
            <NavLink
              to={`/${formattedInfoData1.id}`}
              id={formattedInfoData1.id}
            >
              <MenuItem />
            </NavLink>
            <NavLink
              to={`/${formattedInfoData2.id}`}
              id={formattedInfoData2.id}
            >
              <MenuItem />
            </NavLink>
          </>
        )}
      </div>
    </MenuItems>
  );
}

export default Menu;
