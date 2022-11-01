import styled from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const ConnectMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  p {
    font-size: clamp(12px, 1.2vw, 22px);
    color: ${COLORS.WHITE[1000]};
    font-family: "PSB";
    margin: 10px 0;
    span,
    a {
      color: ${COLORS.TEXT_COLOR[900]};
    }
    span,
    .a1 {
      padding-left: 20px;
    }

    a {
      &.a1 {
        text-decoration: underline;
        font-family: "PSBI";
      }
      &.a2 {
        font-family: "PI";
      }
    }
  }
  .sm-cont {
    a {
      margin-right: 25px;
    }
    img {
      width: 28px;
      height: 28px;
      transition: all ease 0.5s;

      &:hover {
        transform: rotate(360deg);
      }
      @media (max-width: 800px) {
        width: 20px;
        height: 20px;
      }
    }
  }

  &::before {
    content: "";
    background-image: url(${require("../../assets/images/varsha-potrait.png")});
    position: absolute;
    bottom: 0;
    right: 0%;
    width: 17vw;
    height: 30%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  &::after {
    content: "Thanks for your time, have a great day ahead :)";
    color: white;
    position: absolute;
    bottom: 15%;
    right: 15%;
    width: 17%;
    font-family: "PI";
    font-size: clamp(12px, 1.06vw, 15px);
    color: ${COLORS.TEXT_COLOR[900]};
  }

  @media (max-width: 800px) {
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;

    form {
      align-self: flex-start;
      width: 100%;
    }
    &::before {
      top: auto;
      bottom: 0;
      width: 50vw;
      height: 50%;
      opacity: 0.3;
    }
    &::after {
      top: auto;
      left: 20px;
      right: auto;
      width: 50%;
      bottom: 30%;
      text-align: center;
    }
  }
`;
export const ConnectFR = styled.div`
  padding-right: 100px;
  padding-bottom: 80px;
  @media (max-width: 800px) {
    padding: 100px 0 0;
  }
`;
