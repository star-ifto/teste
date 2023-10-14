import { ContentContainer } from "..";
import styled from "styled-components";

export const StyledContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 6%;
  width: 100%;

  h1 {
    text-align: center;
    width: 100%;
  }
`;

export const StyledSponsorsContainer = styled.div`
  margin-top: 6%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1700px) {
    gap: 2em;
  }
`;
