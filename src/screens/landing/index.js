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
import SEO from "../../components/seo";

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
    <>
      <SEO
        title="Varsha Elango — Product & UX Designer in London"
        description="Varsha Elango is a Product and UX Designer in London at Altrata, creating clear, scalable digital systems, research-led products, and performative design work."
      />
      <LandingContainer>
        <section className="visually-hidden" aria-labelledby="landing-title">
          <h1 id="landing-title">Varsha Elango — Product &amp; UX Designer in London</h1>
          <p>
            Product Designer at Altrata, with an MA in User Experience Design from UAL's London College of Communication. I design clear, scalable digital systems and explore storytelling, theatre, performance, and tangible artefacts.
          </p>
        </section>
      <LRowContainer>
        <ImgContainer className="menu-two-img">
          <Link
            className="menu-two icon-link"
            to="/user-experience-design"
            aria-label="Explore user experience design projects"
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
            alt="User experience design"
          />
          <motion.div
            className="menu-two-txt"
            initial="hidden"
            animate={
              window.innerWidth <= 1100
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
        <ImgContainer className="menu-one-img">
          <Link
            to="/performative-design"
            className="menu-one icon-link face-icon"
            aria-label="Explore performative design projects"
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
            alt="Performative design"
          />

          <motion.div
            className="menu-one-txt"
            initial="hidden"
            animate={
              window.innerWidth <= 1100
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
      </LRowContainer>
      <LRowContainer>
        <ImgContainer className="menu-three-img">
          {/* <Link
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
          /> */}
          <a
            href={`${process.env.PUBLIC_URL}/varsha_elango_resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="secrow-link menu-three icon-link cv-icon"
            aria-label="Open Varsha Elango's resume"
            onMouseEnter={() => {
              setcurrentStarIcon(true);
            }}
            onMouseLeave={() => {
              setcurrentStarIcon(false);
            }}
          >
            <StarImg
              className="menu-three"
              src={currentStarIcon ? STAR_ICONS[5] : STAR_ICONS[imgIndex]}
              alt="Varsha Elango's resume"
            />
          </a>

          <motion.div
            className="menu-three-txt"
            initial="hidden"
            animate={
              window.innerWidth <= 1100
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
            aria-label="Contact Varsha Elango"
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
            alt="Contact Varsha Elango"
          />
          <motion.div
            className="menu-four-txt"
            initial="hidden"
            animate={
              window.innerWidth <= 1100
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
    </>
  );
}

export default Landing;
