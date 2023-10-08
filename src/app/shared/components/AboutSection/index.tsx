import { Title, AboutCard } from "..";
import CalendarImage from "../../assets/calendar.png";
import MoneyImage from "../../assets/money.png";
import CertificateImage from "../../assets/certificate.png";
import { StyledCardsContainer, StyledContainer } from "./styles";

interface IAboutSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function AboutSection({ ...rest }: IAboutSectionProps) {
  return (
    <StyledContainer type="secondary" {...rest}>
      <Title content="Sobre o Evento" />

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <StyledCardsContainer>
        <AboutCard
          image={CalendarImage}
          title="3 dias de Evento"
          description={
            <>
              <span>Dia 22 a dia 24 de Novembro</span>
              <br />
              <span>Faça sua reserva</span>
            </>
          }
        />

        <AboutCard
          image={MoneyImage}
          title="GRATUITO"
          description={
            <>
              <span>Participação gratuita no evento!</span>
            </>
          }
        />

        <AboutCard
          image={CertificateImage}
          title={`Certificado de\n participação`}
          description={
            <>
              <span>Certificado gratuito</span>
              <br />
              <span>Necessário inscrição</span>
            </>
          }
        />
      </StyledCardsContainer>
    </StyledContainer>
  );
}
