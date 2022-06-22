import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 250px 0 250px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-right: 500px;
  color: #1d1d1d;
`;

const MenuIcon = styled.div`
  cursor: pointer;
`;

const HiddenMenu = styled.div`
  display: ${(props) => props.hidden};
`;

const MenuWrap = styled.div`
  width: 20%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`;

const BtnMenu = styled.div`
  font-size: 24px;
  color: white;
  margin: 30px 30px;
`;

export const Navi = () => {
  const [hidden, setHidden] = useState("none");
  console.log(hidden);

  const handleMenu = () => setHidden("display");

  return (
    <>
      <Wrap>
        <Link to="/">
          <Logo>HERA</Logo>
        </Link>
        <MenuIcon onClick={handleMenu}>
          <i class="fa-solid fa-bars"></i>
        </MenuIcon>
      </Wrap>

      <HiddenMenu>
        <MenuWrap>
          <BtnMenu>메뉴1</BtnMenu>
          <BtnMenu>메뉴2</BtnMenu>
        </MenuWrap>
      </HiddenMenu>
    </>
  );
};
