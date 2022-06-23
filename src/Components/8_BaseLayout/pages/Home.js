import styled from "styled-components";
import { Link } from "react-router-dom";

const Banner = styled.section`
  height: 800px;
  background-color: lightgray;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 400px;
`;

const Content = styled.div`
  width: 45%;
  height: 500px;
  background-color: lightblue;
  box-shadow: 25px 25px 20px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    transform: translate(25px, 25px);
    box-shadow: none;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  &:nth-child(2) {
    background-color: lightcoral;
  }
`;

export const Home = () => {
  return (
    <div>
      <Banner> </Banner>

      <Section>
        <Content>
          <Link to="/sub1"></Link>
        </Content>
        <Content>
          <Link to="/sub2"></Link>
        </Content>
      </Section>
    </div>
  );
};
