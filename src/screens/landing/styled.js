import styled, { keyframes } from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const LandingContainer = styled.div`
  padding: 5% 5% 0;
  background-color: ${COLORS.PRIMARY[1000]};
  @media (max-width: 800px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 800px) and (min-height: 720px) {
    padding-top: 20%;
  }
`;
export const LRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const MenuImg = styled.img`
  height: 100%;
  cursor: pointer;
  @media (max-width: 800px) {
    margin: auto;
    height: 16vh;
  }
`;

export const GirlImg = styled(MenuImg)`
  height: 70%;
  @media (max-width: 800px) {
    margin: auto;
    height: 13vh;
  }
`;
export const StarImg = styled(MenuImg)`
  height: 50%;
  margin: 0 15% 0 auto;
  @media (max-width: 800px) {
    margin: auto;
    height: 8vh;
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
  @media (max-width: 800px) {
    margin: auto;
    height: 7vh;
  }
`;

export const ImgContainer = styled.div`
  width: 40%;
  height: 33vh;
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
  }

  .cv-icon {
    right: 0;
  }
  .mail-icon {
    right: 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 20vh;
    margin: 3% 0;
    flex-direction: column;
    .icon-link {
      width: 130px;
      right: 0;
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
      margin: auto;
      flex-direction: column;
    }
    &.menu-two-img {
      height: auto;
    }
    &.menu-three-img {
      margin-top: -35px;
      height: auto;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    &.menu-four-img {
      margin-top: -12px;
      height: auto;
    }
    .menu-one {
      margin-right: auto;
      margin-left: 20px;
    }
    .menu-two {
      margin-left: auto;
      margin-right: 20px;
      margin-top: -30px;
    }
    .menu-three {
      margin: 0 auto 0 40px;
    }
    .menu-four {
      margin: -21px 55px 0 auto;
    }
  }
`;
