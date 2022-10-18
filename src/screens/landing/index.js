import React, { useEffect, useState } from "react";
import {
  ImgContainer,
  MenuImg,
  LRowContainer,
  GirlImg,
  StarImg,
  MailImg,
  LandingContainer,
} from "./styled";
import "./style.css";
import {
  FACE_ICONS,
  GIRL_ICONS,
  STAR_ICONS,
} from "../../assets/images/constant";
import AnimatedTxt from "../../components/animatedTxt";
import { MainMenuText } from "../../components/constant";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Landing(props) {
  const [imgIndex, setimgIndex] = useState(0);
  const [currentFaceIcon, setcurrentFaceIcon] = useState(false);
  const [currentGirlIcon, setcurrentGirlIcon] = useState(false);
  const [currentStarIcon, setcurrentStarIcon] = useState(false);
  const [currentMailIcon, setcurrentMailIcon] = useState(false);

  const changeImgIndex = () => {
    // console.log(imgIndex, FACE_ICONS.length);

    if (imgIndex < 4) {
      let ind = imgIndex + 1;
      setimgIndex(ind);
    } else {
      setimgIndex(0);
    }
  };
  useEffect(() => {
    if (window.innerWidth < 800) {
      setcurrentFaceIcon(true);
      setcurrentGirlIcon(true);
      setcurrentMailIcon(true);
      setcurrentStarIcon(true);
    } else {
      // console.log(window.innerWidth, window.innerHeight);
      const ch = setInterval(() => {
        changeImgIndex();
      }, 1000);
      return () => clearInterval(ch);
    }
  }, [imgIndex]);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  //   console.log(MainMenuText.menuOne.text.split(""));

  return (
    <LandingContainer>
      <LRowContainer>
        <ImgContainer>
          <Link to="/performative-design">
            <MenuImg
              src={currentFaceIcon ? FACE_ICONS[5] : FACE_ICONS[imgIndex]}
              onMouseEnter={() => {
                setcurrentFaceIcon(true);
              }}
              onMouseLeave={() => {
                setcurrentFaceIcon(false);
              }}
            />
          </Link>

          <motion.div
            className="menu-one-txt"
            initial="hidden"
            animate={currentFaceIcon ? "visible" : "hidden"}
            variants={container}
          >
            <AnimatedTxt
              visible={currentFaceIcon}
              words={MainMenuText.menuOne.text}
            />
          </motion.div>
        </ImgContainer>
        <ImgContainer className="mt-13">
          <Link to="/user-experience-design">
            <GirlImg
              src={currentGirlIcon ? GIRL_ICONS[5] : GIRL_ICONS[imgIndex]}
              onMouseEnter={() => {
                setcurrentGirlIcon(true);
              }}
              onMouseLeave={() => {
                setcurrentGirlIcon(false);
              }}
            />
          </Link>
          <motion.div
            className="menu-two-txt"
            initial="hidden"
            animate={currentGirlIcon ? "visible" : "hidden"}
            variants={container}
          >
            <AnimatedTxt
              visible={currentGirlIcon}
              words={MainMenuText.menuTwo.text}
            />
          </motion.div>
        </ImgContainer>
      </LRowContainer>
      <LRowContainer>
        <ImgContainer>
          <Link to="/my-journey" className="secrow-link">
            <StarImg
              src={currentStarIcon ? STAR_ICONS[5] : STAR_ICONS[imgIndex]}
              onMouseEnter={() => {
                setcurrentStarIcon(true);
              }}
              onMouseLeave={() => {
                setcurrentStarIcon(false);
              }}
            />
          </Link>

          <motion.div
            className="menu-three-txt"
            initial="hidden"
            animate={currentStarIcon ? "visible" : "hidden"}
            variants={container}
          >
            <AnimatedTxt
              visible={currentStarIcon}
              words={MainMenuText.menuThree.text}
            />
          </motion.div>
        </ImgContainer>
        <ImgContainer>
          <Link to="/connect" className="connect-link">
            <MailImg
              src={
                currentMailIcon
                  ? require("../../assets/images/active-mail.png")
                  : require("../../assets/images/mail.png")
              }
              onMouseEnter={() => {
                setcurrentMailIcon(true);
              }}
              onMouseLeave={() => {
                setcurrentMailIcon(false);
              }}
            />
          </Link>
          <motion.div
            className="menu-four-txt"
            initial="hidden"
            animate={currentMailIcon ? "visible" : "hidden"}
            variants={container}
          >
            <AnimatedTxt
              visible={currentMailIcon}
              words={MainMenuText.menuFour.text}
            />
          </motion.div>
        </ImgContainer>
      </LRowContainer>
    </LandingContainer>
  );
}

export default Landing;
