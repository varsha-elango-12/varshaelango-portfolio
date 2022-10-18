import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { COLORS } from "../../../assets/styles/constant";
import {
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
  FlexCol,
  BoldITxt,
  MediumImgTop,
  MITxt1,
  FlexHalf,
} from "../../performativeDesign/styled";
import "../../performativeDesign/style.css";
import {
  LeftCaret,
  ModalText,
  PDBg,
  RightCaret,
  VideoFrame,
} from "../../common-styled";
import { ImgContCol, ImgContContainer } from "./styled";
import AnimatedImageContainer from "../../../components/animatedImageContainer";
import { imageDetails } from "./imageDetails";

function JustNameless() {
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
            <ProjTitle style={{ color: COLORS.TEXT_COLOR[400] }}>
              1. Just Nameless
            </ProjTitle>
            <FlexThree className="top-cont">
              <FlexCol>
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[400] }}>
                  Design a way to{" "}
                  <BoldITxt>
                    take advantage of other peoples’ digital transactions
                    without them knowing.
                  </BoldITxt>
                </ProjDesc>
                <MITxt style={{ color: COLORS.TEXT_COLOR[400] }}>
                  MA UX_ 5 weeks_ Group Project_ 2022
                  <br /> Teammates: Bea, Malavika, Boxun, Zhe
                </MITxt>
              </FlexCol>

              <div>
                <MediumImgTop
                  src={require("../../../assets/images/ProjectTypes/justNameless/justNameless.png")}
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
              <TitleThree>Brainstorming words</TitleThree>
              <SubTitleThree>
                Everything about digital transactions
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We began brainstorming words related to the brief on Miro which
                helped recalling aspects around it. Simultaneously began
                ideating concepts in terms of ‘What if’ questions and did a
                secondary research on it's possibilities.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer
            style={{ paddingTop: 0 }}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="jn-grid-1">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 1;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        mediumImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>

              <SubDesc>
                Brainstorming and 'What if' ideations on Miro board
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Inspiration Other</TitleThree>
              <SubTitleThree>Design projects </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                A German company sold tampons inside a book to raise awareness
                about the 19% tampon tax in Germany, while books were at 7% tax.
                This kind of intervening in the system and questioning
                unfairness inspired us to explore further.
              </ProjDesc>
              <div style={{ width: "100%" }}>
                <AnimatedImageContainer
                  lid={3}
                  imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${3}.png`)}
                  setId={() => {
                    setSelectedId(3);
                    setSelectedText(imageDetails[3].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
                {/* <MediumImg
                  src={require("../../../assets/images/ProjectTypes/justNameless/img3.png")}
                /> */}
              </div>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Recalling from personal experiences</TitleThree>
              <SubTitleThree>Research method</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We shifted focus to find loopholes in different systems around
                us. 'Which system/ factor in a system angers us?' was the open
                question we were trying to answer, without narrowing down
                initially.
              </ProjDesc>
              <div style={{ width: "100%" }}>
                <AnimatedImageContainer
                  lid={4}
                  imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${4}.png`)}
                  setId={() => {
                    setSelectedId(4);
                    setSelectedText(imageDetails[4].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc>Systems that make us angry</SubDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Narrowing down to one</TitleThree>
              <SubTitleThree>To zoom in</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We picked the concept of contracts/ subscription plans that ties
                one for a fixed period with not all resources completely
                utilised, to explore. <br /> <br /> Examples: A mobile data plan
                always has left over unused data, A coffee subscription plan of
                5 drinks a day from a popular coffee chain in the UK has 1-2
                drinks a day being unused, etc. <br /> <br /> We were inspired
                by the existing pattern of two people secretly sharing one
                coffee subscription, but are still left with 1-2 unused drinks
                in a day. We took advantage of this unused drink by sharing it
                to someone else in need without the company's awareness. We
                designed a system that can collect these unused drinks from
                public and share with the homeless or people in need. We
                generated a temporary QR Code for the original and it worked
                when tested. The image below explains the structure of this
                system working.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="jn-grid-2">
                {Array(3)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 5;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgCls={ind === 7 ? "" : "img-h35"}
                        imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                        subTxt={
                          ind === 5
                            ? "The process to donate the unclaimed drink"
                            : ind === 6
                            ? "Print of the QR code as digital device like phones are not accessible by homeless."
                            : ind === 7
                            ? "Combining the idea with the shelter homes."
                            : "-"
                        }
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Weekly presentations</TitleThree>
              <SubTitleThree>
                Mutual learning with co-students and tutors
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We roleplayed a scene of the working system during presentation.
                The constructive feedback were,
                <br /> - To be specific with the target audience over much
                general as ‘Homeless’.
                <br /> - The branding element in the solution was not convincing
                as this system was more to be underground and subtle.
                <br /> - Expand the scope of intervention onto other similar
                areas.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <VideoFrame
                src="https://www.youtube.com/embed/EufKbYCAVM4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Prototyping ideas</TitleThree>
              <SubTitleThree>Trial and error</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                To narrow down a specific target group, we tested the same
                coffee sharing system within the college students community. We
                saw this as an opportunity to evolve an honor system within a
                community too.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="jn-grid-3">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 8;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${ind}.png`)}
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
                Posters: 1. Formally printed 2. Roughly hand-written.
                <br /> The handwritten one being informal was approached with
                better affordance by the user.
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexTwo>
              <ProjDesc>
                The response was quite surprising. The system slowly began where
                2 -3 people used it on day 1 itself. We didn’t promote it on any
                platform to purposely move slow to match the real-time use of
                codes at stores.
              </ProjDesc>
              <div className="w-36">
                <AnimatedImageContainer
                  lid={10}
                  imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${10}.png`)}
                  setId={() => {
                    setSelectedId(10);
                    setSelectedText(imageDetails[10].desc);
                  }}
                  listImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc className="w-36">
                Sharing their feedback through drawings
              </SubDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Conceptualisation</TitleThree>
              <SubTitleThree>Finalising with one</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Moving forward, we want to expand it to general audience at
                situated places. We came up with 3 outcomes that show how we
                intervene the retail subscription and discount programs to
                extract certain benefit.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <div className="w-100">
                <ImgContContainer>
                  <ImgContCol>
                    <h4>1. SUBSCRIPTION SHARING HONOR SYSTEM</h4>
                    <p className="img-col-desc1">
                      Creating a counterculture from sharing subscriptions or
                      free resources using street art, can be used by any
                      passers-by.
                    </p>
                    <p className="img-col-desc2">
                      Social benefit: Intervening a system to create a sense of
                      community.
                    </p>
                    {/* <img
                      className="mt-auto"
                      src={require("../../../assets/images/ProjectTypes/justNameless/img11.png")}
                    /> */}
                    <AnimatedImageContainer
                      imgCls={"h-auto mt-auto"}
                      style={{ marginTop: "auto" }}
                      lid={11}
                      imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${11}.png`)}
                      setId={() => {
                        setSelectedId(11);
                        setSelectedText(imageDetails[11].desc);
                      }}
                      listImg={true}
                    ></AnimatedImageContainer>

                    <AnimatedImageContainer
                      imgCls={"h-auto"}
                      lid={12}
                      imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${12}.png`)}
                      setId={() => {
                        setSelectedId(12);
                        setSelectedText(imageDetails[12].desc);
                      }}
                      listImg={true}
                    ></AnimatedImageContainer>
                  </ImgContCol>
                  <ImgContCol>
                    <h4>2. STUDENT DISCOUNT ECONOMY</h4>
                    <p className="img-col-desc1">
                      A digital market space (website) where students can sell
                      and buy their unclaimed coupons to others.
                    </p>
                    <p className="img-col-desc2">
                      Financial benefit: Creating an underground economy based
                      on student discounts & perks.
                    </p>
                    <AnimatedImageContainer
                      imgCls={"h-auto "}
                      contCls={"mt-auto"}
                      lid={13}
                      style={{ marginTop: "auto" }}
                      imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${13}.png`)}
                      setId={() => {
                        setSelectedId(13);
                        setSelectedText(imageDetails[13].desc);
                      }}
                      listImg={true}
                    ></AnimatedImageContainer>
                    <AnimatedImageContainer
                      imgCls={"h-auto mb-auto"}
                      contCls={"mb-auto"}
                      style={{ marginBottom: "auto" }}
                      lid={14}
                      imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${14}.png`)}
                      setId={() => {
                        setSelectedId(14);
                        setSelectedText(imageDetails[14].desc);
                      }}
                      listImg={true}
                    ></AnimatedImageContainer>
                  </ImgContCol>
                  <ImgContCol>
                    <h4>3. GEOLOCATION-BASED STUDENT DISCOUNT</h4>
                    <p className="img-col-desc1">
                      A system that connects non-students with students based on
                      geo-location technique when they are both on-site to shop
                      at retails.
                    </p>
                    <p className="img-col-desc2">
                      Social benefit: Social sharing = release of dopamine
                    </p>

                    <AnimatedImageContainer
                      imgCls={"h-auto mt-auto mb-auto"}
                      contCls={"mt-auto mb-auto"}
                      lid={15}
                      imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${15}.png`)}
                      setId={() => {
                        setSelectedId(15);
                        setSelectedText(imageDetails[15].desc);
                      }}
                      listImg={true}
                    ></AnimatedImageContainer>
                  </ImgContCol>
                </ImgContContainer>
              </div>
              <SubDesc>The three concepts</SubDesc>
            </FlexThree>
          </FlexRowContainer>
          {/*  */}
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Business Origami</TitleThree>
              <SubTitleThree>
                Research method to physically understand the upcoming system
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We used the ‘Business Origami’ research method to understand the
                physical representation of the upcoming system design. It helped
                us visualize the possible connections, interplays that can exist
                in the system.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="jn-grid-4">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 16;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Final concept</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                To focus on one idea, the graffiti art of QR codes, which can
                exist underground with the potential to create a counter-culture
                was chosen to be executed. Prototyping the website and the
                geolocation idea was not feasible to execute in a week’s time
                considering its technical requirements.
                <br /> Chosen subscription plans:
                <br />{" "}
                <MITxt1>
                  1. Subscription of the popular coffee chain in UK
                  <br /> 2. Student discount of a well-known pharmaceutical
                  company in UK
                </MITxt1>
                <br /> as these include QR/Barcodes codes, which were easy to be
                shared.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <FlexOne>
            <TitleThree>Concept Execution</TitleThree>
          </FlexOne>
          <FlexRowContainer data-aos="fade-up">
            <FlexThree className="p-0 w-100">
              <ImgContainer className="jn-grid-5">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 18;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${ind}.png`)}
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
                1. Making stencils of a parent QR code, which collects & holds
                all kind of coupons available around that location. We added
                varied hearts around the QR to spark informality and
                relatability for users.
              </SubDesc>
            </FlexThree>
            <FlexHalf></FlexHalf>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexHalf></FlexHalf>
            <FlexThree className="p-0 w-100">
              <ImgContainer className="jn-grid-6">
                {Array(3)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 20;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${ind}.png`)}
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
                2. We spray painted at a legal graffiti tunnel in Leake Street,
                London as its busy with passer-byes and closer to the chosen
                outlets. Red color chalk spray was used as it's easy to spot and
                erase later.
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexThree className="p-0 w-100">
              <ImgContainer className="jn-grid-7">
                {Array(3)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 23;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${ind}.png`)}
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
                3. People can scan the QR with mobile phones, which allows them
                to use the available code.
              </SubDesc>
            </FlexThree>
            <FlexHalf></FlexHalf>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Word-of-mouth as a system growth</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                My group and I shared the same social media which gained some
                attention and responses to grow the system. We got feedback from
                random people using the QR at the rate of one-two per day. In
                the future, we anticipate this system expanding where people can
                share various other unused benefits as QR codes across different
                locations, but improvising to their own styles.
              </ProjDesc>
              <div className="w-80">
                <ImgContainer className="jn-grid-8">
                  {Array(2)
                    .fill("")
                    .map((x, i) => {
                      let ind = i + 26;
                      return (
                        <AnimatedImageContainer
                          imgCls={ind === 7 ? "" : "img-h35"}
                          lid={ind}
                          imgSrc={require(`../../../assets/images/ProjectTypes/justNameless/img${ind}.png`)}
                          setId={() => {
                            setSelectedId(ind);
                            setSelectedText(imageDetails[ind].desc);
                          }}
                          listImg={true}
                          subTxt={
                            ind === 26
                              ? "Sharing on social media"
                              : "Response once people used the QR for real."
                          }
                        ></AnimatedImageContainer>
                      );
                    })}
                </ImgContainer>
              </div>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne>
              <TitleThree>
                A film to showcase the process of execution
              </TitleThree>
            </FlexOne>
            <FlexThree></FlexThree>
          </FlexRowContainer>

          <VideoFrame
            src="https://www.youtube.com/embed/fzAt7SEZ97k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Scope to improve</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                The tangible quality of the output, along with keeping it off
                the mainstream was quite appreciated. The constructive feedback
                was to include the design of system growth in detail, and be
                more specific rather than keeping it as open-ended as 'word of
                mouth'.
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
                  src={require(`../../../assets/images/ProjectTypes/justNameless/img${selectedId}.png`)}
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
                      opacity: selectedId >= 27 ? 0.5 : 1,
                    }}
                    src={require(`../../../assets/images/caret.png`)}
                    onClick={() =>
                      selectedId < 27 &&
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

export default JustNameless;
