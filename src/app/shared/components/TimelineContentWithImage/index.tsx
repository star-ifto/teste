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
  about_name?: string;
  description: string;
  vacancy?: string;
  address?: string;
  right?: boolean;
  womanSpeaker?: boolean;
  twoSpeakers?: boolean;
  course?: boolean;
}

export function TimelineContentWithImage({
  title,
  image,
  name,
  about_name,
  description,
  vacancy,
  right = false,
  course = false,
  womanSpeaker = false,
  address,
  twoSpeakers = false,
}: ITimelineContentWithImageProps) {
  const [imageError, setImageError] = useState(false);

  const defaultAvatarImage = useMemo(
    () => (womanSpeaker ? DefaultFemaleAvatar : DefaultMaleAvatar),
    [womanSpeaker]
  );

  return (
    <StyledContainer>
      <h1>{course ? "Minicurso" : "Palestra"}</h1>
      <h2>{title}</h2>
      <StyledContentContainer right={right}>
        <StyledSpeakerInfo right={right}>
          <StyledImageContainer>
            <img
              src={imageError ? defaultAvatarImage : image}
              alt={name}
              onError={() => setImageError(true)}
            />
            {twoSpeakers && (
              <img
                src={defaultAvatarImage}
                alt="Segundo Palestrante"
                className="second-speaker-image"
              />
            )}
          </StyledImageContainer>

          <strong>{name}</strong>
        </StyledSpeakerInfo>

        <span style={{ color: "blue" }}>{about_name}</span>
        <span style={{ color: "gray" }}>Local: {address}</span>
        <span style={{ color: "purple", padding: "0 5px" }}>{vacancy}</span>

        <p>{description}</p>
        <style>
          {`{
              padding-top: 10px;
              text-align: justify;
            }
          `}
        </style>
      </StyledContentContainer>
    </StyledContainer >
  );
}
