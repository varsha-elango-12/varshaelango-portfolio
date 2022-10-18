import React from "react";
import { motion } from "framer-motion";
import {
  ListImg,
  MediumImg,
  ProjDescSub,
} from "../../screens/performativeDesign/styled";

function AnimatedImageContainer(props) {
  return (
    <>
      <motion.div
        style={{ width: "100%", ...props.contStyle }}
        className={props.contCls}
        layoutId={props.lid}
        animate={{
          transitionEnd: {
            transformOrigin: "center",
          },
        }}
      >
        {props.mediumImg && (
          <MediumImg src={props.imgSrc} onClick={props.setId} />
        )}
        {props.listImg && (
          <ListImg
            className={props.imgCls}
            src={props.imgSrc}
            onClick={props.setId}
          />
        )}
        {props.subTxt && <ProjDescSub>{props.subTxt}</ProjDescSub>}
        {props.subTxtComp}
      </motion.div>
    </>
  );
}

export default AnimatedImageContainer;
