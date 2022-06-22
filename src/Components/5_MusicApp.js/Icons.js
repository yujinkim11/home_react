import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTurntable } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Icon = styled.div`
  i {
    color: red;
  }
`;

export const Icons = () => {
  return (
    <Icon>
      <i class="fa-solid fa-circle-play"></i>
      {/* <FontAwesomeIcon icon={faTurntable} /> */}
    </Icon>
  );
};
