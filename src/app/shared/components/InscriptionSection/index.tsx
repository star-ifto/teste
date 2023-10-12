import QRCode from "react-qr-code";
import { GiantParagraph, Title } from "..";
import { StyledContainer, StyledQrCodeContainer } from "./styles";
import { Copy, Check } from "phosphor-react";
import { useCallback, useState } from "react";

interface IInscriptionSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const INSCRIPTION_LINK = "http://192.168.7.5:5173/";

export function InscriptionSection({ ...rest }: IInscriptionSectionProps) {
  const [isQrCodeLinkCopied, setIsQrCodeLinkCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyQrCodeLinkToClipboard() {
    if ("clipboard" in navigator)
      return await navigator.clipboard.writeText(INSCRIPTION_LINK);

    return document.execCommand("copy", true, INSCRIPTION_LINK);
  }

  const handleCopyQrCodeLink = useCallback(async () => {
    try {
      await copyQrCodeLinkToClipboard();

      setIsQrCodeLinkCopied(true);

      window.setTimeout(() => setIsQrCodeLinkCopied(false), 1500);
    } catch {}
  }, []);

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

        <button onClick={handleCopyQrCodeLink}>
          {isQrCodeLinkCopied ? (
            <>
              COPIADO! <Check size={22} weight="bold" />
            </>
          ) : (
            <>
              COPIAR LINK <Copy size={22} weight="bold" />
            </>
          )}
        </button>
      </StyledQrCodeContainer>
    </StyledContainer>
  );
}
