import styled from "styled-components";

const grayTransparentBorder = "1px solid rgba(187, 187, 187, 0.68)";
const smallGrayBoxShadow = "0px 3px 8px rgba(187, 187, 187, 0.68)";

const StyledPodcastCard = styled.li`
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    a {
      img {
        width: 153px; // Reducido un 10%
        height: 153px; // Reducido un 10%
        border-radius: 50%;
        position: relative;
        top: 5.4rem; // Reducido un 10%
      }

      .box-separator {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 18.36rem;
        border: ${grayTransparentBorder};
        box-shadow: ${smallGrayBoxShadow};

        h2 {
          margin-top: 5.4rem;
          font-size: 1.62rem;
          font-weight: 500;
        }

        h3 {
          margin-top: 0.54rem;
          font-size: 1.08rem;
          font-weight: 500;
          color: gray;
          margin-bottom: 0.864rem;
        }
      }
    }
  }
`;

export { StyledPodcastCard };
