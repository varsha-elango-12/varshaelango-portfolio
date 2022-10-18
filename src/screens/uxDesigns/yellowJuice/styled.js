import styled from "styled-components";
import { COLORS } from "../../../assets/styles/constant";

export const ImgContCol = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #e1e1e1;
  width: 32%;
  padding: 3.5% 4.5%;
  text-align: center;
  color: ${COLORS.TEXT_COLOR[500]};
  h4 {
    font-family: "PB";
    font-size: clamp(11px, 1.2vw, 18px);
    text-align: center;
    margin: 0 auto 15px;
  }
  .img-col-desc1 {
    font-family: "PSB";
    font-size: clamp(10px, 1vw, 16px);
    margin-bottom: 15px;
  }
  .img-col-desc2 {
    font-family: "PI";
    font-size: clamp(9px, 0.9vw, 15px);
    margin-bottom: 15px;
  }
  img {
    width: 100%;
    margin: 10px 0 5px;
    &.mt-auto {
      margin-top: auto;
    }

    &.mb-auto {
      margin-bottom: auto;
    }
  }
`;
export const ImgContContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
