import styled from "styled-components";

const grayTransparentBorder = "1px solid rgba(187, 187, 187, 0.68)";
const smallGrayBoxShadow = "0px 3px 8px rgba(187, 187, 187, 0.68)";

const StyledPodcastCard = styled.li`
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      position: relative;
      top: 5rem;
    }

    .box-separator {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 17rem;
      border: ${grayTransparentBorder};
      box-shadow: ${smallGrayBoxShadow};

      h2 {
        margin-top: 5rem;
        font-size: 1.5rem;
        font-weight: 500;
      }

      h3 {
        margin-top: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        color: gray;
        margin-bottom: 0.8rem;
      }
    }
  }
`;

export { StyledPodcastCard };
