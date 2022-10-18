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
  ImgContainerTwo,
  VideoCont,
  MediumImgTop,
  FlexCol,
  ProjDescSub,
} from "../styled";
import "../style.css";
import {
  LeftCaret,
  ModalText,
  PDBg,
  RightCaret,
  VideoFrame,
} from "../../common-styled";
import AnimatedImageContainer from "../../../components/animatedImageContainer";
import { imageDetails } from "./imageDetails";

function FormlessEmotion() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const returnImgSubFunc = (i) => {
    switch (i) {
      case 2:
        return (
          <ProjDescSub>
            <BoldTxt>River- Happy </BoldTxt> <br />
            (freely moving)
          </ProjDescSub>
        );
      case 3:
        return (
          <ProjDescSub>
            <BoldTxt>Water falls- Anger </BoldTxt> <br />
            (forceful fall)
          </ProjDescSub>
        );
      case 4:
        return (
          <ProjDescSub>
            <BoldTxt>Ocean- Fear </BoldTxt> <br />
            (to and fro of waves)
          </ProjDescSub>
        );
      case 5:
        return (
          <ProjDescSub>
            <BoldTxt>Lake- Sad</BoldTxt> <br />
            (stillness)
          </ProjDescSub>
        );
      case 6:
        return (
          <ProjDescSub>
            <BoldTxt>Rain- Surprise </BoldTxt> <br />
            (Sudden pour)
          </ProjDescSub>
        );
      case 7:
        return (
          <ProjDescSub>
            The filter sheet manually rotated in front of the light source for
            change in emotions
          </ProjDescSub>
        );
      case 8:
        return (
          <ProjDescSub>Color psychology based on human emotions</ProjDescSub>
        );
      case 9:
        return <ProjDescSub className="float-txt">River</ProjDescSub>;
      case 10:
        return <ProjDescSub className="float-txt1">Water Falls</ProjDescSub>;
      case 11:
        return <ProjDescSub className="float-txt2">Ocean</ProjDescSub>;
      case 12:
        return <ProjDescSub className="float-txt">Lake</ProjDescSub>;
      case 13:
        return <ProjDescSub className="float-txt">Rain</ProjDescSub>;
      default:
        break;
    }
  };

  return (
    <PDBg>
      <AnimateSharedLayout type="crossfade">
        <SingleProjectContainer>
          <FlexRowContainer data-aos="fade-up">
            <ProjTitle style={{ color: COLORS.TEXT_COLOR[700] }}>
              2. The Formless Emotion
            </ProjTitle>
            <FlexThree className="top-cont">
              <FlexCol>
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[700] }}>
                  An open call competition on{" "}
                  <BoldTxt>'Paani ki Kahani'/ 'Stories of Water'</BoldTxt>,
                  conducted by Living Waters Museums, India.
                </ProjDesc>
                <MITxt style={{ color: COLORS.TEXT_COLOR[700] }}>
                  Competition Entry_Solo performance_2021 <br /> Camera handle:
                  Ranchana Elango
                </MITxt>
              </FlexCol>
              <div>
                <MediumImgTop
                  src={require("../../../assets/images/ProjectTypes/theFormlessEmotions/theFormlessEmotion.png")}
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
              <TitleThree>Random observation got me thinking</TitleThree>
              <SubTitleThree>Idea generation</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                One day, I was watching the news about how the increase in
                rainfall led to increase in waterfalls at Courtallam, Tamil
                Nadu, India, on the television. The force and speed of the
                waterfalls scared me. It felt like the{" "}
                <BoldTxt>
                  waterfalls was screaming and shouting in anger
                </BoldTxt>
                . This got me thinking about how the{" "}
                <BoldTxt>water bodies and their nature</BoldTxt> can be related
                to <BoldTxt>expressing emotions</BoldTxt>.
              </ProjDesc>
              <div className="fe-w72">
                <AnimatedImageContainer
                  lid={1}
                  imgSrc={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${1}.png`)}
                  setId={() => {
                    setSelectedId(1);
                    setSelectedText(imageDetails[1].desc);
                  }}
                  mediumImg={true}
                  subTxt="The flooding waterfalls"
                ></AnimatedImageContainer>
              </div>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Conceptualisation</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                I translated the same concept onto other water bodies to compare
                their nature with various human emotions. They were,
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="fe-grid-1">
                {Array(5)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 2;
                    return (
                      // <motion.div layoutId={ind}>
                      //   <ListImg
                      //     src={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${ind}.png`)}
                      //     onClick={() => setSelectedId(ind)}
                      //   />
                      //   {returnImgSubFunc(ind)}
                      // </motion.div>
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                        subTxtComp={returnImgSubFunc(ind)}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexTwo>
              <ProjDesc>
                Having picked these five water bodies and emotions, I started
                brainstorming ways to communicate this concept. What stood out
                of various ideas was a performance as both water bodies and
                human emotions had the{" "}
                <BoldTxt>dynamic and performative nature to it</BoldTxt>. With
                my passion in theatre arts, I wanted to attempt showcasing this
                piece as a <BoldTxt>film</BoldTxt> to be communicated widely,
                yet shot as a{" "}
                <BoldTxt>theatre act, with just a single frame shot.</BoldTxt>
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Layers in the performance </TitleThree>
              <SubTitleThree>Script, Mise en scene </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                <BoldTxt>Narrative</BoldTxt>- A continuous shot in which I use
                my facial expressions to express the five chosen emotions one
                after the other following the background score. <br />
                <BoldTxt>Background</BoldTxt> music- With no dialogues, the film
                uses sounds of the water bodies, captured in their state of
                being. As the sounds shift, my facial emotions will change
                accordingly. ,<br />
                <BoldTxt>Lights</BoldTxt>- Using color psychology, I have used
                variant lights for each emotions part of the set to support and
                dramatize it.
              </ProjDesc>
              <ImgContainer className="grid-1-1-1">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 7;
                    return (
                      // <motion.div layoutId={ind}>
                      //   <ListImg
                      //     src={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${ind}.png`)}
                      //     onClick={() => setSelectedId(ind)}
                      //   />
                      //   {returnImgSubFunc(ind)}
                      // </motion.div>
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                        subTxtComp={returnImgSubFunc(ind)}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          {/*  */}
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>The Play/ Film</TitleThree>
              <SubTitleThree>Description, Poetry</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc className="sbi-font">
                THE FORMLESS EMOTIONS <br /> <br /> Our lives are filled with
                emotions. Every emotion has the power to shift our lives at any
                level. It can cause a change that may or may not be permanent.
                It can lead to any unexpected results in our lives. Just like
                that, the supreme spirit of water exists in this universe with
                it’s varying emotions, which alters its nature of existence, in
                turn affecting the nature of the environment around it.
                <br />
                <br /> I’ve portrayed those varying emotions of water, by the
                face of water. When there is a change in the emotion, there
                comes a new water body.
                <br /> When happy, the water flows gently as a stream, cuddling
                with the rocks and bushes, with the sounds of mellow.
                <br /> When angry, it falls from heights against the rock as
                waterfalls, thrashing hard creating loud, intimidating sounds.
                <br /> When scared, it takes the form of waves in the ocean,
                which oscillates front and back anxiously out of fear and
                confusion.
                <br /> When sad, it stands still as a lake, least interested to
                be part of the wind’s whirl and the bird’s melody.
                <br /> When surprised, the water dances as the rain that showers
                to the disco lights of lightning and the beats of thunder.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <ImgContainerTwo className="fe-grid-3" data-aos="fade-up">
            {Array(5)
              .fill("")
              .map((x, i) => {
                let ind = i + 9;
                return (
                  // <motion.div layoutId={ind} style={{ position: "relative" }}>
                  //   <MediumImg
                  //     src={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${ind}.png`)}
                  //     onClick={() => setSelectedId(ind)}
                  //   />
                  //   {returnImgSubFunc(ind)}
                  // </motion.div>
                  <AnimatedImageContainer
                    contStyle={{ position: "relative" }}
                    lid={ind}
                    imgSrc={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${ind}.png`)}
                    setId={() => {
                      setSelectedId(ind);
                      setSelectedText(imageDetails[ind].desc);
                    }}
                    mediumImg={true}
                    subTxtComp={returnImgSubFunc(ind)}
                  ></AnimatedImageContainer>
                );
              })}
          </ImgContainerTwo>

          <VideoCont data-aos="fade-up">
            {" "}
            <VideoFrame
              className="fme"
              src="https://www.youtube.com/embed/fzAt7SEZ97k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </VideoCont>

          <FlexRowContainer data-aos="fade-up" data-aos-anchor="bottom-top">
            <FlexOne>
              <TitleThree>Results</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                <BoldTxt>'Formless Emotions'</BoldTxt> was selected as{" "}
                <BoldTxt>'Top 10'</BoldTxt> entries, to be showcased in the{" "}
                <BoldTxt>virtual museum of Living waters museum</BoldTxt>. I had
                also received a cash reward for the same.
                <br /> My humble thanks to the organisers for this wonderful
                opportunity.
              </ProjDesc>
              <ImgContainer className="fe-grid-2">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 14;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        imgCls="bottom-img"
                        mediumImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
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
                  src={require(`../../../assets/images/ProjectTypes/theFormlessEmotions/img${selectedId}.png`)}
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
                      opacity: selectedId >= 15 ? 0.5 : 1,
                    }}
                    src={require(`../../../assets/images/caret.png`)}
                    onClick={() =>
                      selectedId < 15 &&
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

export default FormlessEmotion;
