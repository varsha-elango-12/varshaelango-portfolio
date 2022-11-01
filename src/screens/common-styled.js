import styled from "styled-components";
import { COLORS } from "../assets/styles/constant";

export const PDBg = styled.div`
  background-color: ${COLORS.PRIMARY[500]};
  width: 100%;
  min-height: 100%;
`;
export const VideoFrame = styled.iframe`
  width: 100%;
  min-height: 62vh;
  margin: 0px 0 10x;
  &.video-h40 {
    min-height: 40vh;
  }
  &.video-h25 {
    min-height: auto;
    height: 85%;
    @media (max-width: 800px) {
      height: 101%;
    }
  }
  &.fme {
    @media (max-width: 800px) {
      margin-top: 20px;
    }
  }
`;

export const RightCaret = styled.img`
  width: 16px;
  cursor: pointer;
  object-fit: contain;
  @media (max-width: 800px) {
    width: 10px;
  }
`;
export const LeftCaret = styled(RightCaret)`
  transform: rotate(-180deg);
`;

export const ModalText = styled.p`
  font-size: clamp(12px, 0.84vw, 15px);
  color: ${COLORS.WHITE[1000]};
  font-family: "PM";
  text-align: center;
  margin: 0 8px;
`;
