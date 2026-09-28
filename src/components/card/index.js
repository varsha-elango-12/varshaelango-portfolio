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
import { COLORS } from "../../assets/styles/constant";

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
      <div className="tag-container" style={{fontSize:'clamp(12px, 0.85vw, 19px)', paddingTop: '1%'}}>
        {props.tags?.map((tag, index) => (
          <span className="pill-tag" key={index} style={{padding:'0 8px 0 8px', color:'#626262'}}>
            {tag}
          </span>
        ))}
      </div>
    </CardContainer>
  );
}

export default Card;
