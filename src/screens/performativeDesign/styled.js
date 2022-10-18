import styled from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const ProjectsContainer = styled.div`
  padding: 7% 16% 5%;
  min-height: 100vh;
  @media (max-width: 1350px) {
    padding: 7% 7% 5%;
  }
  @media (max-width: 1110px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const SingleProjectContainer = styled.div`
  padding: 4% 7% 5%;
`;
export const FlexRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 3% 0;
  &:first-child {
    padding-top: 0;
  }
  &.pb-0 {
    padding-bottom: 0;
  }
  &.p-0 {
    padding: 0;
  }
  .w-23 {
    width: 23%;
  }
  .w-36 {
    width: 36%;
  }
  .w-50 {
    width: 50%;
  }
  .w-60 {
    width: 60%;
  }
  .w-80 {
    width: 80%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ProjTitle = styled.h1`
  font-size: clamp(15px, 1.5vw, 28px);
  font-family: "PEB";
  flex: 1;
  padding: 0 1% 0 0;
`;
export const TitleTwo = styled.h2`
  font-size: clamp(13px, 1.15vw, 22px);
  color: ${COLORS.TEXT_COLOR[500]};
  font-family: "PEB";
  margin: 4% 0;
  text-transform: uppercase;
`;
export const TitleThree = styled.h2`
  font-size: clamp(12px, 1.05vw, 20px);
  color: ${COLORS.TEXT_COLOR[500]};
  font-family: "PB";
  @media (max-width: 800px) {
  }
`;
export const SubTitleThree = styled.h3`
  font-size: clamp(12px, 0.95vw, 18px);
  color: ${COLORS.TEXT_COLOR[500]};
  font-family: "PR";
  font-weight: normal;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

export const ProjDesc = styled.p`
  font-size: clamp(10px, 0.84vw, 24px);
  color: ${COLORS.TEXT_COLOR[500]};
  font-family: "PM";
  margin-bottom: 3%;
  &.sbi-font {
    font-family: "PSBI";
  }
`;
export const ProjDescSub = styled(ProjDesc)`
  margin-top: 10px;
  font-size: clamp(10px, 0.84vw, 24px);
  &.float-txt {
    position: absolute;
    left: 0;
  }
  &.float-txt1 {
    position: absolute;
    right: 0;
  }
  &.float-txt2 {
    position: absolute;
    right: -10%;
    bottom: -5%;
  }
  @media (max-width: 800px) {
    &.float-txt,
    &.float-txt1,
    &.float-txt2 {
      position: static;
    }
  }
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8% 0 0;
  & p {
    font-size: clamp(10px, 0.84vw, 24px);
  }
  @media (max-width: 800px) {
  }
`;

export const BoldTxt = styled.span`
  font-family: "PB";
`;
export const BoldITxt = styled.span`
  font-family: "PBI";
`;
export const SBTxt = styled.span`
  font-family: "PSBI";
`;
export const MITxt = styled.p`
  font-family: "PMI";
  opacity: 0.68;
`;
export const MITxt1 = styled.p`
  font-family: "PMI";
`;

export const FlexHalf = styled.div`
  flex: 0.5;
`;
export const FlexOne = styled.div`
  flex: 1;
`;
export const FlexTwo = styled.div`
  flex: 2;
  padding: 0 2%;
  @media (max-width: 800px) {
    padding: 2% 0;
  }
`;
export const FlexThree = styled.div`
  flex: 3;
  padding: 0 0 0 1.2%;
  &.top-cont {
    display: flex;
    justify-content: space-between;
  }
  &.p-0 {
    padding: 0;
  }
  @media (max-width: 800px) {
    padding: 2% 0;
    &.top-cont {
      flex-direction: column;
    }
  }
`;
export const MediumImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
export const MediumImgTop = styled.img`
  width: 18vw;
  height: 100%;
  // transform: scale(1);
  // cursor: pointer;
  transition: all 0.3s ease;
  // &:hover {
  //   transform: scale(1.1);
  // }
  @media (max-width: 800px) {
    width: 100%;
    margin: 2% 0;
  }
`;

