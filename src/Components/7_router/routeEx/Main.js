import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div``;

const Banner = styled.div`
  margin-top: 20px;
  height: 60vh;
  background-image: url(https://www.hera.com/kr/ko/layout/main/upper-slide/__icsFiles/afieldfile/2022/05/27/20220523_final_SENSUAL-FITTING-GLOW-TINT_pc_01.jpg);
  display: flex;
  align-items: center;
`;

const BannerCon = styled.div`
  margin-left: 200px;
  h2 {
    font-size: 35px;
    font-weight: 900;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0;
  }
`;

const MoreBox = styled.div`
  width: 120px;
  height: 40px;
  background-color: black;
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

const ConWrap = styled.div`
  padding: 50px 400px;
  display: flex;
  justify-content: space-between;
`;
const move = keyframes`
    0%{
        margin: 0;
    }
    100%{
        margin-top: -20px;
        margin-left: -20px;
    }
`;

const move2 = keyframes`
    0%{
        margin: 0;
    }
    100%{
        margin-top: -20px;
        margin-right: -20px;
    }
`;

const Con1 = styled.div`
  width: 550px;
  height: 600px;
  background-image: url(https://www.hera.com/kr/ko/products/__icsFiles/afieldfile/2019/12/24/20191220_final_thesignatureedp_pdp_thumb_1.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    animation: ${move} 0.5s infinite alternate;
  }
`;

const Con2 = styled.div`
  width: 500px;
  height: 600px;
  background-image: url(https://www.hera.com/kr/ko/products/__icsFiles/afieldfile/2019/12/24/20191220_final_exceptionaledp_pdp_thumb_1.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    animation: ${move2} 0.5s infinite alternate;
  }
`;

const Con2Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  h3 {
    font-size: 40px;
    font-weight: 900;
  }
  p {
    font-size: 18px;
    font-weight: 700;
  }
`;

const SilkyImg = styled.div`
  width: 100%;
  height: 500px;
  margin: 50px 0 20px 0;
  background-color: #c9c9c9;
  background-image: url(https://www.hera.com/kr/ko/layout/main/campaign/__icsFiles/afieldfile/2022/05/27/20220531_final_main_campaign_img_pc.jpg);
  background-repeat: no-repeat;
  background-position: center;
`;

export const Main = () => {
  return (
    <Wrap>
      <Banner>
        <BannerCon>
          <h2>GLOW, EVERYWHERE! </h2>
          <p>NEW 센슈얼 피팅 글로우 틴트</p>
          <MoreBox>자세히 보기</MoreBox>
        </BannerCon>
      </Banner>
      <ConWrap>
        <Link to="/menu1">
          <Con1></Con1>
        </Link>
        <Link to="/menu2">
          <Con2></Con2>
        </Link>
      </ConWrap>

      <Con2Wrap>
        <h3>SILKY STAY FOUNDATION </h3>
        <SilkyImg></SilkyImg>
        <p>시간이 흘러도 하루 종일 아름다운 피부결 </p>
      </Con2Wrap>
    </Wrap>
  );
};
