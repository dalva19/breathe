//style
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <h1>Breathe</h1>
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.div`
  min-height: 15vh;
  background-color: black;
  color: white;
  font-family: "Lobster", cursive;
  width: 100%;
  text-align: center;
  padding-top: 1.5rem;
`;

export default Header;
