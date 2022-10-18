import styled, { keyframes } from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const LandingContainer = styled.div`
  padding: 5%;
  background-color: ${COLORS.PRIMARY[1000]};
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
    height: 8vh;
  }
`;

export const GirlImg = styled(MenuImg)`
  height: 70%;
  @media (max-width: 800px) {
    margin: auto;
    height: 8vh;
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
  animation-name: ${WaveAnim};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  transition: all ease 0.3s;
  &:hover {
    animation: none;
  }
  @media (max-width: 800px) {
    margin: auto;
    height: 8vh;
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
  @media (max-width: 800px) {
    width: 100%;
    height: 20vh;
    margin: 3% 0;
    flex-direction: column;

    a {
      text-align: center;
    }
    .secrow-link,
    .connect-link {
      margin: auto;
      flex-direction: column;
    }
  }
`;
