import styled from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const SideNavMain = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  z-index: 999;
  background-color: ${COLORS.PRIMARY[1000]};

  @media (max-width: 1100px) {
    width: 100%;
    position: relative;
    height: auto;
    min-height: 130px;
  }

  @media (min-width: 768px) and (max-width: 1100px) {
    p,
    p * {
      font-size: 14px !important;
    }
  }
`;

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 10px;
  }
`;
export const SideCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20% 50px;
  @media (min-width: 1538px) {
    &:last-child {
      padding-bottom: 10%;
    }
  }
  @media (min-width: 1101px) and (max-width: 1537px) {
    padding: 20% 30px;
    &:last-child {
      padding-bottom: 4%;
    }
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &:last-child {
      padding-bottom: 10px;
    }
    &:nth-child(2) {
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &:last-child {
      padding-bottom: 10px;
    }
    &:nth-child(2) {
      width: 100%;
    }
  }
`;
export const SideLogo = styled.img`
  width: 8vw;
  @media (max-width: 1100px) {
    height: auto;
    width: 21vw;
    padding-left: 0;
    margin: 0 auto;
    display: block;
  }
`;
export const SideBottomText = styled.p`
  text-align: left;
  font-size: clamp(12px, 0.95vw, 24px);
  letter-spacing: 0px;
  color: #f24976;
  opacity: 1;
  font-family: "PMI";
  .side-description {
    display: block;
    margin-top: 1rem;
  }
  @media (max-width: 1100px) {
    width: 70%;
    max-width: 100%;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 14px;
    .side-description {
      margin-top: 0.75rem;
    }
    &.full-w {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const PB = styled.span`
  font-family: "PB";
`;
export const PEBI = styled.span`
  font-family: "PEBI";
`;


export const SideBottomImg = styled.img`
  width: 5.45vw;
  object-fit: scale-down;
  margin-bottom: 45px;
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
  @media (max-width: 1100px) {
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
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0px 0 36px;
  @media (max-width: 1100px) {
    margin: 0 0 10px;
  }
`;

export const ProjNavHeading = styled.h2`
  margin: 0 0 72px;
  color: ${COLORS.TEXT_COLOR[900]};
  font-family: "PM";
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  text-transform: uppercase;
  @media (max-width: 1100px) {
    margin-bottom: 20px;
  }
`;

export const ProjNavBtn = styled.span`
  color: ${COLORS.TEXT_COLOR[900]};
  margin: 0 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(12px, 1vw, 24px);
  font-family: "PB";
  line-height: 1;
  text-decoration: underline;
  &:hover {
    opacity: 0.7 !important;
  }
  @media (max-width: 1100px) {
    margin-bottom: 12px;
  }
`;
