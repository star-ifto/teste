import styled from "styled-components";

interface IStyledContentContainerProps {
  right: boolean;
}

interface IStyledSpeakerInfoProps {
  right: boolean;
}

const IMAGE_SIZE = "4.5em";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    font-size: 1.5em;
    font-family: "Russo One", sans-serif;
    font-weight: 400 !important;
    color: #3a3a3a;
  }

  h2 {
    font-size: 0.95em;
    font-weight: bold !important;
    text-align: center;
    color: #3a3a3a;
  }

  * {
    line-height: 150%;
  }
`;

export const StyledContentContainer = styled.div<IStyledContentContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;

  direction: ${({ right }) => (right ? "ltr" : "rtl")};

  p {
    direction: ltr;
    text-align: justify;
    font-size: 1.1em;
  }
`;

export const StyledSpeakerInfo = styled.div<IStyledSpeakerInfoProps>`
  display: flex;
  align-items: center;
  gap: 1em;

  strong {
    padding: 0.7em;
    border-radius: ${({ right }) => (right ? "4em 8em" : "8em 4em")};
    height: 100%;
    background-color: white;
    font-size: 1.1em;
    flex: 1;
  }

  @media screen and (max-width: 1205px) {
    justify-content: center;
    text-align: center;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${IMAGE_SIZE};
  height: ${IMAGE_SIZE};
  border-radius: 50%;

  img {
    height: ${IMAGE_SIZE};
  }
`;
