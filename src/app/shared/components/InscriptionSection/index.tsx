import QRCode from "react-qr-code";
import { GiantParagraph, Title } from "..";
import { StyledContainer, StyledQrCodeContainer } from "./styles";
import { ArrowSquareOut } from "phosphor-react";

interface IInscriptionSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const INSCRIPTION_LINK = "http://192.168.7.5:5173/";

export function InscriptionSection({ ...rest }: IInscriptionSectionProps) {
  function handleAccessLink() {
    window.open(INSCRIPTION_LINK, "_blank");
  }

  return (
    <StyledContainer type="tertiary" {...rest}>
      <Title content="Onde fazer a Inscrição?" />

      <GiantParagraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
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
            level="Q"
          />
        </div>

        <button onClick={handleAccessLink}>
          ACESSAR LINK <ArrowSquareOut size={22} weight="bold" />
        </button>
      </StyledQrCodeContainer>
    </StyledContainer>
  );
}
