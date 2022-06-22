import styled from "styled-components";

const Menu2Wrap = styled.div`
  padding: 200px 400px;
  display: flex;
`;

const ProImg2 = styled.div`
  width: 500px;
  height: 600px;
  background: url(https://www.hera.com/kr/ko/products/__icsFiles/afieldfile/2019/12/24/20191220_final_exceptionaledp_pdp_thumb_1.png)
    no-repeat center / cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ConWrap2 = styled.div`
  margin: 50px 40px;
`;

const Title2 = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;
`;
const Content2 = styled.div`
  border-bottom: 2px solid black;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;
const BuyBox2 = styled.div`
  width: 280px;
  height: 54px;
  background-color: black;
  color: white;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const Menu2 = () => {
  return (
    <Menu2Wrap>
      <ProImg2></ProImg2>
      <ConWrap2>
        <Title2>익셉셔널 오 드 퍼퓸</Title2>
        <Content2>
          <h3>
            EXCEPTIONAL EAU DE PARFUM
            <br />
            30ml / 50ml
          </h3>
          <p>
            아시아 여성의 특별한 아름다움, 그 특별한 순간의 이야기를 담은 향
          </p>
        </Content2>
        <BuyBox2>구매하러 가기</BuyBox2>
      </ConWrap2>
    </Menu2Wrap>
  );
};
