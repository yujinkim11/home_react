import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConWrap = styled.div`
  height: 100vh;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerWrap = styled.div`
  width: 375px;
  height: 667px;
  border-radius: 20px;
  background-color: #1d1d1d;
`;

const CircleWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: white; */
`;

const Circle1 = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 18px;
    font-weight: 900;
    color: #1d1d1d;
  }
`;

const Circle2 = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 30px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    color: white;
    font-size: 15px;
  }
`;

const Thumbnail = styled.div`
  width: 270px;
  height: 270px;
  background: url("https://cdnimg.melon.co.kr/cm2/album/images/109/84/826/10984826_20220616103919_500.jpg?c6d54b5c04c39944a13da05076dde8de/melon/resize/282/quality/80/optimize")
    no-repeat center / cover;
  border-radius: 20px;
  margin: 0 auto;
`;

const SongWrap = styled.div`
  display: block;
  margin-top: 20px;
`;

const Title = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
`;
const Singer = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 100;
  text-align: center;
`;

const BarWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Playbar = styled.div`
  width: 315px;
  height: 8px;
  border-radius: 5px;
  background-color: #73777b;
`;

const Purplebar = styled.div`
  width: 35px;
  height: 8px;
  border-radius: 5px;
  background-color: #9ba3eb;
`;

const Timewrap = styled.div`
  width: 315px;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const Starttime = styled.p`
  font-size: 12px;
  color: white;
`;

const Endtime = styled.p`
  font-size: 12px;
  color: white;
`;

const IconsWrap = styled.div`
  width: 315px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px auto 0 auto;
  i {
    color: white;
    font-size: 15px;
    &:nth-child(3) {
      color: #9ba3eb;
      font-size: 40px;
    }
  }
`;

const NowWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Nowplay = styled.div`
  width: 315px;
  height: 60px;
  border-radius: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NowCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: url(https://cdnimg.melon.co.kr/cm2/mv/images/wide/502/50/492/50250492_20220615115923_640.jpg/melon/resize/167/quality/80/optimize)
    no-repeat center / cover;
  margin-left: 10px;
`;

const Nowtitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-right: 160px;
  color: #7f8487;
`;

const Nextsong = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid lightgray;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 18px;
    color: #1d1d1d;
  }
`;

export const IconEx = () => {
  return (
    <ConWrap>
      <PlayerWrap>
        <CircleWrap>
          <Circle1>
            <i class="fa-solid fa-chevron-down"></i>
          </Circle1>
          <Circle2>
            <i class="fa-solid fa-bars"></i>
          </Circle2>
        </CircleWrap>
        <Thumbnail></Thumbnail>
        <SongWrap>
          <Title>Summer In Love (Feat. Colde)</Title>
          <Singer>SAAY</Singer>
        </SongWrap>
        <BarWrap>
          <Playbar>
            <Purplebar></Purplebar>
            <Timewrap>
              <Starttime>00:13</Starttime>
              <Endtime>03:27</Endtime>
            </Timewrap>
          </Playbar>
        </BarWrap>
        <IconsWrap>
          <i class="fa-solid fa-shuffle"></i>
          <i class="fa-solid fa-backward"></i>
          <i class="fa-solid fa-circle-pause"></i>
          <i class="fa-solid fa-forward"></i>
          <i class="fa-solid fa-repeat"></i>
        </IconsWrap>
        <NowWrap>
          <Nowplay>
            <NowCircle></NowCircle>
            <Nowtitle>SAAY</Nowtitle>
            <Nextsong>
              <i class="fa-solid fa-forward-step"></i>
            </Nextsong>
          </Nowplay>
        </NowWrap>
      </PlayerWrap>
    </ConWrap>
  );
};
