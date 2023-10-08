import { ContentContainer, Header, Title } from "..";
import { Configs } from "../../configs";
import { StyledMainContainer, StyledRectangleGroup } from "./styles";
import PeoplesGroupImage from "../../assets/peoples-group.png";
import RectangleGroupImage from "../../assets/rectangle-group.svg";

export function HomeSection() {
  return (
    <ContentContainer type="primary">
      <StyledRectangleGroup
        src={RectangleGroupImage}
        alt="Grupo de Retângulos"
      />

      <Header />

      <StyledMainContainer>
        <div>
          <Title content={`Semana De Gestão \ne Tecnologia`} color="white" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
            nulla etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.
          </p>

          <a href={`#${Configs.Navigation.Inscription}`}>Inscrição</a>
        </div>

        <img src={PeoplesGroupImage} alt="Grupo de Pessoas" />
      </StyledMainContainer>
    </ContentContainer>
  );
}
