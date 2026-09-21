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
    font-size: clamp(13px, 1.2vw, 18px);
    text-align: center;
    margin: 0 auto 15px;
  }
  .img-col-desc1 {
    font-family: "PSB";
    font-size: clamp(12px, 1vw, 16px);
    margin-bottom: 15px;
  }
  .img-col-desc2 {
    font-family: "PI";
    font-size: clamp(11px, 0.9vw, 15px);
    margin-bottom: 15px;
  }
  div {
    &.mt-auto {
      margin-top: auto;
    }

    &.mb-auto {
      margin-bottom: auto;
    }
  }
  img {
    width: 100%;
    margin: 10px 0 5px;
    &.h-auto {
      height: auto;
    }
  }
`;
export const ImgContContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;


export const ResearchCalloutIcon = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: left;

    
`;

export const ResearchCalloutTitle = styled.div`
    font-size: clamp(18px, 0.75vw, 22px);
`;

export const ResearchCalloutBody = styled.div`
    font-size: clamp(14px, 0.75vw, 18px);
`;

export const ResearchCalloutQuote = styled.div`
    font-size: clamp(14px, 0.75vw, 18px);
`;

export const ResearchCallout = styled.div`
    display: grid;
    grid-template-columns: 0.65fr 1.65fr 5.20fr 2.5fr;
    align-items: center;
    gap: 20px;

    width: 100%;
    box-sizing: border-box;

    padding: 16px 20px;

    

    background: #d0ece0;
    border: 1px solid #333432;
    border-radius: 24px;

    box-shadow: 0 4px 4px 0 #00000033;

    
`;

export const HighlightCard = styled.div`
  position: relative;
  width: 70%;
  box-sizing: border-box;
  overflow: visible;
  font-family: "PR";

  padding: 12px;

  margin-bottom: 24px;

  border: 1px solid #4c3725;
  border-radius: 8px;
  box-shadow: 8px 8px 0 #4c3725;


  &.color-1 {
    background: #d5e2ff;
  }

  &.color-2 {
    background: #f0f4ff;
  }

  &.color-3 {
    background: #fff4db;
  }

  img {
    position: relative;
    z-index: 2;
    display: block;
    width: 100%;
    height: auto;
    margin-top: 5px;
  }

  .width-45 {
    width: 45%;
    max-width: 100%;
    height: auto;
  }

  h3,
  h3 {
    margin: 0 0 8px;
    font-size: clamp(16px, 0.75vw, 24px);
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-family: "PB";
  }

  p,
  ul {
    font-size: clamp(16px, 0.75vw, 20px);
    padding-left: 0;
    list-style: none;
    position: relative;
    z-index: 2;
  }

  li {
    font-size: clamp(16px, 0.75vw, 20px);
    position: relative;
    padding: 4px 0px 0px 12px;
    z-index: 2;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #4c3725;
  }

  .grain {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;

    opacity: 1;
    mix-blend-mode: multiply;

    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");

    background-size: 150px 150px;
  }

  
`;




export const HighlightCard2 = styled.div`
  position: relative;
  z-index: 0;

  width: 70%;
  box-sizing: border-box;
  overflow: visible;
  font-family: "PR";

  padding: 12px;
  margin-bottom: 24px;

  border: 3px solid #da0f0f;
  border-radius: 8px;
  background: #f5f5f5;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;

    width: 100%;
    height: 100%;

    border-top: 3px solid #da0f0f;
    border-left: 3px solid #da0f0f;
    border-radius: 10px 10px 0 10px;

    pointer-events: none;
  }

  h3,
  p {
    position: relative;
    z-index: 1;
  }

  h3 {
    margin: 0 0 8px;
    font-size: clamp(16px, 0.75vw, 24px);
    line-height: 1.2;
    font-family: "PB";
  }

  p {
    margin: 0;
    font-size: clamp(16px, 0.75vw, 20px);
    line-height: 1.5;
  }

  ul {
    font-size: clamp(16px, 0.75vw, 20px);
    padding-left: 0;
    list-style: none;
    position: relative;
    z-index: 2;
  }

  li {
    font-size: clamp(16px, 0.75vw, 20px);
    position: relative;
    padding: 4px 0px 0px 12px;
    z-index: 2;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #4c3725;
  }

  .grain {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;

    opacity: 0.35;
    mix-blend-mode: multiply;

    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");

    background-size: 150px 150px;
  }
`;


export const FullWidthBanner = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 0;
  background: #e7e6e5;
`;

export const FullWidthBannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const FullWidthBannerText = styled.p`
  margin: 0;
  width: 494px;


  font-size: 16px;
  font-family: "PR";
  font-weight: 400;
  line-height: 20px;
  color: #000;
`;

export const FullViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;

  border: none;
  background: #000;
  color: #fff;

  font-size: 20px;
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;
`;

export const EntryGate = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 20%;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(64, 64, 64, 0.95);
  backdrop-filter: blur(8px);

  @media (max-width: 1100px) {
    top: 130px;
    left: 0;
  }
`;

export const EntryGateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: min(1348px, calc(100% - 48px));
`;

export const EntryGateText = styled.p`
  width: min(846px, 100%);
  margin: 0;
  color: #fff;
  
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
`;

export const EntryGateActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;

const EntryGateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 16px;
  border: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 210px;
    justify-content: center;
  }
`;

export const PublicViewButton = styled(EntryGateButton)`
  // width: 210px;
  background: #f24976;
`;

export const EntryFullViewButton = styled(EntryGateButton)`
  // width: 177px;
  background: #000;
`;