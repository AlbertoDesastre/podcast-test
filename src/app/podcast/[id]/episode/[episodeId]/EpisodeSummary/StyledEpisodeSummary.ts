import styled from "styled-components";

const grayTransparentBorder = "1px solid rgba(187, 187, 187, 0.68)";
const smallGrayBoxShadow = "0px 3px 8px rgba(187, 187, 187, 0.68)";

const StyledEpisodeSummary = styled.section`
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
  }
`;

export { StyledEpisodeSummary };
