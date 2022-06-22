import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  margin-bottom: 20px;
`;

const BtnWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 70px;
  height: 25px;
  border: 1px solid black;
  text-align: center;
  line-height: 25px;
  &:nth-child(1):hover {
    color: red;
  }
  &:nth-child(2):hover {
    color: yellow;
  }
  &:nth-child(3):hover {
    color: blue;
  }
`;

export const ChoiceColor = () => {
  const [color, setColor] = useState("lightgray");

  const handleRed = () => setColor("red");

  const handleYellow = () => setColor("yellow");

  const handleBlue = () => setColor("blue");

  return (
    <Wrap>
      <h3>버튼을 눌러 색상을 골라보세요</h3>
      <Box bgColor={color}></Box>
      <BtnWrap>
        <Button onClick={handleRed}>빨강</Button>
        <Button onClick={handleYellow}>노랑</Button>
        <Button onClick={handleBlue}>파랑</Button>
      </BtnWrap>
    </Wrap>
  );
};
