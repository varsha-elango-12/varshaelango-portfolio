import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { COLORS } from "../../../assets/styles/constant";
import {
  BoldTxt,
  FlexOne,
  FlexRowContainer,
  FlexThree,
  FlexTwo,
  ImgContainer,
  MITxt,
  ProjDesc,
  ProjTitle,
  SingleProjectContainer,
  SubTitleThree,
  TitleThree,
  TitleTwo,
  SubDesc,
  ImgContainerTwo,
  VideoContSubTxt,
  VideoCont,
  FlexCol,
  MediumImgTop,
} from "../styled";
import "../style.css";
import { LeftCaret, ModalText, PDBg, RightCaret } from "../../common-styled";
import AnimatedImageContainer from "../../../components/animatedImageContainer";
import { imageDetails } from "./imageDetails";

function CanSkinStarveForATouch() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PDBg>
      <AnimateSharedLayout type="crossfade">
        <SingleProjectContainer>
          <FlexRowContainer data-aos="fade-up">
            <ProjTitle style={{ color: COLORS.TEXT_COLOR[600] }}>
              3. Can skin starve for a touch?
            </ProjTitle>
            <FlexThree className="top-cont">
              <FlexCol>
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[600] }}>
                  Design a way to{" "}
                  <BoldTxt>express the skin/world interface.</BoldTxt>
                </ProjDesc>
                <MITxt style={{ color: COLORS.TEXT_COLOR[600] }}>
                  MA UX_ 2 week_ Group Project_2021 <br /> Teammates: Lara,
                  Amber, Boxun, Kristen, Yixi
                </MITxt>
              </FlexCol>
              <div>
                <MediumImgTop
                  src={require("../../../assets/images/ProjectTypes/canSkin/canSkin.png")}
                />
              </div>
            </FlexThree>
          </FlexRowContainer>
          {/* second row */}
          <TitleTwo data-aos="fade-up" data-aos-delay="300">
            Process
          </TitleTwo>
          <FlexRowContainer data-aos="fade-up" data-aos-delay="500">
            <FlexOne>
              <TitleThree>Brainstorming</TitleThree>
              <SubTitleThree>About skin and it's significance</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We started by putting down various significance of skin from
                multiple domains like cultural,{" "}
                <BoldTxt>fashion, emotional and physical aspects</BoldTxt>.
                Amongst all, we chose <BoldTxt>‘Memory of Skin’</BoldTxt> to dig
                deeper.
              </ProjDesc>
              <div className="w-80">
                {/* <MediumImg
                  src={require("../../../assets/images/ProjectTypes/canSkin/img0.png")}
                /> */}
                <AnimatedImageContainer
                  lid={1}
                  imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${1}.png`)}
                  setId={() => {
                    setSelectedId(1);
                    setSelectedText(imageDetails[1].desc);
                  }}
                  mediumImg={true}
                  subTxt="Brainstorming on Miro board"
                ></AnimatedImageContainer>
                {/* <SubDesc>Brainstorming on Miro board</SubDesc> */}
              </div>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Exhibition </TitleThree>
              <SubTitleThree>visit Inspirations</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We visited <BoldTxt>Ron Mueck’s</BoldTxt> exhibition on
                sculptures exposing the
                <BoldTxt>skin and body</BoldTxt> to represent Shakespear’s
                stages of life at London Ely house to gain{" "}
                <BoldTxt>some inspirations</BoldTxt>. The level of intricacy,
                textures, colour tones, etc were so accurate. It was slightly
                disturbing to see animal skins exposed over human skins,
                especially with exaggeration in sizes.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="cs-grid-1">
                {Array(4)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 2;
                    return (
                      // <motion.div layoutId={ind}>
                      //   <ListImg
                      //     className="cs-grid-img"
                      //     src={require(`../../../assets/images/ProjectTypes/canSkin/img${ind}.png`)}
                      //     onClick={() => setSelectedId(ind)}
                      //   />
                      // </motion.div>
                      <AnimatedImageContainer
                        imgCls="cs-grid-img"
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>At Ron Mueck’s exhibition</SubDesc>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Ideation</TitleThree>
              <SubTitleThree>Narrowing down</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                From ideation, we inclined to focus on{" "}
                <BoldTxt>
                  how our skin feels differently when touched by different
                  people
                </BoldTxt>
                . For example, how we are comfortable when our partner/ friends
                hold our hands over a random stranger trying to hold them. It
                was interesting to see how psychologically our brain sends
                signals to our skin to accept or deny a touch. We ideated on
                building experience on the same.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Ideating with materials</TitleThree>
              <SubTitleThree>Concept building</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We explored <BoldTxt>different materials</BoldTxt> to{" "}
                <BoldTxt>represent</BoldTxt> different kinds of
                <BoldTxt>touches</BoldTxt>. Materials that are soft, warm and
                inviting like{" "}
                <BoldTxt>cotton, wool can represent a loving</BoldTxt> touch
                while rough, porky ones like
                <BoldTxt>
                  wires, pins can represent uncomfortable strangers’
                </BoldTxt>{" "}
                touches. Touch from intermediate groups like{" "}
                <BoldTxt>friends or family</BoldTxt> were related with materials
                like <BoldTxt>sponge, sand paper, cardboard,</BoldTxt> etc. We
                decided to make three suits to be worn on a mannequin, one over
                the other, based on different body parts and touches and let our
                user touch, remove and interact with it.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Speed Dating</TitleThree>
              <SubTitleThree>
                Research method to gain an outsider's perspective
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We were slightly doubtful about the idea and it’s depth of
                knowledge in our concept. Due to time restrictions, we kept with
                the plan. We storyboarded slight variations in the idea for
                speed dating. The speed dating ideas included making three
                gloves for three touches on the same body or making three body
                suits representing body reactions for each touch. As the
                responses from users suggested{" "}
                <BoldTxt>three suits over three gloves,</BoldTxt> we decided to
                test with suits for week 1.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="grid-1-1-1-105">
                {Array(4)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 6;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Speed dating, Building the suits</SubDesc>
            </FlexThree>
          </FlexRowContainer>
          {/*  */}
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Mid-week presentation</TitleThree>
              <SubTitleThree>
                and feedback to improve the final concept
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We had volunteers role-playing as a lover, partner and stranger,
                and interact with the mannequin. As a result of the change in
                roles, we kept removing the layer from outside to inside, and
                kept the lover layer naked making it raw and real. Our
                constructive feedback was to{" "}
                <BoldTxt>
                  move away from literal translations to abstract
                  representations,
                </BoldTxt>{" "}
                narrowing down to <BoldTxt>one type of touch,</BoldTxt> to{" "}
                <BoldTxt>consider the role of consent</BoldTxt> coming into
                play, etc.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="grid-1-1-2-1">
                {Array(3)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 10;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Volunteers interacting with the mannequin</SubDesc>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Refining the concept</TitleThree>
              <SubTitleThree>Based on feedback</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We focused only on loving touch from now on. By role playing
                amongst ourselves to express love with touch,{" "}
                <BoldTxt>hugs</BoldTxt> were the
                <BoldTxt>repetitive output</BoldTxt>. We pondered on how{" "}
                <BoldTxt>absence of a loving</BoldTxt> touch can create a{" "}
                <BoldTxt>starvation</BoldTxt> of touch to oneself, in regard
                with pandemic. How can our skin remember such touch and yearn
                for one? Can our skin be satisfied with extended hugs? We liked
                the questions that arose and decided to share the concept of
                extended skin and it’s interactions as our final concept.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>AEIOU</TitleThree>
              <SubTitleThree>
                Research method to situate our concept
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We used the ‘AEIOU’ research method to ensure{" "}
                <BoldTxt>
                  defining all possible factors along the scenario.
                </BoldTxt>
              </ProjDesc>
              <div className="w-50">
                <AnimatedImageContainer
                  lid={13}
                  imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${13}.png`)}
                  setId={() => {
                    setSelectedId(13);
                    setSelectedText(imageDetails[13].desc);
                  }}
                  listImg={true}
                ></AnimatedImageContainer>
              </div>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Inspiration</TitleThree>
              <SubTitleThree>Research method</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Considering extended skin, we came across{" "}
                <BoldTxt>‘Man and art figure’</BoldTxt>
                from the theatre of the{" "}
                <BoldTxt>Bauhaus by Oskar Schlemmer.</BoldTxt> Oskar had
                reflected the history of theatre as the transfiguration of the
                human body with elements such as forms, shapes, materials,
                colours, costumes, etc. There have been plays performed by
                artists wearing costumes that transform the human body. This was
                our inspiration to make our{" "}
                <BoldTxt>extended skin/body</BoldTxt> and create a stage play
                that portrays some of the{" "}
                <BoldTxt>physical interactions</BoldTxt> we have in our{" "}
                <BoldTxt>daily lives</BoldTxt> like handshake, hug, kiss, etc.
              </ProjDesc>
              <div className="w-80">
                <AnimatedImageContainer
                  imgCls="img-h30"
                  lid={14}
                  imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${14}.png`)}
                  setId={() => {
                    setSelectedId(14);
                    setSelectedText(imageDetails[14].desc);
                  }}
                  listImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc>
                Costums by Oskar Schlemmer (Bauhaus) for Ballet triadique
              </SubDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Making with materials</TitleThree>
              <SubTitleThree>Exploration</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We designed four unique costumes that emphasise different kinds
                of materials like balloons, steel, paper and cloth. To design
                the costumes, suitable junk around the studios was collected and
                we kept playing around with each of us to see how we transformed
                one’s body. We finalised the looks and made the four costumes to
                be performed with. We then choreographed our moves to present on
                stage with the Piano Music of the Bauhaus from Steffen
                Schleiermacher in 1999 as it suited the theme and movements.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>{" "}
          <FlexRowContainer data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="cst">
                {Array(5)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 15;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Prototyping costumes for extended skin</SubDesc>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Interactive theatre play</TitleThree>
              <SubTitleThree>Final performance</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Our performance included interactions amongst ourselves firstly.
                Finally, we moved to the audience and interacted with them which
                was spontaneous and a moment of surprise. The glad part being,
                all the costumes turned out to be a wealth out of waste
                materials.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <ImgContainerTwo className="cst-grid-1" data-aos="fade-up">
            {Array(3)
              .fill("")
              .map((x, i) => {
                let ind = i + 20;
                return (
                  <AnimatedImageContainer
                    lid={ind}
                    imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${ind}.png`)}
                    setId={() => {
                      setSelectedId(ind);
                      setSelectedText(imageDetails[ind].desc);
                    }}
                    mediumImg={true}
                  ></AnimatedImageContainer>
                );
              })}
          </ImgContainerTwo>
          <AnimatedImageContainer
            data-aos="fade-up"
            lid={23}
            imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${23}.png`)}
            setId={() => {
              setSelectedId(23);
              setSelectedText(imageDetails[23].desc);
            }}
            mediumImg={true}
          ></AnimatedImageContainer>
          <ImgContainerTwo
            style={{ gridTemplateColumns: "1fr 1fr" }}
            data-aos="fade-up"
          >
            <AnimatedImageContainer
              lid={24}
              imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${24}.png`)}
              setId={() => {
                setSelectedId(24);
                setSelectedText(imageDetails[24].desc);
              }}
              mediumImg={true}
            ></AnimatedImageContainer>
            <AnimatedImageContainer
              lid={25}
              imgSrc={require(`../../../assets/images/ProjectTypes/canSkin/img${25}.png`)}
              setId={() => {
                setSelectedId(25);
                setSelectedText(imageDetails[25].desc);
              }}
              mediumImg={true}
            ></AnimatedImageContainer>
          </ImgContainerTwo>
          <VideoCont data-aos="fade-up" data-aos-anchor="bottom-top">
            <VideoContSubTxt>
              Final Performance: Photo credits- Dr.John Fass (Course Leader, MA
              UX, LCC, UAL)
            </VideoContSubTxt>
          </VideoCont>
          {/*  */}
        </SingleProjectContainer>
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                key="modal"
                modalOpen={selectedId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                className="pop-up-modal"

                // onClick={() => setSelectedId(null)}
              >
                <div
                  className="pop-up-overlay"
                  onClick={() => setSelectedId(null)}
                ></div>
                <motion.img
                  className="full-pop-image"
                  src={require(`../../../assets/images/ProjectTypes/canSkin/img${selectedId}.png`)}
                  layoutId={selectedId}
                />
                <motion.div class="pop-up-base-container">
                  <LeftCaret
                    style={{
                      opacity: selectedId <= 1 ? 0.5 : 1,
                    }}
                    src={require(`../../../assets/images/caret.png`)}
                    onClick={() =>
                      selectedId >= 1 &&
                      (setSelectedId(parseFloat(selectedId) - 1),
                      setSelectedText(imageDetails[selectedId - 1].desc))
                    }
                  />
                  <ModalText>{selectedText}</ModalText>
                  <RightCaret
                    style={{
                      opacity: selectedId >= 24 ? 0.5 : 1,
                    }}
                    src={require(`../../../assets/images/caret.png`)}
                    onClick={() =>
                      selectedId < 24 &&
                      (setSelectedId(parseFloat(selectedId) + 1),
                      setSelectedText(imageDetails[selectedId + 1].desc))
                    }
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </PDBg>
  );
}

export default CanSkinStarveForATouch;
