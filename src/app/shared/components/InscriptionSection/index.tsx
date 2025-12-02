import QRCode from "react-qr-code";
import { GiantParagraph, Title } from "..";
import { StyledContainer, StyledQrCodeContainer } from "./styles";
import { ArrowSquareOut } from "phosphor-react";
import { WhatsappLogo } from "phosphor-react";

interface IInscriptionSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const INSCRIPTION_LINK = "https://suap.ifto.edu.br/eventos/inscricao/1/1335/";

export function InscriptionSection({ ...rest }: IInscriptionSectionProps) {
   function handleAccessLink() {
    window.open(INSCRIPTION_LINK, "_blank");
}

  return (
    <StyledContainer type="tertiary" {...rest}>
      <Title content="Onde fazer a Inscrição?" />

      <GiantParagraph>
        A inscrição do evento será realizada no site oficial de eventos do IFTO até o dia <strong>05/12</strong>.
        Para acessar o link da inscrição, basta escanear o QR Code abaixo ou clicar no botão "ACESSAR LINK". É muito importante que seja realizada a inscrição para os eventos de seu desejo, pois apenas inscritos terão seus certificados gerados.
      </GiantParagraph>

      <StyledQrCodeContainer>
        <div>
          <QRCode
            size={300}
            style={{
              height: "auto",
              maxWidth: "100%",
              width: "100%",
            }}
            value={INSCRIPTION_LINK}
            viewBox={`0 0 256 256`}
            level="L"
          />
        </div>

        <button onClick={handleAccessLink}>
          ACESSAR LINK <ArrowSquareOut size={22} weight="bold" />
          {/* ENTRAR NO GRUPO{" "}
          <WhatsappLogo size={22} weight="duotone" color="#4BCA59" /> */}
        </button>


      </StyledQrCodeContainer>
    </StyledContainer>
  );
}
