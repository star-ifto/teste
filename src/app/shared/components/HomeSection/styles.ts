import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.5em;
  padding: 8em;

  flex: 1;

  .title {
    width: 15ch;
  }

  p {
    max-width: 51ch;
    font-size: 1.125em;
    line-height: 160%;
    text-align: left;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3em;

    a {
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 1.25em;
      text-decoration: none;
      line-height: 160%;
      color: #ffffff;
      text-align: center;
      background-color: #0f3b51;
      padding: 0.7em 4em;
      border-radius: 0.3em;

      &:hover {
        transition: all 0.3s;
        box-shadow: 0px 0px 15px 0px rgba(15, 59, 81, 0.5);
      }
    }
  }
`;

export const StyledRectangleGroup = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
`;
