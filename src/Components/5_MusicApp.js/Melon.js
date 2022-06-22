import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bg = styled.div`
  height: 100vh;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Allwrap = styled.div`
  width: 357px;
  height: 667px;
  background-color: #1d1d1d;
  border-radius: 10px;
`;

const Titlewrap = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;
  margin: 20px 25px 10px 0;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Arrowicon = styled.div`
  font-size: 15px;
  margin-left: 30px;
`;

const Singerwrap = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;
  margin-bottom: 10px;
  margin-right: 30px;
`;

const Singer = styled.div`
  font-size: 15px;
  margin-right: 100px;
`;

const Singicon = styled.div`
  margin-bottom: 20px;
`;

const Imgwrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Thumnail = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background: url(https://cdnimg.melon.co.kr/cm2/album/images/109/32/098/10932098_20220426110407_500.jpg?effdf21776e90b99cc1ff0bff53b7e24/melon/resize/282/quality/80/optimize)
    no-repeat center / cover;
  margin-bottom: 10px;
`;

const Iconall = styled.div`
  display: flex;
  justify-content: center;
`;

const Iconwrap = styled.div`
  width: 270px;
  height: 40px;
  /* background-color: antiquewhite; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Like = styled.div`
  color: #00d344;
  font-size: 20px;
  margin-right: -75px;
`;

const Likenum = styled.div`
  color: #00d344;
  font-size: 14px;
  font-weight: 900;
`;

const Square = styled.div`
  width: 70px;
  height: 26px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 26px;
  margin-right: -75px;
`;

const Insta = styled.div`
  font-size: 25px;
  color: white;
`;

const Lyricswrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;
  font-size: 14px;
  font-weight: 500;
`;

const Lyrics_1 = styled.div`
  width: 170px;

  color: #00d344;
  text-align: center;
  margin-bottom: 5px;
`;

const Lyrics_2 = styled.div`
  width: 200px;

  color: white;
  text-align: center;
`;

const Barwrap = styled.div`
  width: 300px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Repeat = styled.div`
  color: white;
  font-size: 20px;
  opacity: 0.7;
`;
const Playbar = styled.div`
  width: 240px;
  height: 5px;
  background-color: #73777b;
`;

const Nowbar = styled.div`
  width: 26px;
  height: 5px;
  background-color: #00d344;
`;

const Timewrap = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
`;

const Starttime = styled.p`
  font-size: 12px;
  color: #00d344;
`;

const Endtime = styled.p`
  font-size: 12px;
  color: white;
`;

const Shupple = styled.div`
  color: white;
  font-size: 20px;

  opacity: 0.7;
`;

const Playicon = styled.div`
  width: 300px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    color: white;
    font-size: 30px;
    &:nth-child(3) {
      font-size: 40px;
    }
  }
`;

export const Melon = () => {
  return (
    <Bg>
      <Allwrap>
        <Titlewrap>
          <Title>Burning Up (Feat. R3HAB)</Title>
          <Arrowicon>
            <i class="fa-solid fa-chevron-down"></i>
          </Arrowicon>
        </Titlewrap>
        <Singerwrap>
          <Singer>몬스타엑스</Singer>
          <Singicon>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </Singicon>
        </Singerwrap>

        <Imgwrap>
          <Thumnail></Thumnail>
        </Imgwrap>

        <Iconall>
          <Iconwrap>
            <Like>
              <i class="fa-solid fa-heart"></i>
            </Like>
            <Likenum>94,115</Likenum>
            <Square>유사곡</Square>
            <Insta>
              <i class="fa-brands fa-instagram"></i>
            </Insta>
          </Iconwrap>
        </Iconall>

        <Lyricswrap>
          <Lyrics_1>그을려버린 내 긴 밤 속에</Lyrics_1>
          <Lyrics_2>너를 그리고 싶어 for our</Lyrics_2>
        </Lyricswrap>

        <Barwrap>
          <Repeat>
            <i class="fa-solid fa-repeat"></i>
          </Repeat>

          <Playbar>
            <Nowbar></Nowbar>
            <Timewrap>
              <Starttime>00:13</Starttime>
              <Endtime>03:27</Endtime>
            </Timewrap>
          </Playbar>

          <Shupple>
            <i class="fa-solid fa-shuffle"></i>
          </Shupple>
        </Barwrap>

        <Playicon>
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-backward-step"></i>
          <i class="fa-solid fa-play"></i>
          <i class="fa-solid fa-forward-step"></i>
          <i class="fa-solid fa-volume-low"></i>
        </Playicon>
      </Allwrap>
    </Bg>
  );
};
