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
  MAIL_ICONS,
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
    // if (window.innerWidth < 800) {
    //   setcurrentFaceIcon(true);
    //   setcurrentGirlIcon(true);
    //   setcurrentMailIcon(true);
    //   setcurrentStarIcon(true);
    // } else {
    // console.log(window.innerWidth, window.innerHeight);
    const ch = setInterval(() => {
      changeImgIndex();
    }, 1000);
    return () => clearInterval(ch);
    // }
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
          <Link
            to="/performative-design"
            className="menu-one icon-link face-icon"
            onMouseEnter={() => {
              setcurrentFaceIcon(true);
            }}
            onMouseLeave={() => {
              setcurrentFaceIcon(false);
            }}
          ></Link>
          <MenuImg
            className="menu-one"
            src={currentFaceIcon ? FACE_ICONS[5] : FACE_ICONS[imgIndex]}
          />

          <motion.div
            className="menu-one-txt"
            initial="hidden"
            animate={
              window.innerWidth < 800
                ? "visible"
                : currentFaceIcon
                ? "visible"
                : "hidden"
            }
            variants={container}
          >
            <AnimatedTxt
              visible={currentFaceIcon}
              words={MainMenuText.menuOne.text}
            />
          </motion.div>
        </ImgContainer>
        <ImgContainer className="mt-13 menu-two-img">
          <Link
            className="menu-two icon-link"
            to="/user-experience-design"
            onMouseEnter={() => {
              setcurrentGirlIcon(true);
            }}
            onMouseLeave={() => {
              setcurrentGirlIcon(false);
            }}
          ></Link>
          <GirlImg
            className="menu-two"
            src={currentGirlIcon ? GIRL_ICONS[5] : GIRL_ICONS[imgIndex]}
          />
          <motion.div
            className="menu-two-txt"
            initial="hidden"
            animate={
              window.innerWidth < 800
                ? "visible"
                : currentGirlIcon
                ? "visible"
                : "hidden"
            }
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
        <ImgContainer className="menu-three-img">
          <Link
            to="/my-journey"
            className="secrow-link menu-three icon-link cv-icon"
            onMouseEnter={() => {
              setcurrentStarIcon(true);
            }}
            onMouseLeave={() => {
              setcurrentStarIcon(false);
            }}
          ></Link>
          <StarImg
            className="menu-three"
            src={currentStarIcon ? STAR_ICONS[5] : STAR_ICONS[imgIndex]}
          />

          <motion.div
            className="menu-three-txt"
            initial="hidden"
            animate={
              window.innerWidth < 800
                ? "visible"
                : currentStarIcon
                ? "visible"
                : "hidden"
            }
            variants={container}
          >
            <AnimatedTxt
              visible={currentStarIcon}
              words={MainMenuText.menuThree.text}
            />
          </motion.div>
        </ImgContainer>
        <ImgContainer className="menu-four-img">
          <Link
            to="/connect"
            className="connect-link menu-four icon-link mail-icon"
            onMouseEnter={() => {
              setcurrentMailIcon(true);
            }}
            onMouseLeave={() => {
              setcurrentMailIcon(false);
            }}
          ></Link>
          <MailImg
            className="menu-four"
            src={currentMailIcon ? MAIL_ICONS[5] : MAIL_ICONS[imgIndex]}
          />
          <motion.div
            className="menu-four-txt"
            initial="hidden"
            animate={
              window.innerWidth < 800
                ? "visible"
                : currentMailIcon
                ? "visible"
                : "hidden"
            }
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