export const SubDesc = styled(ProjDesc)`
  font-size: clamp(10px, 0.84vw, 24px);
  margin-top: 2%;
  @media (max-width: 800px) {
  }
`;
export const ListImg = styled.img`
  height: 26vh;
  width:100%;
  object-fit:cover;
  transform: scale(1);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  &.bottom-img{
    height: auto;
    width: 100%;
  }
  &.cs-grid-img{
    height:100%;
    width:100%;
    object-fit:cover;
  }
  &.img-h35 {
    min-height: 40vh;
  }
  &.img-h11 {
  height: 11vh;
  }
  &.img-h30 {
  height: 30vh;
  }
 
  @media (min-width: 1400px) and (min-height:900px) {
    height:25vh;
   
`;
export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  &.fe-grid-1 {
    grid-template-columns: repeat(5, 1fr);
  }

  &.cs-grid-1 {
    grid-template-columns: 1fr 2fr 2fr 1fr;
  }
  &.cst {
    div {
      &:nth-child(5) {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        img {
          height: 100%;
        }
      }
    }
  }

  &.jn-grid-1 {
    grid-template-columns: 2fr 1fr;
  }
  &.jn-grid-2 {
    grid-template-columns: 1fr 2fr;
  }
  &.jn-grid-3 {
    grid-template-columns: 1fr 1fr 0.5fr;
  }
  &.jn-grid-4 {
    grid-template-columns: 1.2fr 1fr;
  }
  &.jn-grid-5 {
    grid-template-columns: 1fr 1.2fr;
  }
  &.jn-grid-6 {
    grid-template-columns: 2fr 1fr 1fr;
  }
  &.jn-grid-7 {
    grid-template-columns: 1fr 0.5fr 1fr;
  }
  &.jn-grid-8 {
    grid-template-columns: 1fr 1fr;
  }
  &.grid-1-2-1 {
    grid-template-columns: 1fr 2fr 1fr;
  }
  &.grid-1-2-1-1 {
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-template-rows: ;
  }
  &.grid-1-1-1-05 {
    grid-template-columns: 1fr 1fr 1fr 0.5fr;
  }
  &.grid-08-1-1 {
    grid-template-columns: 0.8fr 1fr 1fr;
  }
  &.grid-1-2-2-2 {
    grid-template-columns: 1fr 2fr 2fr 2fr;
  }
  &.grid-1-1-1-105 {
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
  }
  &.grid-1-1-2-1 {
    grid-template-columns: 1fr 1fr 2fr 1fr;
  }
  &.grid-1-1-1 {
    grid-template-columns: 1fr 1fr 1fr;
    img {
      object-fit: contain;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1%;
    ${ListImg} {
      height: auto;
      width: 100%;
      &:nth-child(4) {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
      }
    }
  }
`;
export const ImgContainerTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1%;
  margin: 1% 0;
  &.fe-grid-3 {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    margin-bottom: 7%;
    div {
      &:nth-child(3) {
        width: 50% !important;
        grid-column: 1/-1;
      }
    }
  }
  &.grid-2-1-1 {
    grid-template-columns: 2fr 1fr 1fr;
  }
  &.cst-grid-1 {
    grid-template-columns: 1.1fr 2fr 2fr;
    img {
      &:nth-child(1) {
        grid-row-start: 1;
        grid-row-end: 2;
      }
      height: 100%;
    }
  }
  @media (max-width: 800px) {
    &.fe-grid-3 {
      grid-template-columns: 1fr;
      div {
        &:nth-child(3) {
          width: 100%;
          grid-column: 1;
        }
      }
    }
  }
`;
export const ImgContainerTwoImg = styled.img`
  height: 43vh;
  width: 100%;

  @media (max-width: 800px) {
    height: 125px;
    object-fit: cover;
  }
`;
export const VideoCont = styled.div`
  text-align: center;
  margin: 3% 0;
`;

export const VideoContSubTxt = styled.p`
  font-size: clamp(10px, 0.84vw, 24px);
  color: ${COLORS.TEXT_COLOR[500]};
  font-family: "PM";
  margin: 3% auto;
  width: 70%;
`;
