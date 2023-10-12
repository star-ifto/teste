import styled from "styled-components";
import { ContentContainer } from "..";

export const StyledContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3% 15%;
`;

export const StyledQrCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0.9375em;
  gap: 0.9375em;

  button {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 0.625em;
    font-weight: bold;
    font-size: 1.3em;
    padding: 0.3125em 0;
    width: 100%;
    border: none;
    background-color: rgb(12, 162, 239);
    border-radius: 0.3em;
    color: white;

    &:hover,
    &:active {
      transition: all 0.3s;
      background-color: #006294;
    }
  }
`;
