import { useMemo, useState } from "react";
import {
  StyledContainer,
  StyledContentContainer,
  StyledImageContainer,
  StyledSpeakerInfo,
} from "./styles";
import DefaultMaleAvatar from "../../assets/default-male-avatar.gif";
import DefaultFemaleAvatar from "../../assets/default-female-avatar.gif";

interface ITimelineContentWithImageProps {
  title: string;
  image: string;
  name: string;
  description: string;
  right?: boolean;
  womanSpeaker?: boolean;
}

export function TimelineContentWithImage({
  title,
  image,
  name,
  description,
  right = false,
  womanSpeaker = false,
}: ITimelineContentWithImageProps) {
  const [imageError, setImageError] = useState(false);

  const defaultAvatarImage = useMemo(
    () => (womanSpeaker ? DefaultFemaleAvatar : DefaultMaleAvatar),
    [womanSpeaker]
  );

  return (
    <StyledContainer>
      <h1>Palestra</h1>
      <h2>{title}</h2>
      <StyledContentContainer right={right}>
        <StyledSpeakerInfo right={right}>
          <StyledImageContainer>
            <img
              src={imageError ? defaultAvatarImage : image}
              alt={name}
              onError={() => setImageError(true)}
            />
          </StyledImageContainer>

          <strong>{name}</strong>
        </StyledSpeakerInfo>

        <p>{description}</p>
      </StyledContentContainer>
    </StyledContainer>
  );
}
