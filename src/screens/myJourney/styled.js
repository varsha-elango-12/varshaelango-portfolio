import styled from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const BlackBg = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${COLORS.PRIMARY[1000]};
  padding: 4% 7%;
  min-height: 100vh;
  &.connect-bg {
    display: flex;
  }
  h2 {
    font-family: "PSB";
    color: ${COLORS.TEXT_COLOR[900]};
    font-size: clamp(15px, 1.4vw, 26px);
  }
  @media (max-width: 800px) {
    height: 100vh;
  }
`;

export const MI = styled.p`
  font-family: "PMI";
  font-size: clamp(10px, 0.84vw, 24px);
  color: ${COLORS.TEXT_COLOR[200]};
  text-align: center;
  margin: 20px 0;
`;
export const commonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  grid-gap: 10px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(5, 1);
  }
`;
export const MJHead = styled(commonGrid)`
  padding: 0px 10px 20px;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const MJBody = styled(commonGrid)`
  border: 0.1px solid ${COLORS.SECONDARY[1000]}80;
  border-radius: 20px;
  padding: 20px 10px;
  margin: 20px 0;
  p {
    font-family: "PR";
    font-size: clamp(10px, 0.84vw, 24px);
    text-align: center;
    color: ${COLORS.TEXT_COLOR[150]};
    &.pli {
      font-family: "PLI";
    }
  }

  &.hl-row {
    p {
      color: ${COLORS.TEXT_COLOR[300]};
    }
  }
`;
