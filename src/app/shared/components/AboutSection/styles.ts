import styled from "styled-components";
import { ContentContainer } from "..";

export const StyledContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 6% 15%;

  h1 {
    text-align: center;
    width: 100%;
  }

  p {
    line-height: 150%;
    text-align: center;
    font-size: 1.5625em;
    font-family: "Montserrat", sans-serif;
  }
`;

export const StyledCardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 240px;
`;
