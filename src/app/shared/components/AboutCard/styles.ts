import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2.76726px 5.92193px 0px rgba(0, 0, 0, 0.02),
    0px 6.6501px 14.23122px 0px rgba(0, 0, 0, 0.03),
    0px 12.52155px 26.79612px 0px rgba(0, 0, 0, 0.04),
    0px 22.33631px 47.7997px 0px rgba(0, 0, 0, 0.04),
    0px 41.77761px 89.40408px 0px rgba(0, 0, 0, 0.05),
    0px 100px 214px 0px rgba(0, 0, 0, 0.07);
  border-radius: 1.25em;
  max-width: 230px;
  padding: 1.875em;
  height: 100%;

  strong,
  span {
    text-align: center;
  }

  img,
  strong {
    margin-bottom: 1em;
  }
`;
