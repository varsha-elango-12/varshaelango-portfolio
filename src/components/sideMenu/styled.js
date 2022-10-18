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
    height: 100px;
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
  padding: 20% 20px;
  @media (max-width: 800px) {
    padding: 10px;
    flex-direction: row;
    justify-content: flex-end;
    &:nth-child(2) {
      width: 60%;
    }
  }
`;
export const SideLogo = styled.img`
  width: 8vw;
  @media (max-width: 800px) {
    height: auto;
    width: 12vw;
  }
`;
export const SideBottomText = styled.p`
  text-align: center;
  font-size: clamp(10px, 1.1vw, 24px);
  letter-spacing: 0px;
  color: #f24976;
  opacity: 1;
  font-family: "PSBI";
  @media (max-width: 800px) {
    width: 60%;
  }
`;
export const SideBottomImg = styled.img`
  width: 7vw;
  height: 7vw;
  object-fit: scale-down;
  margin-bottom: 35px;
  @media (max-width: 800px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;
export const ProjNavCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px 0 15px;
`;

export const ProjNavBtn = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${COLORS.TEXT_COLOR[900]};
  color: ${COLORS.WHITE[1000]};
  margin: 0 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(10px, 1vw, 24px);
  @media (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
`;
