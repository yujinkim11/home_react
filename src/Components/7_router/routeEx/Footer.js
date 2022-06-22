import styled from "styled-components";

const FootWrap = styled.div`
  height: 150px;
  background-color: #1d1d1d;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h5 {
    font-size: 12px;
  }
  p {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

export const Footer = () => {
  return (
    <FootWrap>
      <h5>
        서비스이용약관 UGC이용약관 개인정보처리방침 영상정보처리방침 뷰티포인트
        사이트맵 한국
      </h5>
      <br />
      <p>
        고객상담팀(수신자요금부담) 080-023-5454 (상담시간 월~금 : AM 09:00 ~ PM
        06:00) <br />
      </p>
      <p>© AMOREPACIFIC CORPORATION. All rights reserved.</p>
    </FootWrap>
  );
};
