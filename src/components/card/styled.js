import styled from "styled-components";
import { Link } from "react-router-dom";
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
  font-size: clamp(13px, 0.9vw, 24px);
  color: ${COLORS.TEXT_COLOR[1000]};
  transition: all ease 0.3s;
  margin: 0;
`;

export const CardTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

export const CardTitleNote = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  font-family: "PR";
  font-size: clamp(14px, 0.7vw, 16px);
  color: #5d5d5d;
  text-align: right;
  white-space: nowrap;
  text-decoration: none;
`;

export const CardTitleIcon = styled.img`
  width: 13px;
  height: 15px;
  object-fit: contain;
  display: block;
  padding-bottom: 2px;
`;

export const CardDesc = styled.p`
  font-family: "PR";
  margin-top: 5px;
  font-size: clamp(13px, 0.9vw, 24px);

  color: ${COLORS.TEXT_COLOR[1000]};
  transition: all ease 0.3s;
`;
export const CardDescSB = styled(CardDesc)`
  font-family: "PSB";
  margin-top: 0;
  transform: translate(
    ${({ $subdescX }) => $subdescX || 0}px,
    ${({ $subdescY }) => $subdescY || 0}px
  );
`;

export const CardContainer = styled.div`
  width: 26vw;
  min-height: 360px;
  cursor: pointer;
  &:hover ${CardImg} {
    transform: scale(1.075);
  }
  &:hover ${CardTitle},&:hover ${CardDesc} {
    color: ${COLORS.TEXT_COLOR[900]};
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
