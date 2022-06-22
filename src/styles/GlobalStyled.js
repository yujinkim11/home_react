import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
   margin: 0;
   padding: 0;
}
`;

// export const bodyStyle = {
//   backgroundColor: "#1A1A1B",
//   margin: "0",
//   padding: "0",
// };
