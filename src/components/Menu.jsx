import React, { useState } from "react";
import styled from "styled-components";
import DropArrow from "../icons/DropArrow";
import UpArrow from "../icons/UpArrow";
import MenuItem from "./MenuItem";
const MenuItems = styled.div`
  margin-top: 20px;
  .menu-title {
    padding: 9px 25px 9px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu {
      display: inline-block;
    }
  }
  .menu-title:hover {
    background-color: var(--secondary);
  }
  .item {
    padding: 9px 25px 9px 40px;
  }
  .item:hover {
    background-color: var(--secondary);
  }
`;

// Menu를 컴포넌트화 시킴
function Menu() {
  // useState를 이용해서 메뉴토글 상태관리
  const [isFold, setIsfold] = useState(false);

  const handleFold = () => {
    setIsfold(!isFold);
  };

  return (
    <MenuItems>
      <div className="menu-title">
        <p className="menu">대메뉴</p>
        <button className="btn" onClick={handleFold}>
          {isFold ? (
            <UpArrow className="icon" />
          ) : (
            <DropArrow className="icon" />
          )}
        </button>
      </div>
      <div className="items" style={{ display: isFold ? "none" : "block" }}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </MenuItems>
  );
}

export default Menu;
