import styled from "styled-components";

const Menu1Wrap = styled.div`
  padding: 200px 400px;
  display: flex;
`;

const ProImg1 = styled.div`
  width: 500px;
  height: 600px;
  background: url(https://www.hera.com/kr/ko/products/__icsFiles/afieldfile/2019/12/24/20191220_final_thesignatureedp_pdp_thumb_1.png)
    no-repeat center / cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ConWrap1 = styled.div`
  margin: 50px 40px;
`;

const Title1 = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Content1 = styled.div`
  border-bottom: 2px solid black;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 30px;
    line-height: 20px;
  }
`;

const BuyBox1 = styled.div`
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

export const Menu1 = () => {
  return (
    <Menu1Wrap>
      <ProImg1></ProImg1>
      <ConWrap1>
        <Title1>더 시그니처 오 드 퍼퓸</Title1>
        <Content1>
          <h3>THE SIGNATURE EAU DE PARFUM 30ml</h3>
          <p>
            50ml 내 자신이 시그니처가 되는 순간, <br />그 완벽한 순간의 영원한
            각인
          </p>
        </Content1>
        <BuyBox1>구매하러 가기</BuyBox1>
      </ConWrap1>
    </Menu1Wrap>
  );
};
