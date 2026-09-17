import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PROJECTS } from "../../screens/const";
import AnimatedTxt from "../animatedTxt";
import {
  PB,
  PEBI,
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
import AOS from "aos";
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
  useEffect(() => {
    AOS.refreshHard();
  }, [locArr]);
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
              className="full-w"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
            >
              <PB>
                Clarity by design.
                <br />
                Intent by choice.
              </PB>
              <span className="side-description">
                Product Designer at Altrata, making complex, data driven systems clear 
                and scalable. I believe less is more, even in dense products, because 
                there's always a human behind the platform who deserves simplicity. 
                My practice extends into storytelling, performance and tangible artefacts.
              </span>
            </SideBottomText>
          )}
          {locArr[1] === "performative-design" && (
            <Link to="/performative-design">
              <SideBottomImg
                className="hcl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-anchor-placement="top-bottom"
                src={FACE_ICONS[5]}
              />
            </Link>
          )}
          {locArr.length === 2 && locArr[1] === "performative-design" && (
            <SideBottomText
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
            >
              Design as a performance. Work that uses the body, the space and the 
              audience to carry an idea.
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
            <Link to="/user-experience-design">
              <SideBottomImg
                className="grl-img hcl connect-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-anchor-placement="top-bottom"
                src={GIRL_ICONS[5]}
              />
            </Link>
          )}
          {locArr.length === 2 && locArr[1] === "user-experience-design" && (
            <SideBottomText
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="200"
            >
              Complex systems, made simple. Projects across shipped enterprise 
              platforms, speculative briefs, and public interventions.
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
              className="connect-img"
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
              I cherish the <PEBI>process</PEBI> much bigger than the output.
              It's where I see my <PEBI>learning and growth.</PEBI>
            </SideBottomText>
          )}
          {/* connect */}
          {locArr[1] === "connect" && (
            <SideBottomImg
              className="connect-img"
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
              The bird is real, and waiting. Say hello.
            </SideBottomText>
          )}
        </SideCenterContainer>
      </SideNavContainer>
    </SideNavMain>
  );
}

export default SideMenu;
