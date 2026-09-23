import React from "react";
import {
  CardContainer,
  CardDesc,
  CardDescSB,
  CardImg,
  CardImgCont,
  CardTitle,
  CardTitleRow,
  CardTitleNote,
  CardTitleIcon,
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
        <CardImg src={props.imgSrc} alt={props.title} />
      </CardImgCont>
      <CardTitleRow>
        <CardTitle>{props.title}</CardTitle>
        {props.titleNote && props.titleNoteLink && (
          <CardTitleNote to={props.titleNoteLink}>
            <CardTitleIcon src={require("../../assets/images/lock.png")} alt="" />
            <span>{props.titleNote}</span>
          </CardTitleNote>
        )}
      </CardTitleRow>
      <CardDesc>{props.desc}</CardDesc>
      {props.subdesc && (
        <CardDescSB
          $subdescX={props.subdescX}
          $subdescY={props.subdescY}
        >
          {props.subdesc}
        </CardDescSB>
      )}
    </CardContainer>
  );
}

export default Card;
