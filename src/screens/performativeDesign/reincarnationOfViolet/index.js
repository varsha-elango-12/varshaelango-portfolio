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
  SBTxt,
  SingleProjectContainer,
  SubTitleThree,
  TitleThree,
  TitleTwo,
  SubDesc,
  ImgContainerTwo,
  VideoContSubTxt,
  VideoCont,
  FlexCol,
  BoldITxt,
  MediumImgTop,
} from "../styled";
import "../style.css";
import {
  LeftCaret,
  ModalText,
  PDBg,
  RightCaret,
  VideoFrame,
} from "../../common-styled";
import { imageDetails } from "./imageDetails";
import AnimatedImageContainer from "../../../components/animatedImageContainer";

function ReincarnationOfViolet() {
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
            <ProjTitle style={{ color: COLORS.TEXT_COLOR[800] }}>
              1. Reincarnation of Violet
            </ProjTitle>
            <FlexThree className="top-cont">
              <FlexCol>
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[800] }}>
                  In collaboration with{" "}
                  <a href="/" style={{ textDecoration: "underline" }}>
                    <SBTxt>Violet Disruption</SBTxt>
                  </a>
                  , the latest mixed-reality incarnation of an unofficial deity
                  who has <BoldTxt>survived sexual violence</BoldTxt>, we had to
                  design a way for people to embody and enact the outer
                  appearance of this digital avatar. <br /> Our constraint was
                  we include{" "}
                  <BoldITxt>
                    both physical and digital elements in the design,
                  </BoldITxt>{" "}
                  by involving the character of Violet.
                </ProjDesc>
                <MITxt style={{ color: COLORS.TEXT_COLOR[800] }}>
                  MA UX_ 1 week_Group project_2022 <br /> Teammates: Effy, Mu
                  Lin, Zhihan
                </MITxt>
              </FlexCol>

              <div>
                <MediumImgTop
                  src={require("../../../assets/images/ProjectTypes/reincarnationofViolet/reincarnation.png")}
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
              <TitleThree>
                Body Storming to <br /> express emotions
              </TitleThree>
              <SubTitleThree>Research method</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                From ideating different concepts to explore, we chose expressing
                emotions like{" "}
                <BoldTxt>
                  frustration, tension, fear, and anger as a way of liberation
                  for Violet.
                </BoldTxt>{" "}
              </ProjDesc>
              <ProjDesc>
                We used body storming by covering our heads and acting out ways
                to express our frustration, tension, anger, etc. The action of
                stamping and banging the floor, crushing clothes and screaming
                were found repetitive in most actions. We picked the same
                elements to be reflected in our design as a way of liberation
                for Violet.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer
            style={{ paddingTop: 0 }}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer>
                {Array(4)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 1;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/reincarnationofViolet/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>

              <SubDesc>Images during storming</SubDesc>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Brain storming for digital element </TitleThree>
              <SubTitleThree>Conceptualisation</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                From brain storming various ideas, we decided to{" "}
                <BoldTxt>
                  express liberation digitally while physically expressing other
                  emotions.
                </BoldTxt>
                Our idea was to translate the avatar on the floor in form of
                digital colorful patterns symbolising liberation as we move over
                and express rage, personifying Violet.
              </ProjDesc>
              <div style={{ width: "50%" }}>
                {/* <MediumImg
                  src={require("../../../assets/images/ProjectTypes/reincarnationofViolet/img5.png")}
                /> */}
                <AnimatedImageContainer
                  lid={5}
                  imgSrc={require(`../../../assets/images/ProjectTypes/reincarnationofViolet/img${5}.png`)}
                  setId={() => {
                    setSelectedId(5);
                    setSelectedText(imageDetails[5].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
              </div>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Making with materials </TitleThree>
              <SubTitleThree>Spontaneous exploration </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                For the physical element, we designed 4 suits that help express
                each action like hitting, crushing, squeezing and tearing.{" "}
                <BoldTxt>Bubble wrap</BoldTxt> material was chosen as the base
                for all of them as it metaphorically signifies protection for
                the person as they might hurt themselves by expressing emotions.
                For the digital part, we used <BoldTxt>generative art</BoldTxt>
                on P5j to get the sound input from actions and produce the
                colorful flowy patterns as the output. We agreed to stage a
                performance where we express the emotions wearing costumes and
                later ask volunteers to try the same.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer>
                {Array(4)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 6;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/reincarnationofViolet/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>
                Making costumes that enhances expressing emotions
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>
          {/*  */}
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Final concept</TitleThree>
              <SubTitleThree>after Trial & error</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                As discussing our ideas with the tutors, we realized a few
                loopholes like, how can a{" "}
                <BoldTxt>volunteer feel rage just by asking to feel it</BoldTxt>
                , whether the costumes would help or restrict a person’s
                expressions, and can the digital graphics be simplified as a
                result of a heavy emotions. While modifying the concept, we
                decided on an <BoldTxt>visually embodied performance</BoldTxt>{" "}
                where I enacted the emotional journey of Violet on a large white
                cloth that dramatically grows into a colorful flowy land of
                liberation, digitally, as the movements get intense. We worked
                on a simple yet elegant bubble wrap dress to be worn by me and
                be self destroyed while expressing frustration/rage/anger etc.{" "}
                <br /> <br /> We projected the digital avatar from the first
                floor to the ground floor as I performed on a white cloth. The
                play lasted for about 2 minutes with a poetic introduction
                spoken aloud by another team member.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <ImgContainerTwo data-aos="fade-up">
            {Array(6)
              .fill("")
              .map((x, i) => {
                let ind = i + 10;
                return (
                  <AnimatedImageContainer
                    lid={ind}
                    imgSrc={require(`../../../assets/images/ProjectTypes/reincarnationofViolet/img${ind}.png`)}
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
            lid={16}
            imgSrc={require(`../../../assets/images/ProjectTypes/reincarnationofViolet/img${16}.png`)}
            setId={() => {
              setSelectedId(16);
              setSelectedText(imageDetails[16].desc);
            }}
            mediumImg={true}
          ></AnimatedImageContainer>
          <ImgContainerTwo className="grid-2-1-1" data-aos="fade-up">
            {Array(3)
              .fill("")
              .map((x, i) => {
                let ind = i + 17;
                return (
                  <AnimatedImageContainer
                    lid={ind}
                    imgSrc={require(`../../../assets/images/ProjectTypes/reincarnationofViolet/img${ind}.png`)}
                    setId={() => {
                      setSelectedId(ind);
                      setSelectedText(imageDetails[ind].desc);
                    }}
                    mediumImg={true}
                  ></AnimatedImageContainer>
                );
              })}
          </ImgContainerTwo>
          {/* video container */}
          <VideoCont data-aos="fade-up">
            <VideoFrame
              src="https://www.youtube.com/embed/TMjuZqJ62qI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <VideoContSubTxt>
              Final Performance: Photo credits- Dr.John Fass (Course Leader, MA
              UX, LCC, UAL)
              <br /> Video Credits- Dany Gracia- Solano, Bipasha Ray, Ramya
              Sekar (Batchmates in MA UX, LCC, UAL)
            </VideoContSubTxt>
          </VideoCont>

          <FlexRowContainer data-aos="fade-up" data-aos-anchor="bottom-top">
            <FlexOne>
              <TitleThree>Scope to improve</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                The overall experience brought in a massive impact for the
                viewers as they could sympathize with the character in the
                space. The constructive feedback was to simplify the digital
                feedback on the floor to emphasis each physical action rather
                than the flowy colorful patterns.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
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
                  src={require(`../../../assets/images/ProjectTypes/reincarnationofViolet/img${selectedId}.png`)}
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
                      opacity: selectedId >= 19 ? 0.5 : 1,
                    }}
                    src={require(`../../../assets/images/caret.png`)}
                    onClick={() =>
                      selectedId < 19 &&
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

export default ReincarnationOfViolet;
