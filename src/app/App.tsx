import { HomeSection } from "./shared/components";
import { AboutSection } from "./shared/components/AboutSection";
import { Configs } from "./shared/configs";
import { GlobalStyle } from "./shared/global/styles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <HomeSection />

        <AboutSection id={Configs.Navigation.About} />
      </main>
    </>
  );
}
