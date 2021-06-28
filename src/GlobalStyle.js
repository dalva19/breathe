import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
  }
    body {
      background-color: #A6E8CA; 
    }

    p {
    font-size: 1.5rem;
    color: #1b1b1b;
    font-family: "lato", sans-serif;
  }

    button {
    font-size: 1rem;
    border: none;
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #1b1b1b;
    color: white;
  }
  
`;

export default GlobalStyle;
