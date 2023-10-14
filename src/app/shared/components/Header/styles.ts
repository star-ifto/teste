import styled from "styled-components";

export const StyledContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 8em;
  z-index: 1;

  img {
    width: 9em;
  }

  .nav-desktop {
    display: flex;
    align-items: center;
    gap: 3em;
    transition: all 0.2s;

    a {
      color: white;
      text-decoration: none;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      line-height: 160%;

      &:hover {
        transition: all 0.2s;
        font-weight: 600;
      }
    }
  }

  button {
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: transparent;
    padding: 0.5em;
    border-radius: 0.3em;
    border: none;

    &:hover {
      background-color: #0f3b51;
      transition: all 0.4s;
    }
  }

  .nav-mobile {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #0ca2ef;
    flex-direction: column;

    .x-div {
      width: 100%;
      padding: 6%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .links-div {
      flex: 1;
      width: 100%;

      display: grid;
      grid-template-rows: repeat(4, 1fr);

      a {
        font-size: 2em;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        font-weight: bold;

        &:nth-of-type(1),
        &:nth-of-type(3) {
          background-color: #d9d9d91a;
        }

        &:last-child {
          padding-bottom: 6%;
        }

        &:hover {
          background-color: #0f3b51;
          transition: all 0.4s;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 2em 6%;

    .nav-desktop {
      display: none;
    }

    .nav-mobile {
      display: flex;
    }

    button {
      display: flex;
    }
  }
`;
