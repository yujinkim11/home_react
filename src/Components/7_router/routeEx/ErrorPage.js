import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ErrorWrap = styled.div`
  margin-top: 20px;
  height: 80vh;
  background-color: #ff6742;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h3 {
    font-size: 80px;
    margin: 30px;
  }
  p {
    font-size: 40px;
  }
`;

const Icon = styled.div`
  font-size: 150px;
  padding-top: 120px;
`;

const GoHome = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  p {
    font-size: 30px;
    color: white;
  }
  &:hover {
    background-color: white;
    border: none;
    p {
      color: #ff6742;
    }
  }
`;

export const ErrorPage = () => {
  return (
    <ErrorWrap>
      <Icon>
        <i class="fa-solid fa-bomb"></i>
      </Icon>
      <h3>404 Error</h3>
      <p>Sorry, page not found</p>

      <GoHome>
        <Link to="/">
          <p>Go Main</p>
        </Link>
      </GoHome>
    </ErrorWrap>
  );
};
