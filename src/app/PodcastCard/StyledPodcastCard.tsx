import styled from "styled-components";

const grayTransparentBorder = "1px solid rgba(187, 187, 187, 0.68)";
const darkBoxShadow = "1px rgba(165, 160, 160, 0.1)";

const StyledPodcastCard = styled.li`
  article {
    width: 15rem;
    display: flex;
    flex-direction: column;

    img {
      border-radius: 50%;
      position: relative;
      top: 20px;
    }

    ul {
      text-align: center;
      list-style: none;
      min-height: 8rem;
      padding: 5% 3%;

      border: ${grayTransparentBorder};
      box-shadow: 0px 2px 8px rgba(187, 187, 187, 0.68);
      gap: 10rem;

      h2 {
        font-size: 1.5rem;
      }

      li:nth-child(2) {
        margin-top: 0.5rem;
      }
    }
  }
`;

export { StyledPodcastCard };
