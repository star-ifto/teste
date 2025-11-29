import { StyledContainer } from "./styles";

interface ITimelineSimpleContentProps {
  title: string;
  content: string;
  address?: string;
}

export function TimelineSimpleContent({
  title,
  content,
  address,  
}: ITimelineSimpleContentProps) {
  return (
    <StyledContainer>
      <h2>{title}</h2>
      <p>{content}</p>
      {address && <p style={{ color: "gray" }}>Local: {address}</p>}
    </StyledContainer>
  );
}
