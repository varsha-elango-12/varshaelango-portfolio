import styled from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const MainBg = styled.div`
  background-color: ${COLORS.PRIMARY[1000]};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const ContentContainer = styled.div`
  width: 85%;
  overflow: auto;
  position: absolute;
  left: 16.927%;
  @media (max-width: 800px) {
    width: 100%;
    left: 0;
    top: 100px;
  }
`;
