import { Title } from "..";
import { StyledContainer } from "./styles";

interface IInscriptionSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function InscriptionSection({ ...rest }: IInscriptionSectionProps) {
  return (
    <StyledContainer type="tertiary" {...rest}>
      <Title content="Onde fazer a Inscrição?" />

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

      <div>
        <img src="" alt="" />

        <span></span>
      </div>
    </StyledContainer>
  );
}
