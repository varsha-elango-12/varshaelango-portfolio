import styled, { keyframes } from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const LandingContainer = styled.div`
  padding: 5% 5% 0;
  background-color: ${COLORS.PRIMARY[1000]};
  display: flex;
  flex-direction: column;
  gap: var(--menu-row-gap);
  @media (min-width: 1101px) {
    height: 100vh;
    overflow: hidden;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: auto;
    gap: 32px;
    padding: 0;
    overflow: visible;
  }
  @media (max-width: 767px) and (min-height: 720px) {
    padding-top: 0;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    display: block;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    flex: 0 0 100%;
    box-sizing: border-box;
    height: auto;
    min-height: 76vh;
    overflow: visible;
    padding: 4vh 5% 2vh;
    padding-bottom: 6vh;
    gap: 4vh;
  }
`;
export const LRowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: var(--menu-column-gap);
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 32px;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 34vh;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    align-self: stretch;
    box-sizing: border-box;
    overflow: hidden;
    gap: 4vw;
    margin-bottom: 0.1vh;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const MenuImg = styled.img`
  height: 70%;
  cursor: pointer;
  @media (max-width: 767px) {
    margin: 12px auto 8px;
    height: 13vh;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    height: 65%;
    align-self: flex-start;
  }
`;

export const GirlImg = styled(MenuImg)`
  height: 100%;
  transform: scale(0.90);
  @media (max-width: 767px) {
    margin: 12px auto 8px;
    height: 16vh;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    height: 82%;
    align-self: flex-start;
    transform: translateY(-8%) scale(0.95);
  }
`;
export const StarImg = styled(MenuImg)`
  height: 50%;
  margin: 0 15% 0 auto;
  @media (max-width: 767px) {
    margin: 12px auto 8px;
    height: 8vh;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    height: 50%;
  }
`;
export const WaveAnim = keyframes`
0% {  transform:rotate(0) scale(.8)}
50% { transform:rotate(-45deg)scale(1.1)}
100% {transform:rotate(0)scale(.8)}
`;
export const MailImg = styled(StarImg)`
  height: 40%;
  margin: auto 10% 10% auto;
  // animation-name: ${WaveAnim};
  // animation-duration: 3s;
  // animation-iteration-count: infinite;
  transition: all ease 0.3s;
  &:hover {
    animation: none;
  }
  @media (max-width: 767px) {
    margin: 12px auto 8px;
    height: 7vh;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    height: 40%;
  }
`;

export const ImgContainer = styled.div`
  width: 40%;
  height: 31vh;
  background: #060606;
  padding: 2%;
  display: flex;
  position: relative;
  .secrow-link {
    margin: 0 15% 0 auto;
  }
  .connect-link {
    margin: auto 10% 10% auto;
    height: 100%;
    display: flex;
  }
  .icon-link {
    width: 200px;
    height: 70%;
    background: transparent;
    position: absolute;
    z-index: 2;
  }

  .cv-icon {
    right: 0;
  }
  .mail-icon {
    right: 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    max-width: 520px;
    height: 180px;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
    .icon-link {
      width: 100%;
      left: 0;
      right: auto;
      top: 0;
      height: 100%;
    }
    .cv-icon {
      left: 0;
      top: 0;
    }
    .face-icon {
      left: 0;
    }

    a {
      text-align: center;
    }
    .secrow-link,
    .connect-link {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      margin: 0;
    }
    .menu-one,
    .menu-two,
    .menu-three,
    .menu-four {
      margin: 12px auto 8px;
    }
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    width: 100%;
    flex: none;
    min-width: 0;
    max-width: none;
    height: 26vh;
    min-height: 26vh;
    max-height: 26vh;
    box-sizing: border-box;
    overflow: hidden;
    padding: 2%;
    flex-direction: row;
    align-items: center;
    .icon-link {
      width: 200px;
      left: auto;
      right: 0;
      top: auto;
      height: 70%;
    }
    .face-icon {
      left: 0;
      right: auto;
    }
    .secrow-link,
    .connect-link {
      position: relative;
      width: auto;
      height: auto;
      margin: 0 auto;
      flex-direction: column;
    }
    .connect-link {
      margin: 0 auto;
      height: 70%;
    }
    img.menu-one {
      height: 49%;
      max-width: 100%;
      object-fit: contain;
    }
  }
`;
