import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PROJECTS } from "../../screens/const";
import AnimatedTxt from "../animatedTxt";
import {
  ProjNavBtn,
  ProjNavCont,
  SideBottomImg,
  SideBottomText,
  SideCenterContainer,
  SideLogo,
  SideNavContainer,
  SideNavMain,
} from "./styled";
import { motion } from "framer-motion";
import {
  FACE_ICONS,
  GIRL_ICONS,
  STAR_ICONS,
} from "../../assets/images/constant";

function SideMenu() {
  const location = useLocation();
  const [locArr, setlocArr] = useState([]);
  useEffect(() => {
    let locaArr = location.pathname.split("/");
    console.log(locaArr);
    setlocArr(locaArr);
  }, [location]);
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const projTitle = () => {
    return PROJECTS[locArr[1]].map((dat) => {
      if (locArr.length >= 3) {
        if (dat.to === locArr[2]) {
          let kk = true;
          console.log(dat.to, " ---", locArr[2]);
          // return <SideBottomText>{dat.title}</SideBottomText>;
          return (
            <motion.div
              style={{ textAlign: "center" }}
              initial="hidden"
              animate={kk ? "visible" : "hidden"}
              variants={container}
            >
              <AnimatedTxt visible={true} words={dat.title} />
            </motion.div>
          );
        }
      }
    });
  };
  return (
    <SideNavMain>
      <SideNavContainer>
        <SideCenterContainer>
          <Link to="/" style={{ textAlign: "center" }}>
            <SideLogo src={require("../../assets/images/logo.png")} />
          </Link>
        </SideCenterContainer>

        <SideCenterContainer>
          {locArr[1] === "" && (
            <SideBottomText
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
            >
              I explore integrating design & theatre arts to consciously create
              experiences.
            </SideBottomText>
          )}
          {locArr[1] === "performative-design" && (
            <SideBottomImg
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              src={FACE_ICONS[5]}
            />
          )}
          {locArr.length === 2 && locArr[1] === "performative-design" && (
            <SideBottomText
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
            >
              Theatre arts has always been my passion. I enjoy tying
              performative elements to my design solutions.
            </SideBottomText>
          )}
          {locArr.length === 3 && locArr[1] === "performative-design" && (
            <div>
              <ProjNavCont>
                {PROJECTS[locArr[1]].map((item, ind) => {
                  return (
                    <Link to={`${locArr[1]}/${item.to}`}>
                      <ProjNavBtn
                        style={{
                          opacity: item.to === locArr[2] ? 1 : 0.5,
                        }}
                      >
                        {ind + 1}
                      </ProjNavBtn>
                    </Link>
                  );
                })}
              </ProjNavCont>
              {projTitle()}
            </div>
          )}

          {/* ux design */}
          {locArr[1] === "user-experience-design" && (
            <SideBottomImg
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              src={GIRL_ICONS[5]}
            />
          )}
          {locArr.length === 2 && locArr[1] === "user-experience-design" && (
            <SideBottomText
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="200"
            >
              I've always cared even for the little events in our everyday life
              to make it a memorable experience, both personally and
              professionally.
            </SideBottomText>
          )}
          {locArr.length === 3 && locArr[1] === "user-experience-design" && (
            <div>
              <ProjNavCont>
                {PROJECTS[locArr[1]].map((item, ind) => {
                  return (
                    <Link to={`${locArr[1]}/${item.to}`}>
                      <ProjNavBtn
                        style={{
                          opacity: item.to === locArr[2] ? 1 : 0.5,
                        }}
                      >
                        {ind + 1}
                      </ProjNavBtn>
                    </Link>
                  );
                })}
              </ProjNavCont>
              {projTitle()}
            </div>
          )}
          {/* my journey */}
          {locArr[1] === "my-journey" && (
            <SideBottomImg
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              src={STAR_ICONS[5]}
            />
          )}
          {locArr.length === 2 && locArr[1] === "my-journey" && (
            <SideBottomText
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="200"
            >
              I cherish the process much bigger than the output. It's where I
              see my learning and growth.
            </SideBottomText>
          )}
          {/* connect */}
          {locArr[1] === "connect" && (
            <SideBottomImg
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              src={require("../../assets/images/active-mail.png")}
            />
          )}
          {locArr.length === 2 && locArr[1] === "connect" && (
            <SideBottomText
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="200"
            >
              I am a people's person, and believe in networking as a medium to
              exchange knowledge.
            </SideBottomText>
          )}
        </SideCenterContainer>
      </SideNavContainer>
    </SideNavMain>
  );
}

export default SideMenu;
