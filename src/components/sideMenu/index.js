import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PROJECTS } from "../../screens/const";
import AnimatedTxt from "../animatedTxt";
import {
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
              className="full-w"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
            >
              I explore coalescing <PEBI>design and theatre arts</PEBI> in
              creating mindful user experiences.
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
              Theatre arts has always been my big passion. I enjoy tying
              <PEBI> performative</PEBI> elements to my <PEBI>design</PEBI>{" "}
              solutions.
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
              I see <PEBI>user experience design</PEBI> as an opportunity to
              enliven even the simplest interaction in a day for a user.
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
              I am a people's person, and believe in <PEBI>networking</PEBI> as
              a medium to exchange knowledge.
            </SideBottomText>
          )}
        </SideCenterContainer>
      </SideNavContainer>
    </SideNavMain>
  );
}

export default SideMenu;
