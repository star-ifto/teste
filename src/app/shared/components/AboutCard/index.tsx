import { ReactNode } from "react";
import { StyledContainer } from "./styles";

interface IAboutCardProps {
  image: string;
  title: string;
  description: ReactNode;
}

export function AboutCard({ image, title, description }: IAboutCardProps) {
  return (
    <StyledContainer>
      <img src={image} alt="Ícone de demonstração" />

      <strong>{title}</strong>

      {description}
    </StyledContainer>
  );
}
