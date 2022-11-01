import styled from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const SideNavMain = styled.div`
  width: 16.927%;
  height: 100%;
  position: fixed;
  z-index: 999;
  background-color: ${COLORS.PRIMARY[1000]};

  @media (max-width: 800px) {
    width: 100%;
    height: 130px;
  }
`;

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 800px) {
    flex-direction: row;
    padding: 10px;
  }
`;
export const SideCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20% 20px 108px;
  @media (max-width: 1537px) and (max-height: 728px) {
    padding: 20% 20px 80px;
  }
  @media (max-width: 800px) {
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    &:nth-child(2) {
      width: 60%;
    }
  }
`;
export const SideLogo = styled.img`
  width: 8vw;
  @media (max-width: 800px) {
    height: auto;
    width: 21vw;
    padding-left: 10px;
  }
`;
export const SideBottomText = styled.p`
  text-align: center;
  font-size: clamp(12px, 1.1vw, 24px);
  letter-spacing: 0px;
  color: #f24976;
  opacity: 1;
  font-family: "PMI";
  @media (max-width: 800px) {
    width: 70%;
    font-size: clamp(12px, 1.1vw, 24px);
    &.full-w {
      width: 80%;
      margin-left: auto;
    }
  }
`;
export const PEBI = styled.span`
  font-family: "PEBI";
`;

export const SideBottomImg = styled.img`
  width: 5.45vw;
  object-fit: scale-down;
  margin-bottom: 58px;
  &.hcl {
    transform: scale(1);
    transition: all ease 0.3s !important;

    &:hover {
      transform: scale(1.06) !important;
    }
  }
  &.grl-img {
    margin-bottom: 38px;
  }
  @media (max-width: 800px) {
    margin-bottom: 0;
    margin-right: 10px;
    width: 8.45vw;
    &.grl-img {
      margin-bottom: auto;
    }
    &.connect-img {
      width: 10.45vw;
    }
  }
`;
export const ProjNavCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px 0 36px;
  @media (max-width: 800px) {
    margin: 0 0 10px;
  }
`;

export const ProjNavBtn = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${COLORS.TEXT_COLOR[900]};
  color: ${COLORS.BLACK[1000]};
  margin: 0 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(10px, 1vw, 24px);
  font-family: "PB";
  &:hover {
    opacity: 0.7 !important;
  }
  @media (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
`;
