import { StyledContainer } from "./styles";

export type TContentContainerType = "primary" | "secondary" | "tertiary";

interface IContentContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  type: TContentContainerType;
}

export function ContentContainer({
  type,
  children,
  ...rest
}: IContentContainerProps) {
  return (
    <StyledContainer type={type} {...rest}>
      {children}
    </StyledContainer>
  );
}
