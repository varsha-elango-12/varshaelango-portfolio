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
  VideoContSubTxt,
  VideoCont,
  FlexCol,
  BoldITxt,
  MediumImgTop,
  ProjDescSub,
  FlexHalf,
} from "../../performativeDesign/styled";
import "../../performativeDesign/style.css";
import {
  LeftCaret,
  PDBg,
  RightCaret,
  VideoFrame,
  ModalText,
} from "../../common-styled";
import AnimatedImageContainer from "../../../components/animatedImageContainer";
import { imageDetails } from "./imageDetails";

function YellowJuice() {
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
              2. The Yellow Juice
            </ProjTitle>
            <FlexThree className="top-cont">
              <FlexCol>
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[400] }}>
                  Design a <BoldITxt>digital/physical marketplace</BoldITxt> for
                  the buying and selling of{" "}
                  <BoldITxt>human bodily fluids</BoldITxt> that prioritises
                  trust.
                </ProjDesc>
                <MITxt style={{ color: COLORS.TEXT_COLOR[400] }}>
                  MA UX_ 7 weeks_ Group Project_ 2022 <br />
                  Teammates: Ramya, Amber, Boxun
                </MITxt>
              </FlexCol>

              <div>
                <MediumImgTop
                  src={require("../../../assets/images/ProjectTypes/yellowJuice/yellowJuice.png")}
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
              <TitleThree>Brainstorming + Secondary research</TitleThree>
              <SubTitleThree>
                Understanding existing market around fluid exchange
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Our research included the uses of different human bodily fluids
                from past to present, exchange of such fluids, legal and illegal
                transfers, etc.
              </ProjDesc>
              <div>
                <AnimatedImageContainer
                  lid={1}
                  imgSrc={require("../../../assets/images/ProjectTypes/yellowJuice/img1.png")}
                  setId={() => {
                    setSelectedId(1);
                    setSelectedText(imageDetails[1].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>

                <SubDesc>Brainstorming on Miro board</SubDesc>
              </div>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree className="w-80">
              <ImgContainer className="jn-grid-3">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 2;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
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
                Image 1. Ancient Romans used Urine as Mouth-wash.
                <br /> Image 2. Human sweat induced in perfume.
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer style={{ paddingTop: 0 }} data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree className="w-80">
              <ImgContainer className="jn-grid-3">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 4;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
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
                Image 1. Pure urine used during drug test by drug users.
                <br /> Image 2. Websites to sell/buy breast milk.
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Business Origami</TitleThree>
              <SubTitleThree>
                Research method to tangibly understand the upcoming system
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Using business origami research method, we created the existing
                user flow (seller/buyer) of Gumtree. It helped to physically
                look and analyze the pathway and interconnections between
                different stakeholders of the ongoing system.
              </ProjDesc>
              <div className="w-60">
                <AnimatedImageContainer
                  lid={6}
                  imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${6}.png`)}
                  setId={() => {
                    setSelectedId(6);
                    setSelectedText(imageDetails[6].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc>Business origami of user journey</SubDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexTwo>
              <ProjDesc>
                We began with selling urine as it most interested us. We
                replaced 'bicycle' to 'human urine' on the business origami, and
                speculated the new possible journey.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree className="w-100">
              <ImgContainer className="">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 7;
                    return (
                      <AnimatedImageContainer
                        imgCls={"img-h35"}
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>

              <SubDesc>Business origami of new user journey</SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Parallel analysis</TitleThree>
              <SubTitleThree>
                To compare and study the needs for varying users
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                With varying user types in need for urine, there came new
                parameters additional to the existing. The chart below shows
                users and their requirements. We ideated along to intervene and
                reinforce the flow.
              </ProjDesc>
              <div style={{ width: "100%" }}>
                <AnimatedImageContainer
                  lid={9}
                  imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${9}.png`)}
                  setId={() => {
                    setSelectedId(9);
                    setSelectedText(imageDetails[9].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc>Comparison chart</SubDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Experiments</TitleThree>
              <SubTitleThree>Pee Experiment</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                One of my teammates attempted walking around with her pee in
                public spaces in a transparent cup with fruit illustrations.
                Pretending to buy this pee, I held it only because I knew it was
                my friend's but no longer than a minute. As she walked around,
                nobody cautiously noticed it. My teammate was bothered as we all
                knew it was her pee. We realized that using a transparent cup
                made it uncomfortable for the user/ carrier.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="">
                {Array(3)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 10;
                    return (
                      <AnimatedImageContainer
                        imgCls={"bottom-img"}
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
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
                During the 'Pee Experiment', Walking around with pee, exchanging
                pee
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Enacting the system</TitleThree>
              <SubTitleThree>
                Role-playing different parameters to show the system design and
                getting feedback
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Moving ahead, we came up with the idea of “Wee pays Van”, an
                automobile catering to multiple usages of urine, to be sponsored
                by Gumtree, where one can pee and get paid for it. Collected
                urine can be sold to farmers, industries, etc in large
                quantities. It also sells to individual buyers if placed orders
                through website. Collecting multiple urines and mixing them
                before a sale can prevent the usage of pure urine for drug
                tests. <br /> <br /> We enacted the possible scenario of this
                idea to the class during the presentation. Our constructive
                feedback was to zoom in to the detailed interactions, to enhance
                trust in the system, rather than dealing it at the macro level.
                Also to narrow down to single kind of interactions.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="jn-grid-8">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 13;
                    return (
                      <AnimatedImageContainer
                        imgCls={"bottom-img"}
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Wee pays Van, enacting the system</SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>1. Container design</TitleThree>
              <SubTitleThree>Testing the purity of urine</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                While studying the existing features on Gumtree in product
                exchange, although some of it were addressed in the app, to know
                the purity of the urine was unsolved digitally. To enable the
                testing of urine while buying, we designed a container that
                allows a simple and comfortable way of checking the purity of
                the urine.
              </ProjDesc>
              <div className="w-50">
                <AnimatedImageContainer
                  lid={15}
                  imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${15}.png`)}
                  setId={() => {
                    setSelectedId(15);
                    setSelectedText(imageDetails[15].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc>Sketch of container</SubDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>2. Rating system</TitleThree>
              <SubTitleThree>
                Essential method to spark trust in the seller, buyer, product
                and system.
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                While closely observing the similar models that work on trust
                involving digital and physical interactions, I found the pattern
                of trusting a product based on past customer reviews, ratings,
                photographs, etc to be a repetitive and a major factor in almost
                all sites.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="grid-1-2-1">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 16;
                    return (
                      <AnimatedImageContainer
                        imgCls={"bottom-img"}
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                        subTxt={
                          ind === 16
                            ? "A situation that recently happened at my home."
                            : "Shopping at Amazon."
                        }
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Ideating with objects</TitleThree>
              <SubTitleThree>
                To being spontaneous and practical at a given situation
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We chose considering selling clean urine for a drug test, as it
                involves at most trust in exchange. There were various user
                groups like college students, police/army officials, corporate
                employees, etc, going through drug tests. As a method of
                ideating with real objects, we picked random objects around
                which could be a potential container to exchange urine, for the
                different user groups.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="grid-1-2-1 w-80">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 18;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Ideating with objects</SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexTwo>
              <ProjDesc>
                Most chosen objects were stuff that's already present in the
                user's environment, disguised with urine inside it, to avoid
                others suspecting. Hence, we associated urine to apple juice
                with its similar color to disguise and sell.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="jn-grid-8 w-23">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 20;
                    return (
                      <AnimatedImageContainer
                        imgCls="img-h11"
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                        subTxt={ind === 20 ? "Apple juice" : "Human urine"}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
            </FlexThree>
          </FlexRowContainer>

          {/*  */}
          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>
                Focusing on single user group for single use{" "}
              </TitleThree>
              <SubTitleThree>
                Narrowing down to specific user group to analyse at micro level
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We narrowed down to police officials for drug tests as the
                criticality of being caught is high, hence trust being the
                utmost element to rely on. We role played a fake situation to
                understand the user interactions, possible design interventions.
                We visited the Southwark police station, and observed the
                environment outside, places to exchange, etc.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="grid-1-1-1-05">
                {Array(4)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 22;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Around Southwark police station</SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Initial ideas and experimenting</TitleThree>
              <SubTitleThree>
                Picked a few elements part of the system to ensure trust in
                exchange
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                The below image shows the initial elements included in the
                system of urine exchange on Gumtree. We also shot a film to
                communicate with others, enacting a scenario.
              </ProjDesc>
              <div className="w-100">
                <AnimatedImageContainer
                  lid={26}
                  imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${26}.png`)}
                  setId={() => {
                    setSelectedId(26);
                    setSelectedText(imageDetails[26].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc>
                Elements considered in our initial design concept
              </SubDesc>
              <div className="w-100">
                <VideoFrame
                  className="video-h40"
                  src="https://www.youtube.com/embed/Msn5vbVmEM0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <SubDesc>
                A short film conveying our idea in a possible scenario
              </SubDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Scope to improve</TitleThree>
              <SubTitleThree>
                Feedback and suggestions from co-students/ tutors
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Audience were unclear about our solutions in regard to building
                trust as it wasn't conveyed clearly. We lacked putting together
                our research insights and ideas in the presentation. To improve,{" "}
                <br /> - Gather and combine research insights
                <br /> - Shoot a realistic film if it's the final outcome
                <br /> - Work on a high-fidelity prototype of the urine
                container, proposed part of the solution.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>
                Reanalysing, and synthesising the gathered data
              </TitleThree>
              <SubTitleThree>
                To pull out all the anticipated trust points and tie with the
                proposed solutions
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We realized that not documenting our process more visually
                amongst ourselves was the drawback of poor conveying of our
                concept. So, we went back to finishing all the missing pieces
                from our past work.
              </ProjDesc>
              <div className="w-100">
                <AnimatedImageContainer
                  lid={27}
                  imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${27}.png`)}
                  setId={() => {
                    setSelectedId(27);
                    setSelectedText(imageDetails[27].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc>
                Trust journey in exchange of urine through Gumtree from Buyer's
                journey map
              </SubDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <div className="w-100">
                <AnimatedImageContainer
                  lid={28}
                  imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${28}.png`)}
                  setId={() => {
                    setSelectedId(28);
                    setSelectedText(imageDetails[28].desc);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
              </div>
              <SubDesc>
                Trust journey in exchange of urine through Gumtree from Buyer's
                journey map
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Shortlisting the trust points </TitleThree>
              <SubTitleThree>
                And reinforcing with design solutions
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                From our trust journey mapping, we narrowed down the most
                significant points to reinforce trust through our design and
                that includes,
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="jn-grid-8">
                {Array(6)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 29;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                        subTxt={
                          ind === 29
                            ? "Finding the suitable user"
                            : ind === 30
                            ? "Checking the purity of urine"
                            : ind === 31
                            ? "Safe meeting spots"
                            : ind === 32
                            ? "Container to collect and store urine"
                            : ind === 33
                            ? "Checking if it's real urine"
                            : "Safe payment system"
                        }
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Around Southwark police station</SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>
                Final outcome and execution of the concept
              </TitleThree>
              <SubTitleThree>
                High-fidelity prototypes and film narrating the working scenario
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We changed 'Apple Juice' to 'Yellow Juice' to avoid mis-buying
                for real apple juice. Included branding to it to use as
                signifiers in the system.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexThree className="p-0 w-100">
              <ImgContainer className="grid-08-1-1">
                {Array(2)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 35;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Branding for Yellow Juice</SubDesc>
            </FlexThree>
            <FlexHalf></FlexHalf>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            {/* <FlexOne></FlexOne> */}
            <FlexHalf></FlexHalf>
            <FlexThree className="p-0 w-100">
              <ImgContainer className="grid-1-2-2-2">
                {Array(4)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 37;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
              </ImgContainer>
              <SubDesc>Branding across recommended place for exchange</SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexThree className="p-0 w-100">
              <ImgContainer className="grid-1-1-1-105">
                {Array(4)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 41;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
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
                The Yellow Juice container and it's size variations for various
                users
              </SubDesc>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexTwo>
              <ProjDesc>
                I attached a plastic bag to the bottle that opens up as an outer
                package where the buyer can comfortably carry with no hesitation
                touching the container directly.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer className="grid-1-2-1-1">
                <div>
                  <VideoFrame
                    className="video-h25"
                    src="https://www.youtube.com/embed/Y6LUOgl_b2k"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <ProjDescSub>Bag for the container</ProjDescSub>
                </div>
                <AnimatedImageContainer
                  lid={45}
                  imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${45}.png`)}
                  setId={() => {
                    setSelectedId(45);
                    setSelectedText(imageDetails[45].desc);
                  }}
                  listImg={true}
                  subTxt="Size variations in container for various users"
                ></AnimatedImageContainer>
              </ImgContainer>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexTwo>
              <ProjDesc>
                To enable the system to kickstart by letting people know about
                it, we picked digital memes as the medium to spread the word.
                This way, it can be unregulated and also indirect to address the
                niche audience.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <ImgContainer>
                {Array(4)
                  .fill("")
                  .map((x, i) => {
                    let ind = i + 46;
                    return (
                      <AnimatedImageContainer
                        lid={ind}
                        imgSrc={require(`../../../assets/images/ProjectTypes/yellowJuice/img${ind}.png`)}
                        setId={() => {
                          setSelectedId(ind);
                          setSelectedText(imageDetails[ind].desc);
                        }}
                        listImg={true}
                      ></AnimatedImageContainer>
                    );
                  })}
                <SubDesc>Memes on Yellow juice</SubDesc>
              </ImgContainer>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            style={{ paddingTop: 0 }}
            data-aos="fade-up"
          ></FlexRowContainer>
          <VideoCont data-aos="fade-up">
            <VideoFrame
              src="https://www.youtube.com/embed/Msn5vbVmEM0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <VideoContSubTxt>The Yellow Juice film</VideoContSubTxt>
          </VideoCont>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Project partner feedback</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Gumtree, our project partner was quite impressed with our
                outcome, appreciated the attention to detail in terms of
                execution of ideas, secured payment methods, and the
                counter-culture attitude.
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
              >
                <div
                  className="pop-up-overlay"
                  onClick={() => setSelectedId(null)}
                ></div>
                <motion.img
                  className="full-pop-image"
                  src={require(`../../../assets/images/ProjectTypes/yellowJuice/img${selectedId}.png`)}
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
                      opacity: selectedId >= 49 ? 0.5 : 1,
                    }}
                    src={require(`../../../assets/images/caret.png`)}
                    onClick={() =>
                      selectedId < 49 &&
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

export default YellowJuice;
