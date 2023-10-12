import { ReactNode } from "react";
import { StyledContainer } from "./styles";

interface IGiantParagraphProps {
  children: ReactNode;
}

export function GiantParagraph({ children }: IGiantParagraphProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
