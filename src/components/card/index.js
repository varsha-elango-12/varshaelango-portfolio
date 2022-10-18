import React from "react";
import {
  CardContainer,
  CardDesc,
  CardImg,
  CardImgCont,
  CardTitle,
} from "./styled";
import "./styles.css";

function Card(props) {
  return (
    <CardContainer
      className={`
        ${props.floatRight ? "float-right" : ""} ${
        props.marginTop ? "mt-17" : ""
      }
      `}
    >
      <CardImgCont>
        <CardImg src={props.imgSrc} />
      </CardImgCont>
      <CardTitle>{props.title}</CardTitle>
      <CardDesc>{props.desc}</CardDesc>
    </CardContainer>
  );
}

export default Card;
