import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  background-color: lightgray;
  display: flex;
  justify-content: center;
`;

const Phone = styled.div`
  width: 375px;
  height: 667px;
  background-color: white;
  border: 1px solid black;
  border-radius: 25px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 900;
`;

const Propile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PropileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDZfMTM1%2FMDAxNjQ5MTcxMjQ4NTE3.BTLgoi8gyaLb1sqnnbvPFqb9G7EYpyQmpE88E17sVq8g.O1xNtPqEmsWH4nXDoR_u1Z09x7Lg3mrCp3JTM97mGDcg.JPEG.unitycode%2FP2010069.JPG&type=sc960_832);
  background-size: cover;
  background-position-x: -10px;
`;

const FollowWrap = styled.div`
  width: 70%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  p {
    margin-top: -15px;
  }
`;

const Feed = styled.div``;

const Follower = styled.div``;

const Follwing = styled.div``;

const ConWrap = styled.div`
  color: black;
  h3 {
    font-size: 15px;
  }
  p {
    font-size: 15px;
    font-weight: 100;
  }
  h6 {
    font-size: 15px;
    color: #7d7d7d;
    font-weight: 100;
    margin: -10px auto;
  }
`;

const BoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  line-height: 30px;
`;

const Follow = styled.div`
  width: 28%;
  height: 30px;
  background-color: blue;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const Message = styled.div`
  width: 28%;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Email = styled.div`
  width: 28%;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Icon = styled.div`
  width: 7%;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  font-size: 20px;
`;

const Iconbox = styled.div`
  width: 50%;
  text-align: center;
`;

const PosterImg = styled.div`
  width: 100%;
  height: 49.2%;
  background-image: url(http://roomsa.co.kr/upload_file/thema/%EC%9B%B9-%ED%8F%AC%EC%8A%A4%ED%84%B0-%EB%B3%80%ED%99%98%EC%9A%A9_%EC%97%90%EC%9D%B4%EB%A7%88%ED%8A%B8.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -92px;
`;

export const Instagram = () => {
  const [follow, setFollow] = useState(1115);

  const handleFollow = () => setFollow(follow + 1);
  console.log(typeof follow);

  return (
    <>
      <Wrap>
        <Phone>
          <Header>
            <i class="fa-solid fa-chevron-left"></i>
            roomsads
            <i class="fa-solid fa-ellipsis"></i>
          </Header>

          <Propile>
            <PropileImg></PropileImg>
            <FollowWrap>
              <Feed>
                <h4>36</h4>
                <p>게시물</p>
              </Feed>
              <Follower>
                <h4>{follow}</h4>
                <p>팔로워</p>
              </Follower>
              <Follwing>
                <h4>1</h4>
                <p>팔로잉</p>
              </Follwing>
            </FollowWrap>
          </Propile>

          <ConWrap>
            <h5>룸즈에이동성로점</h5>
            <h6>스포츠 및 레크리에이션</h6>
            <p>
              안녕하세요! 룸즈에이 대구 동성로점입니다. DM은 답이 늦을 수 있느니
              테마 예약은 링크, 문의는 전화로 부탁드립니다!
            </p>
          </ConWrap>

          <BoxWrap>
            <Follow onClick={handleFollow}>팔로우</Follow>
            <Message>메시지</Message>
            <Email>이메일</Email>
            <Icon>
              <i class="fa-solid fa-user"></i>
            </Icon>
          </BoxWrap>

          <IconWrap>
            <Iconbox>
              <i class="fa-solid fa-table-cells"></i>
            </Iconbox>

            <Iconbox>
              <i class="fa-solid fa-id-card-clip"></i>
            </Iconbox>
          </IconWrap>

          <PosterImg></PosterImg>
        </Phone>
      </Wrap>
    </>
  );
};
