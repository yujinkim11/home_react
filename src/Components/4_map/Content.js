import styledComponents from "styled-components";
import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyled";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${mainStyle.color};
  border: 1px solid ${(props) => props.bgColor};
  /* => 프롭스 받아올 때 사용방법 */
  font-size: ${mainStyle.fontSize};
`;

export const Content = () => {
  return (
    <div>
      <Box bgColor={mainStyle.color}>Styled Component 글씨크기</Box>
      {/* => 스타일 컴포넌트 사용할 때 프롭스 전달 */}
    </div>
  );
};
