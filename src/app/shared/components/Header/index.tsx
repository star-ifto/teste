import { List, X } from "phosphor-react";
import GETECLogoImage from "../../assets/getec-logo.svg";
import { Configs } from "../../configs";
import { StyledContainer } from "./styles";
import { useState } from "react";

function HeaderLinks() {
  return (
    <>
      <a href={`#${Configs.Navigation.About}`}>Sobre</a>

      <a href={`#${Configs.Navigation.Inscription}`}>Inscrição</a>

      <a href={`#${Configs.Navigation.Timeline}`}>Cronograma</a>

      <a href={`#${Configs.Navigation.Sponsors}`}>Patrocinadores</a>
    </>
  );
}

export function Header() {
  const [isShowingNav, setIsShowingNav] = useState(false);

  return (
    <StyledContainer>
      <img src={GETECLogoImage} alt="GETEC" />

      <nav className="nav-desktop">
        <HeaderLinks />
      </nav>

      <button onClick={() => setIsShowingNav(true)}>
        <List size={32} weight="bold" />
      </button>

      {isShowingNav && (
        <nav className="nav-mobile">
          <div className="x-div">
            <button onClick={() => setIsShowingNav(false)}>
              <X size={32} weight="bold" />
            </button>
          </div>

          <div className="links-div" onClick={() => setIsShowingNav(false)}>
            <HeaderLinks />
          </div>
        </nav>
      )}
    </StyledContainer>
  );
}
