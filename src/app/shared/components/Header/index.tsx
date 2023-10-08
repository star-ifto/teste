import GETECLogoImage from "../../assets/getec-logo.svg";
import { Configs } from "../../configs";
import { StyledContainer } from "./styles";

export function Header() {
  return (
    <StyledContainer>
      <img src={GETECLogoImage} alt="GETEC" />

      <nav>
        <a href={`#${Configs.Navigation.About}`}>Sobre</a>

        <a href={`#${Configs.Navigation.Inscription}`}>Inscrição</a>

        <a href={`#${Configs.Navigation.Timeline}`}>Cronograma</a>

        <a href={`#${Configs.Navigation.Sponsors}`}>Patrocinadores</a>
      </nav>
    </StyledContainer>
  );
}
