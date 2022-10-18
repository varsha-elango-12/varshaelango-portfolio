import styled from "styled-components";
import { COLORS } from "../../assets/styles/constant";

export const ConnectMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 12% 18% 7% 3%;

  p,
  label {
    color: ${COLORS.WHITE[1000]};
  }

  form {
    display: flex;
    flex-direction: column;
    width: 25vw;
    align-self: center;
    label {
      font-family: "PMI";
      font-size: clamp(12px, 1.2vw, 18px);
      margin-bottom: 10px;
    }

    textarea {
      border: 1px solid #707070;
      border-radius: 10px;
      padding: 15px;
      background: transparent;
      resize: none;
      font-family: "PI";
      font-size: clamp(12px, 0.9vw, 15px);
      color: ${COLORS.WHITE[1000]};
      height: 21vh;
      z-index: 2;
      &::placeholder {
        font-family: "PI";
        font-size: clamp(12px, 0.9vw, 15px);
        color: ${COLORS.WHITE[1000]};
      }
    }
    button {
      width: 20%;
      display: flex;
      color: ${COLORS.WHITE[1000]};
      background: none;
      border: 0;
      margin: 10px 0;
      font-family: "PB";
      font-size: clamp(12px, 1.2vw, 18px);
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        color: ${COLORS.TEXT_COLOR[900]};
      }
    }
    p {
      color: ${COLORS.TEXT_COLOR[900]};
      margin-top: 10px;
    }
  }
  &::before {
    content: "";
    background-image: url(${require("../../assets/images/varsha-potrait.png")});
    position: absolute;
    top: 13%;
    right: 6%;
    width: 25vw;
    height: 70%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &::after {
    content: "Yup, this is me, and I think I look best in my Indian outfit!";
    color: white;
    position: absolute;
    top: 12%;
    right: 24%;
    width: 15%;
    font-family: "PI";
    font-size: clamp(12px, 1.06vw, 15px);
  }

  @media (max-width: 800px) {
    padding: 10px;
    justify-content: flex-start;
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
  p {
    font-family: "PM";
    font-size: clamp(12px, 1.6vw, 20px);
  }
`;
