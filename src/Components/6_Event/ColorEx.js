import { useState } from "react";
import styledComponents from "styled-components";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};

  h3 {
    font-size: 30px;
    color: white;
    text-align: center;
    line-height: 240px;
  }

  p {
    font-size: 25px;
    text-align: right;
    padding: 10px 10px 0 0;
  }
`;

const Button = styled.div``;

export const ColorEx = () => {
  const [Color, SetColor] = useState("gold");
  const [bool, SetBool] = useState(true);

  const handleColor = () => {
    if (bool) {
      SetColor("blue");
      SetBool(false);
    } else if (!bool) {
      SetColor("gold");
      SetBool(true);
    }
  };

  return (
    <Box bgColor={Color} color="white" onClick={handleColor}>
      <h3>클릭해보세요</h3>
    </Box>
  );
};
