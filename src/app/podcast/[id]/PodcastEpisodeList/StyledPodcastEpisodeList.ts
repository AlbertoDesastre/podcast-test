import styled from "styled-components";
import { darkBlue } from "@/styles/styled-index";

const grayTransparentBorder = "1px solid rgba(187, 187, 187, 0.68)";
const grayBorder = "1px solid rgba(187, 187, 187, 0.5)";

const smallGrayBoxShadow = "0px 3px 8px rgba(187, 187, 187, 0.68)";

const StyledPodcastEpisodeList = styled.section`
  & {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    border: ${grayTransparentBorder};
    box-shadow: ${smallGrayBoxShadow};

    padding: 1rem;
  }

  .table-container {
    border: ${grayTransparentBorder};
    box-shadow: ${smallGrayBoxShadow};
    padding: 1rem;

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;

      /* Title row */
      th:nth-child(1) {
        width: 70%;
      }
      th {
        border-bottom: 2px solid rgba(187, 187, 187, 0.5);
      }

      tr:nth-child(odd) {
        background-color: white;
      }
      tr:nth-child(even) {
        background-color: rgb(249, 249, 249);
      }

      tr {
        border-bottom: ${grayBorder};
        td {
          padding: 0.6rem;
          a {
            font-weight: 550;
            text-decoration: none;
            padding-left: 0.5rem;
            color: ${darkBlue};
          }
        }

        td:nth-child(2),
        td:nth-child(3) {
          padding-left: 0px;
        }
      }
    }
  }
`;

export { StyledPodcastEpisodeList };
