import styled from "styled-components";

const grayTransparentBorder = "1px solid rgba(187, 187, 187, 0.68)";
const smallGrayBoxShadow = "0px 3px 8px rgba(187, 187, 187, 0.68)";
const sexyDark = "rgb(66, 66, 66)";

const StyledEpisodeSummary = styled.section`
  & {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 50px;
    border: ${grayTransparentBorder};
    box-shadow: ${smallGrayBoxShadow};
    height: 62%;
    padding: 1rem;

    h2 {
      align-self: center;
    }

    p {
      font-style: italic;
    }

    audio {
      border-radius: 8px;
      display: block;
      width: 100%;
    }
  }
`;

export { StyledEpisodeSummary };
