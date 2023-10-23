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
        width: 170px;
        height: 170px;
        border-radius: 50%;
        position: relative;
        top: 6rem;
      }

      .box-separator {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 20.4rem;
        border: ${grayTransparentBorder};
        box-shadow: ${smallGrayBoxShadow};

        h2 {
          margin-top: 6rem;
          font-size: 1.8rem;
          font-weight: 500;
        }

        h3 {
          margin-top: 0.6rem;
          font-size: 1.2rem;
          font-weight: 500;
          color: gray;
          margin-bottom: 0.96rem;
        }
      }
    }
  }
`;

export { StyledPodcastCard };
