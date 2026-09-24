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
  BoldTxt,
  SemiBoldTxt,
  SBTxt,
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
import SEO from "../../../components/seo";


function JustNameless() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PDBg>
      <SEO
        title="Sharing Codes — UX Design Case Study by Varsha Elango"
        description="Sharing Codes is a UX design case study with IBM about unused digital transaction allowances, research, role-play, and a live public intervention."
      />
      <AnimateSharedLayout type="crossfade">
        <SingleProjectContainer>
          <FlexRowContainer data-aos="fade-up" className='pb-0' style={{ alignItems: 'stretch' }}>
            <ProjTitle style={{ color: COLORS.TEXT_COLOR[850] }}>
              Sharing Codes
            </ProjTitle>
            <FlexThree className="top-cont">
              <FlexCol style={{ padding: '0 4% 0 0' }}>
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[850] }}>
                  <BoldTxt>
                    Design a way to take advantage of other peoples’ digital transactions without them knowing.
                  </BoldTxt>
                </ProjDesc>
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[850], marginBottom: '0' }}>
                  <br /><br /><br />
                  <SemiBoldTxt>Summary:</SemiBoldTxt> We worked on unused subscription allowances, the coffee plan with a drink always left over. The work moved from a system built for shelters to a single physical intervention. QR codes stencilled onto a graffiti wall, holding unclaimed coupons for whoever scanned them.
                  <br /><br />
                  <SemiBoldTxt>My focus:</SemiBoldTxt> Framing the research question, role-playing the system to surface its interactions, the poster correction during the live trial, the student discount economy concept, and co-editing the film.
                  <br /><br />
                  <SemiBoldTxt>Outcome:</SemiBoldTxt> A live execution at Leake Street, London, used by ~5 people a day on an IYKYK basis. IBM praised the tangible quality of the output and keeping it off the mainstream.
                </ProjDesc>
              </FlexCol>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <MediumImgTop
                  src={require("../../../assets/images/ProjectTypes/justNameless/justNameless.png")}
                  style={{ height: 'max-content', width: '16.25vw' }}
                />
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[850] }}>
                  <div className="project-detail-row">
                    <span style={{ fontStyle: "italic" }}>Project Partner </span>: <SemiBoldTxt>IBM, London</SemiBoldTxt>
                  </div>

                  <div className="project-detail-row">
                    <span style={{ fontStyle: "italic" }}>Timeline </span>: <SemiBoldTxt>5 weeks</SemiBoldTxt>
                  </div>

                  <div className="project-detail-row">
                    <span style={{ fontStyle: "italic" }}>Team </span>: <SemiBoldTxt>Bea, Malavika, Boxun, Zhe</SemiBoldTxt>
                  </div>
                  <div class="tag-container" style={{ color: "#6e6796" }}>
                    <span class="pill-tag">UX Design</span>
                    <span class="pill-tag">User Research</span>
                    <span class="pill-tag">Role-play</span>
                    <span class="pill-tag">Prototyping</span>
                    <span class="pill-tag">Film-making</span>
                  </div>
                </ProjDesc>
              </div>
            </FlexThree>
          </FlexRowContainer>

          {/* second row */}
          <TitleTwo data-aos="fade-up" data-aos-delay="300">
            Process
          </TitleTwo>
          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>Everything we know about digital transactions</TitleThree>
              <SubTitleThree>
                Everything about digital transactions
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We began by brainstorming words related to the brief on Miro,
                which helped surface the aspects around it. Alongside that we
                ideated in 'what if' questions, pushing digital transactions
                toward their most extreme and magical possibilities, then ran
                secondary research to find out how far those possibilities could
                actually go.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0"
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
              <TitleThree>Inspiration</TitleThree>
              <SubTitleThree>The Tampon Book </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                A German company sold tampons inside a book to protest the 19% tampon tax,
                while books were taxed at 7%. That way of intervening in a system rather
                than working around it gave us an inspiring  direction to explore further.
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
              <TitleThree>Finding the unfairness</TitleThree>
              <SubTitleThree>Brainstorming what made us angry</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                I pushed us to work from personal experience instead: <SemiBoldTxt>which systems around us actually make us angry?</SemiBoldTxt> That became the question the project ran on. We kept it open deliberately and didn't narrow early, then found the common mid-point the group's frustrations converged on.
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

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Narrowing to subscriptions</TitleThree>
              <SubTitleThree>To zoom in</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We narrowed to contracts and subscription plans, the ones that tie you
                in for a fixed period while the allowance goes unused. A mobile data
                plan always leaves data behind. A five-drink-a-day coffee plan from
                a popular UK chain leaves one or two drinks unclaimed.
                <br /> <br />
                People were already quietly sharing single coffee subscriptions
                between two users, and still leaving one or two drinks a day unused.
                We built a system that collected those leftover drinks from the public
                and passed them to homeless people, or people in need, without the
                company knowing. We generated a temporary QR code against the
                original and tested it. It worked.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="pt-0" data-aos="fade-up">
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

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>The critique that redirected the project</TitleThree>
              <SubTitleThree>
                Weekly presentation
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                I ran us through the system as role-play, translating the proposal
                into a real scenario so we could see every interaction it would
                actually require, and so the audience could visualise it clearly.
                Unused drinks collected and passed to homeless people via
                shelters, with printed codes.
                <br /><br />
                Three things came back:
                <ul style={{ paddingLeft: "2rem", margin: "0.5rem 0" }}>
                  <li>The branding we'd applied fought the concept; this system needed to be underground and subtle, not designed.</li>
                  <li><SBTxt>Homeless</SBTxt> was too general as a target audience as this system was more to be underground and subtle.</li>
                  <li>Expand the scope of intervention onto other similar areas.</li>
                </ul>
                <br />
                <SemiBoldTxt>We took all three. The project changed direction here.</SemiBoldTxt>
                <br /><br />
                Narrowing the audience also changed what the project was for.
                A system routing unused resources to shelters became one letting
                students trade unclaimed value between themselves. Helping a different
                set of people became trading among the same set. That followed the
                brief, which asked us to exploit a transaction rather than repair one.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer className="pt-0" data-aos="fade-up">
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

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Testing inside a community</TitleThree>
              <SubTitleThree>Prototyping</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We narrowed to college students and ran the same sharing system inside
                our own community, which also let us test whether an honour
                system could hold without enforcement.
                <br /><br />
                We started with a formally printed poster. Watching the trial, it
                wasn't moving, people passed it. I suggested we try a rough handwritten
                version instead. The handwritten one was approached far more readily.
                Informality created permission; the designed version read as official,
                and people left it alone.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="p-0" data-aos="fade-up">
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

              <SubDesc>Posters: 1. Formally printed | 2. Roughly hand-written.</SubDesc>
            </FlexThree>
          </FlexRowContainer>
          <FlexRowContainer className="pt-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexTwo>
              <ProjDesc>
                That confirmed the branding critique in practice rather than in principle
                and it came from watching the thing fail in public rather than from
                reasoning about it beforehand. We deliberately didn't promote it, so
                uptake would move at the speed of real code use in stores. Two to three
                people used it on day one. Users fed back through drawings.
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

          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Three directions</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We developed three ways to intervene in retail subscription and discount programmes:
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="pt-0" data-aos="fade-up">
            <FlexOne></FlexOne>
            <FlexThree>
              <div className="w-100">
                <ImgContContainer>
                  <ImgContCol>
                    <h4>1. Subscription sharing honour system</h4>
                    <p className="img-col-desc1">
                      A counter-culture built from shared subscriptions and free
                      resources using street art, open to any passer-by.
                    </p>
                    <p className="img-col-desc2">
                      <SemiBoldTxt>Social benefit:</SemiBoldTxt> intervening in a system to create a sense of community.
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
                    <h4>Student discount economy</h4>
                    <p className="img-col-desc1">
                      A marketplace where students sell and buy unclaimed coupons.
                    </p>
                    <p className="img-col-desc2">
                      <SemiBoldTxt>Financial benefit:</SemiBoldTxt> an underground economy built on student discounts and perks.
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
                    <h4>3. Geolocation-based student discount</h4>
                    <p className="img-col-desc1">
                      A system connecting non-students to students on-site at retail through geo-location.
                    </p>
                    <p className="img-col-desc2">
                      <SemiBoldTxt>Social benefit:</SemiBoldTxt> sharing as a release of dopamine.
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
            </FlexThree>
          </FlexRowContainer>
          {/*  */}
          <FlexRowContainer className="pb-0" data-aos="fade-up">
            <FlexOne>
              <TitleThree>Mapping the system physically</TitleThree>
              <SubTitleThree>
                Business origami
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We modelled the proposed system by hand to see the connections and
                interplays it would actually require, where it depended on people,
                where on infrastructure, and where it would break.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          <FlexRowContainer className="pt-0" data-aos="fade-up">
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
              <TitleThree>Choosing what to build</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We chose the graffiti QR concept. It was the one that could exist
                underground and seed a counter-culture, and the only one buildable
                in the time available — the website and geolocation concepts had
                technical requirements we couldn't meet in a week.
                <br /><br />
                We picked two subscriptions to work with: a popular UK coffee chain,
                and the student discount at a well-known UK pharmacy. Both
                already used QR or barcodes, so both were shareable without
                inventing new infrastructure.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>
          {/*  */}
          <FlexOne>
            <TitleThree>Putting it on a wall</TitleThree>
            <SubTitleThree>
              Execution
            </SubTitleThree>
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
                1. We cut stencils for a parent QR code holding every coupon available
                near that location, with hearts around it to make it read as
                informal rather than corporate.
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
                2. We sprayed it at Leake Street, London — a legal graffiti tunnel,
                heavily trafficked, close to the outlets we'd chosen. Red chalk spray,
                easy to spot and easy to remove.
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
                3. Passers-by scanned it using mobiles and used whatever code was available.
              </SubDesc>
            </FlexThree>
            <FlexHalf></FlexHalf>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up">
            <FlexOne>
              <TitleThree>Growth without promotion</TitleThree>
              <SubTitleThree>
                Slow growth by word of mouth
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                We shared it through our own social media and let it spread by word of mouth.
                Usage settled at one to two people a day, with feedback coming back from strangers.
                <br />
                The intended endpoint was a system where people share any unused benefit as a QR code, anywhere, adapted to their own style.
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
                Film
              </TitleThree>
              <SubTitleThree>
                <SubTitleThree>
                  Business origami
                </SubTitleThree>
              </SubTitleThree>
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
              <TitleThree>How IBM responded</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                IBM praised the tangible quality of the output and the decision to keep
                it off the mainstream. The execution being physical and in public,
                rather than another app, was what made the intervention feel
                real to them. <br />
                Their constructive note was that the growth mechanism needed designing
                in detail rather than being left open-ended as word of mouth.
                How the system spread, who carried it, and what kept it going
                were the parts left to build on to take the project further.
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
