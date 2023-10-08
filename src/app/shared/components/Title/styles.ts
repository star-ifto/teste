import styled from "styled-components";

interface IStyledContainerProps {
  color: "white" | "black";
}

export const StyledContainer = styled.h1<IStyledContainerProps>`
  font-size: 3.875em;
  line-height: 120%;
  width: 15ch;
  color: ${({ color }) => (color === "white" ? "#ffffff" : "#3a3a3a")};
`;
