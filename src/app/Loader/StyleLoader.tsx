import styled from "styled-components";
import { darkBlue } from "@/styles/styled-index";
import { keyframes } from "styled-components";

const expandAndContract = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
`;

const StyledLoader = styled.div`
  .loader {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #8bc1cc;
    border-radius: 50%;

    display: flex;
    align-items: center;
    align-self: center;
    position: relative;

    .loader-background {
      width: 100%;
      height: 100%;
      border-radius: 50%;

      background-color: ${darkBlue};
      animation: ${expandAndContract} 0.5s linear infinite,
        ${fadeAnimation} 0.5s linear infinite;
      z-index: 1;
    }
  }
`;

export { StyledLoader };
