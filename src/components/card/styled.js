import styled from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ease 0.3s;
  transform: scale(1);
`;
export const CardImgCont = styled.div`
  width: 100%;
  max-height: 360px;
  margin-bottom: 5%;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  font-family: "PB";
  font-size: clamp(10px, 1vw, 24px);
  color: ${COLORS.TEXT_COLOR[1000]};
  transition: all ease 0.3s;
`;

export const CardDesc = styled.p`
  font-family: "PR";
  margin-top: 5px;
  font-size: clamp(10px, 1vw, 24px);

  color: ${COLORS.TEXT_COLOR[1000]};
  transition: all ease 0.3s;
`;

export const CardContainer = styled.div`
  width: 26vw;
  min-height: 360px;
  cursor: pointer;
  &:hover ${CardImg} {
    transform: scale(1.1);
  }
  &:hover ${CardTitle},&:hover ${CardDesc} {
    color: ${COLORS.TEXT_COLOR[900]};
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
