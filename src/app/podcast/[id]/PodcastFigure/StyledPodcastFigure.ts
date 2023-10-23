import styled from "styled-components";

const grayTransparentBorder = "1px solid rgba(187, 187, 187, 0.68)";
const smallGrayBoxShadow = "0px 3px 8px rgba(187, 187, 187, 0.68)";

const StyledPodcasFigure = styled.section`
  & {
    display: flex;
    flex-direction: column;
    border: ${grayTransparentBorder};
    box-shadow: ${smallGrayBoxShadow};

    width: 80%;
    height: 25rem;
    max-height: 27rem;
    gap: 0.5rem;
    align-items: center;

    img {
      align-self: center;
      justify-self: center;
      width: 176px;
      height: 150px;
      border-radius: 5px;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    .artist-and-title-container,
    .description-container {
      width: 90%;
      border-top: ${grayTransparentBorder};
      line-height: 1rem;
      padding: 10px 0;

      h2 {
        line-height: 1.5rem;
        font-weight: 800;
      }

      h3,
      h4 {
        font-size: 0.8rem;
      }

      h2,
      h4 {
        margin-bottom: 4px;
      }

      h3,
      p {
        font-weight: 600;
        font-style: italic;
      }

      p {
        font-size: 0.7rem;
        font-weight: 550;
      }
    }

    .artist-and-title-container {
      padding: 10px 5px;
    }

    /*  .description-container {
      overflow: auto;
    } */
  }
`;

export { StyledPodcasFigure };
