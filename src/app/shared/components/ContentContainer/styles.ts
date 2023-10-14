import styled, { css } from "styled-components";
import { TContentContainerType } from ".";

interface IStyledContainerProps {
  type: TContentContainerType;
}

export const StyledContainer = styled.section<IStyledContainerProps>`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ type }) =>
    type === "primary"
      ? css`
          background-color: #0ca2ef;
          color: #ffffff;
        `
      : type === "secondary"
      ? css`
          background-color: #ffffff;
          color: #000000;
        `
      : css`
          background-color: #f3f3f3;
          color: #000000;
        `}

  &.home {
    padding: 0 !important;
  }

  @media screen and (max-width: 1210px) {
    padding: 4% 6%;
    justify-content: space-around;
  }

  @media screen and (max-width: 900px) {
    gap: 2em;
    padding: 12% 6%;

    p {
      margin-bottom: 1em;
    }
  }
`;
