import styled from "styled-components";

const BoxBreathing = () => {
  return (
    <StyledBoxBreathing>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5cd3203f3560c37e515c8f46/1588168210999-2DZ22Q2QL1VKDZLI9XQQ/ke17ZwdGBToddI8pDm48kMR1yAHb8bPoH1-OdajP2rZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpya-Yv2-AUIrtyc_1d9d84jKAfrgH35AgL5HDK7jKFTEAbkVb2mHFRzAaMt_-j0ggg/Box+Breathing.jpg"
        alt="https://images.squarespace-cdn.com/content/v1/5b8645f7266c07b084eb29c7/1570208020992-TRZCAX5P0A53CG0LS5AO/Box+breathing.gif?format=1000w"
      ></img>
    </StyledBoxBreathing>
  );
};

const StyledBoxBreathing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  img {
    border-radius: 10%;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

export default BoxBreathing;
