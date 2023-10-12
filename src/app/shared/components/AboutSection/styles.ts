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
`;

export const StyledCardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 240px;
`;
