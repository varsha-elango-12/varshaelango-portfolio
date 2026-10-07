import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { COLORS } from "../../../assets/styles/constant";
import {
  FlexOne,
  FlexRowContainer,
  FlexThree,
  FlexTwo,
  FlexFour,
  ImgContainer,
  MediumImgTop,
  ProjDesc,
  ProjectMeta,
  FlexHalf,
  ProjTitle,
  SingleProjectContainer,
  SubTitleThree,
  TitleThree,
  TitleTwo,
  SubDesc,
  FlexCol,
  MITxt,
  BoldITxt,
  MITxt1,
  RegularTxt,
  RegularITxt,
  BoldTxt,
  SemiBoldTxt,
  SBTxt,
  MediumTxt,
  LightITxt,
} from "../../performativeDesign/styled";

import {
  EntryGate,
  EntryGateContent,
  EntryGateText,
  EntryGateActions,
  PublicViewButton,
  EntryFullViewButton,
  FullWidthBanner,
  FullWidthBannerContent,
  FullWidthBannerText,
  FullViewButton,
} from "../usNotTexas/styled";

import {
  QuoteCard,
  InsightCardContainer,
  InsightMain,
  InsightHeader,
  InsightTitle,
  InsightDescription,
  InsightBottomDescription,
  SideNote,
  SideNoteContent,
  SideNoteBody,
  SideNoteTitle,
  ExtraSideNote,
  Hook,
  HookAttachmentContainer,
  QuoteMini,
  QuoteMiniText,
  QuoteMiniImage,
  ScorePrinciplesContainer,
  ScorePrincipleCard,
  ScorePrincipleTitle,
  ScorePrincipleDescription,
  RatingHeader,
  RatingTable as RatingTableContainer,
  RatingRows,
  RatingRow,
  RatingParticipant,
  RatingParticipantIcon,
  RatingValue,
  RatingDivider,
  RatingInsight,
  RatingQuote,
  RatingQuoteText,
  RatingInsightText,
} from "./styled";

import AnimatedImageContainer from "../../../components/animatedImageContainer";

import "../../performativeDesign/style.css";
import { trackEvent } from "../../../analytics";
import SEO from "../../../components/seo";
import { LeftCaret, ModalText, PDBg, RightCaret } from "../../common-styled";
import { imageDetails } from "./imageDetails";

import quoteMiniIcon from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-mini-icon.svg";
import quotePersonOne from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-1.svg";
import quotePersonTwo from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-2.svg";
import quotePersonThree from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-3.svg";
import quotePersonFour from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-4.svg";
import quotePersonFive from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-5.svg";
import quotePersonSix from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-6.svg";
import quotePersonSeven from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-7.svg";
import quotePersonEight from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-8.svg";
import quotePersonNine from "../../../assets/images/ProjectTypes/weScoreRedesign/quote-person-9.svg";

const MotionEntryGate = motion(EntryGate);

function HookAttachment({ position, target, targetRef }) {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (!targetRef?.current) return;

    const element = targetRef.current;

    const updateHeight = () => {
      setHeight(element.getBoundingClientRect().height);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [targetRef]);

  const hookCount = Math.max(1, Math.floor((height - 20) / 20.4));

  return (
    <HookAttachmentContainer $position={position} $target={target}>
      {Array.from({ length: hookCount }, (_, index) => (
        <Hook key={index} />
      ))}
    </HookAttachmentContainer>
  );
}

function InsightCard({
  title,
  description,
  bottomDescription,
  quotes = [],
  quoteType = "card",
  quoteMini,
  sideNote,
  sideNotePosition = "right",
  extraSideNote,
  variant = "default",
  cardWidth = "100%",
  mainCardColor = "#D3E0BE",
  quoteCardColor = "#F6FFE8",
  sideNoteColor = "#E9E9E9",
  extraSideNoteColor = "#FFFFFF",
}) {
  const hasLeftNote = sideNote && sideNotePosition === "left";
  const hasRightNote = sideNote && sideNotePosition === "right";
  const hasExtraSideNote = !!extraSideNote;
  const sideNoteRef = React.useRef(null);
  const extraSideNoteRef = React.useRef(null);

  return (
    <InsightCardContainer
      $sideNotePosition={sideNotePosition}
      $hasExtraSideNote={hasExtraSideNote}
      $variant={variant}
      $cardWidth={cardWidth}
    >
      {/* LEFT EXTRA */}
      {hasLeftNote && hasExtraSideNote && (
        <ExtraSideNote
          $position="left"
          ref={extraSideNoteRef}
          $color={extraSideNoteColor}
        >
          {extraSideNote}

          {/* Extra ↔ SideNote */}
          <HookAttachment
            position={sideNotePosition}
            target="extra"
            targetRef={sideNoteRef}
          />
        </ExtraSideNote>
      )}

      {/* LEFT SIDE NOTE */}
      {hasLeftNote && (
        <SideNote
          ref={sideNoteRef}
          $position="left"
          $hasExtraSideNote={hasExtraSideNote}
          $color={sideNoteColor}
        >
          <SideNoteContent>
            <SideNoteTitle>{sideNote.title}</SideNoteTitle>
            <SideNoteBody>{sideNote.body}</SideNoteBody>
          </SideNoteContent>

          {/* SideNote ↔ Main */}
          <HookAttachment
            position={sideNotePosition}
            target="side"
            targetRef={sideNoteRef}
          />
        </SideNote>
      )}

      {/* MAIN */}
      <InsightMain
        $sideNotePosition={sideNotePosition}
        $hasSideNote={!!sideNote}
        $color={mainCardColor}
      >
        <InsightHeader>
          {title && <InsightTitle>{title}</InsightTitle>}

          {description && (
            <InsightDescription>{description}</InsightDescription>
          )}
        </InsightHeader>

        {quoteType === "mini" ? (
          <QuoteMini>
            <QuoteMiniText>{quoteMini.text}</QuoteMiniText>

            <QuoteMiniImage src={quoteMini.image} alt="" />
          </QuoteMini>
        ) : (
          quotes.length > 0 && (
            <QuoteCard
              items={quotes}
              variant="default"
              color={quoteCardColor}
            />
          )
        )}

        {bottomDescription && (
          <InsightBottomDescription>
            {bottomDescription}
          </InsightBottomDescription>
        )}
      </InsightMain>

      {/* RIGHT SIDE NOTE */}
      {hasRightNote && (
        <SideNote
          ref={sideNoteRef}
          $position="right"
          $hasExtraSideNote={hasExtraSideNote}
          $color={sideNoteColor}
        >
          <SideNoteContent>
            <SideNoteTitle>{sideNote.title}</SideNoteTitle>
            <SideNoteBody>{sideNote.body}</SideNoteBody>
          </SideNoteContent>

          {/* Main ↔ SideNote */}
          <HookAttachment
            position={sideNotePosition}
            target="side"
            targetRef={sideNoteRef}
          />
        </SideNote>
      )}

      {/* RIGHT EXTRA */}
      {hasRightNote && hasExtraSideNote && (
        <ExtraSideNote
          $position="right"
          ref={extraSideNoteRef}
          $color={extraSideNoteColor}
        >
          {extraSideNote}

          {/* SideNote ↔ Extra */}
          <HookAttachment
            position={sideNotePosition}
            target="extra"
            targetRef={extraSideNoteRef}
          />
        </ExtraSideNote>
      )}
    </InsightCardContainer>
  );
}

function ScorePrinciples() {
  const principles = [
    {
      title: "1. Net worth as the wealth score.",
      description:
        "It's the most concrete value in the database. Every other data point sits in a range that supports it.",
    },
    {
      title: "2. Words as the score.",
      description:
        "All three scores express a likelihood, so the number does less work than the phrase. A visual cue carries the magnitude.",
    },
    {
      title: "3. Source made explicit.",
      description:
        "Your data, Altrata data, Altrata predictions - labelled wherever they appear, so users can see how their own uploads contribute.",
    },
    {
      title: "4. Expandable detail.",
      description:
        "Every concept holds a second layer: the values behind the score, and a route to the profile.",
    },
  ];

  return (
    <ScorePrinciplesContainer>
      {principles.map((item) => (
        <ScorePrincipleCard key={item.title}>
          <ScorePrincipleTitle>{item.title}</ScorePrincipleTitle>
          <ScorePrincipleDescription>
            {item.description}
          </ScorePrincipleDescription>
        </ScorePrincipleCard>
      ))}
    </ScorePrinciplesContainer>
  );
}

function RatingTable({ rows = [], insight }) {
  return (
    <RatingTableContainer>
      <RatingHeader>
        <div>Participant</div>

        <div>
          Concept 1 Rating
          <br />
          (Clarity, Usefulness, Trust)
        </div>
      </RatingHeader>

      <RatingRows>
        {rows.map((row, index) => (
          <React.Fragment key={row.participant}>
            <RatingRow>
              <RatingParticipant>
                <RatingParticipantIcon src={row.icon} alt="" />
                {row.participant}
              </RatingParticipant>

              <RatingValue $negative={row.negative}>{row.rating}</RatingValue>
            </RatingRow>

            {index < rows.length - 1 && <RatingDivider />}
          </React.Fragment>
        ))}
      </RatingRows>

      {insight && (
        <RatingInsight>
          <RatingQuote>
            <RatingQuoteText>{insight.quote}</RatingQuoteText>
          </RatingQuote>

          <RatingInsightText>{insight.text}</RatingInsightText>
        </RatingInsight>
      )}
    </RatingTableContainer>
  );
}

function WEScoreRedesign() {
  const [isEntryGateOpen, setIsEntryGateOpen] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const selectedImageIndex = imageDetails.findIndex(
    (image) => image.i === selectedId,
  );
  const selectedImage = imageDetails[selectedImageIndex];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PDBg>
      <SEO
        title="A Score To Find The Right People - Product Design Case Study"
        description="A product design case study by Varsha Elango at Altrata, redesigning the wealth and P2G score visualisation on a wealth intelligence platform."
      />
      <AnimatePresence>
        {isEntryGateOpen && (
          <MotionEntryGate
            role="dialog"
            aria-modal="true"
            aria-labelledby="entry-gate-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <EntryGateContent>
              <EntryGateText id="entry-gate-text">
                Some parts of this page are protected. View a limited public
                version, or contact for password to see the full project.
              </EntryGateText>
              <EntryGateActions>
                <PublicViewButton
                  type="button"
                  onClick={() => setIsEntryGateOpen(false)}
                >
                  <img
                    src={require("../../../assets/icons/seen.png")}
                    alt=""
                    width="24"
                    height="24"
                  />
                  <MediumTxt style={{ fontSize: "20px" }}>
                    Public View
                  </MediumTxt>
                </PublicViewButton>
                <EntryFullViewButton
                  type="button"
                  onClick={() => {
                    trackEvent("full_view_click", {
                      project: "is-united-states-not-texas",
                      destination:
                        "/projects/project_we_score_redesign_protected.pdf",
                    });
                    window.open(
                      "/projects/project_we_score_redesign_protected.pdf",
                      "_blank",
                      "noopener,noreferrer",
                    );
                    setIsEntryGateOpen(false);
                  }}
                >
                  <img
                    src={require("../../../assets/icons/lock.png")}
                    alt=""
                    width="24"
                    height="24"
                  />
                  <MediumTxt style={{ fontSize: "20px" }}>Full View</MediumTxt>
                </EntryFullViewButton>
              </EntryGateActions>
            </EntryGateContent>
          </MotionEntryGate>
        )}
      </AnimatePresence>
      <AnimateSharedLayout type="crossfade">
        <SingleProjectContainer>
          <FlexRowContainer
            data-aos="fade-up"
            className="pb-0"
            style={{ alignItems: "stretch" }}
          >
            <ProjTitle style={{ color: COLORS.TEXT_COLOR[1200] }}>
              A Score To Find The Right People
            </ProjTitle>
            <FlexThree className="top-cont p-0">
              <FlexCol style={{ padding: "0 4% 0 0" }}>
                <ProjDesc style={{ color: COLORS.TEXT_COLOR[1200] }}>
                  <BoldTxt>
                    Redesign the wealth and P2G score visualisation on a wealth
                    intelligence platform.
                  </BoldTxt>
                </ProjDesc>
                <ProjDesc
                  style={{ color: COLORS.TEXT_COLOR[1200], marginBottom: "0" }}
                >
                  <br />
                  <SemiBoldTxt>Background:</SemiBoldTxt> WealthEngine scores
                  every profile on two things: how much money someone has, and
                  how likely they are to give it away. Those two numbers are the
                  first thing a fundraiser looks at and the filter that decides
                  who gets contacted at all.
                  <br />
                  <br />
                  <SemiBoldTxt>Problem:</SemiBoldTxt> Two scores side by side,
                  one legend between them. Higher was better on one, lower on
                  the other.
                  <br />
                  Neither had a reference point. The same person can be a major
                  prospect for a small charity and below the threshold for a
                  national one, and the score couldn't tell you which you were
                  looking at. The people who used the platform most had stopped
                  looking at it entirely.
                  <br />
                  The brief was to make the score clearer. Research showed
                  nobody stops at the score, so I proposed the redesign should
                  serve what happens after it.
                  <br />
                  <br />
                  <SemiBoldTxt>Impact:</SemiBoldTxt> In production. Across eight
                  organisations, clarity moved from confusion to 4s and 5s.
                  Trust stayed at 3–4, for reasons outside the design.
                </ProjDesc>
                {/* <QuoteCard
                  items={
                    ""
                  }
                  variant="default"
                  color={"#E5FFE3"}
                ></QuoteCard> */}

                <QuoteCard
                  color="linear-gradient(90deg, #FFFFFF 0%, #E5FFE3 100%)"
                  padding="12px"
                  items={[
                    {
                      quote: "“I could have a staff member look at this and go right to where I need them to go.”",
                      author: "President & CEO, community foundation",
                      image: quotePersonNine,
                      imagePosition: "left",
                      imageSize: 45,
                    }
                  ]}
                />
              </FlexCol>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <MediumImgTop
                  src={require("../../../assets/images/ProjectTypes/weScoreRedesign/thumbnail.png")}
                  style={{ height: "max-content", width: "16.25vw" }}
                />
              </div>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0"
            data-aos="fade-up"
            style={{ alignItems: "stretch", color: COLORS.TEXT_COLOR[1200] }}
          >
            <div className="project-meta__divider" />
            <ProjectMeta
              items={[
                {
                  label: "Users",
                  value:
                    "Fundraisers, prospect researchers, gift officers, and outreach teams",
                },
                {
                  label: "Partner",
                  value: "WealthEngine, Altrata, London (in production)",
                },
                {
                  label: "Team",
                  value: (
                    <>
                      Lead Designer (me)
                      <br />
                      UI/UX Director
                      <br />
                      Project Manager
                      <br />
                      Data Architect
                    </>
                  ),
                },
                {
                  label: "What I did",
                  value: (
                    <>
                      User Research
                      <br />
                      Problem Statement
                      <br />
                      Conceptualization
                      <br />
                      User testing
                      <br />
                      Dev handoff
                    </>
                  ),
                },
                {
                  label: "Duration",
                  value: "3 Months",
                },
              ]}
            />
          </FlexRowContainer>

          <TitleTwo data-aos="fade-up" data-aos-delay="300">
            Process
          </TitleTwo>
          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>Identified problem</TitleThree>
              <SubTitleThree>Design Audit & User Research</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                I audited WealthEngine's two proprietary scores, Wealth Score
                and P2G (Propensity to Give), then ran research across eight
                organisations, from solo fundraisers to national nonprofits.{" "}
                <br />
                Different verticals had different use cases, and daily users had
                different problems from occasional ones. The product treated
                them all the same.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0 pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexHalf />
            <FlexTwo>
              <div style={{ width: "100%", paddingLeft: "5%" }}>
                <AnimatedImageContainer
                  lid={imageDetails[0].i}
                  imgSrc={imageDetails[0].src}
                  setId={() => {
                    setSelectedId(imageDetails[0].i);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
                <SubDesc
                  style={{ width: "100%", textAlign: "center", margin: "0" }}
                >
                  Existing profile page with score in WE
                </SubDesc>
              </div>
            </FlexTwo>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree>
              <InsightCard
                title="1. Two scores, adjacent, running opposite directions."
                description="The wealth score reads higher-is-better. P2G reads lower-is-better. They sit side by side with a single legend."
                bottomDescription="A decade in fundraising, actively training her team on these scores, and she couldn't tell them apart."
                sideNote={{
                  title: "Consistency and Standards (Nielsen #4)",
                  body: "Users should not have to wonder whether different words, situations, or actions mean the same thing.",
                }}
                sideNotePosition="right"
                cardWidth="85%"
                quotes={[
                  {
                    quote:
                      "“The wealth score and the P2G, I feel they're telling me kind of the same thing. So I'm looking at one or the other or both.”",
                    author: "Development Manager, Florida Studio Theatre",
                    image: quotePersonOne,
                    imagePosition: "left",
                    align: "left",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "10px",
                  rowGap: "10px",
                  alignItems: "start",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={require("../../../assets/images/ProjectTypes/weScoreRedesign/2.png")}
                    alt="Inline operators concept"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      margin: "-10px",
                    }}
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "0",
                    position: "relative",
                  }}
                >
                  <img
                    src={require("../../../assets/images/ProjectTypes/weScoreRedesign/3.png")}
                    alt="Query groups concept"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      margin: "-10px",
                    }}
                  />
                </div>

                <ProjDesc>Wealth Score</ProjDesc>
                <ProjDesc>P2G Score</ProjDesc>
              </div>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="right-aligned-content">
              <InsightCard
                title="2. One score is always visible; the other is hidden."
                description="Wealth Score shows by default; P2G sits behind a segmented control. Everyone sees wealth first whether they came for it or not. The supporting data is static, so nothing shows what moves either score."
                // bottomDescription="A decade in fundraising, actively training her team on these scores, and she couldn't tell them apart."

                cardWidth="62%"
                quoteType="mini"
                quoteMini={{
                  text: "From design audit and client validation.",
                  image: quoteMiniIcon,
                }}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="left-aligned-content">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  rowGap: "10px",
                }}
              >
                <InsightCard
                  title="3. The score is skipped entirely by the users who know the product best."
                  description="Some users scrolled straight past the top of the profile to the giving capacity breakdown."
                  cardWidth="62%"
                  quotes={[
                    {
                      quote:
                        "“I don't really use the score visuals too much. I already am just looking at the top people. So then I want to know, where is their money? I can just see the numbers right here. It's 3 million, and it's all in real estate.”",
                      author: "Director of Prospect Research, PKD Foundation",
                      image: quotePersonTwo,
                      imagePosition: "right",
                      align: "left",
                    },
                  ]}
                />
                <InsightCard
                  title="4. With senior staff, the score loses to raw data."
                  description="Senior staff trust what they can see over what we calculate."
                  cardWidth="62%"
                  quotes={[
                    {
                      quote:
                        "“my gift managers rely less on the P2G scores or any wealth screening scores. They would rather see real data”",
                      author: "Development Manager, Florida Studio Theatre",
                      image: quotePersonOne,
                      imagePosition: "left",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="right-aligned-content">
              <InsightCard
                cardWidth="87%"
                title="5. Unclear reasoning. The tool doesn't fully show how it derived the score."
                description="Every session asked the same thing. Where did this come from, and how do I check it? Nobody wanted the model explained, just enough to sanity-check it."
                sideNote={{
                  title:
                    "Gulf of Evaluation (Norman, The Design of Everyday Things)",
                  body: "The gap between what a system outputs and the user's ability to interpret and verify it. A score with no visible derivation leaves that gulf entirely uncrossed.",
                }}
                sideNotePosition="left"
                quotes={[
                  {
                    quote:
                      "“in order to trust that data, you need to validate it.”",
                    author: "Director of Prospect Research, PKD Foundation",
                    image: quotePersonTwo,
                    imagePosition: "left",
                    align: "left",
                  },
                  {
                    quote:
                      "“where does the data come from? When I use ChatGPT & often I'm like, oh, let me just click on the link that it cited”",
                    author: "Ops Director, Generous Giving",
                    image: quotePersonThree,
                    imagePosition: "right",
                    align: "right",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="left-aligned-content">
              <InsightCard
                cardWidth="100%"
                title="6. Users don't know what their own data does."
                description="Users don't know whether their supplemental data affects the score."
                sideNote={{
                  title: "Visibility of System Status (Nielsen #1)",
                  body: "Users should know what the system is doing with their input. Contributing data and getting no signal back is the sign of system failure.",
                }}
                sideNotePosition="right"
                quotes={[
                  {
                    quote:
                      "if I put in supplemental information about a donor, I don't believe at this time that it's used in any of the wealth scores.”",
                    author: "Development Manager, regional arts nonprofit",
                    image: quotePersonOne,
                    imagePosition: "left",
                    align: "left",
                  },
                ]}
                extraSideNote="Different tangent. Flagged, solved separately."
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="right-aligned-content">
              <InsightCard
                cardWidth="87%"
                title="7. Connections sits at score level, but isn't part of the score"
                description="Connections is useful data, but it doesn't feed either score or relate to anything shown beside it."
                sideNote={{
                  title: "Law of Proximity (Gestalt)",
                  body: "Elements placed close together are perceived as related. Grouping connections with the scores implies a relationship that doesn't exist.",
                }}
                sideNotePosition="left"
                quoteType="mini"
                quoteMini={{
                  text: "From design audit and client validation.",
                  image: quoteMiniIcon,
                }}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>Redefining the brief</TitleThree>
            </FlexOne>
            <FlexThree className="left-aligned-content">
              <InsightCard
                cardWidth="87%"
                title="8. Nobody stops at the score"
                description="Not one participant used it alone. Verifying, cross-referencing, annotating, exporting: that's where the time goes, and the brief treated all of it as out of scope."
                sideNote={{
                  title: "That redefines the brief.",
                  body: "The question isn't how do we make the score more convincing. It's how do we make it support everything the user does afterwards.",
                }}
                sideNotePosition="right"
                sideNoteColor="#ffffff"
                quotes={[
                  {
                    quote:
                      "“I don’t just look at Wealth Engine score. It has it be a part of the narrative, but I also compare profiles on Donor Search (competitor)”",
                    author: [
                      "Development Manager, regional arts nonprofit",
                      "Prospect Researcher, national advocacy organisation",
                    ],
                    image: quotePersonFour,
                    imagePosition: "left",
                    align: "left",
                  },
                  {
                    quote:
                      "”I'll take the score information and add to my report to verify some of the information on there.”",
                    author: "Prospect researcher, religious nonprofit",
                    image: quotePersonFive,
                    imagePosition: "right",
                    align: "right",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up" data-aos-delay="500">
            <FlexOne>
              <TitleThree>Ideation</TitleThree>
              <SubTitleThree>Freehand to digitising</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                With permission to rewrite the score logic rather than restyle
                it, the range of answers opened up. Five aims carried into every
                direction:
                <ul style={{ marginLeft: "15px" }}>
                  <li>
                    <SemiBoldTxt>Words supporting numbers -</SemiBoldTxt> To
                    explore methods of scoring and reading a score{" "}
                  </li>
                  <li>
                    <SemiBoldTxt>Significance beyond a number -</SemiBoldTxt>{" "}
                    Surface the metadata that actually moves a decision{" "}
                  </li>
                  <li>
                    <SemiBoldTxt>Visuals reflecting the values -</SemiBoldTxt>{" "}
                    Reduce the load of interpretation{" "}
                  </li>
                  <li>
                    <SemiBoldTxt>Both scores viewable together -</SemiBoldTxt>{" "}
                    Different users need different ones first{" "}
                  </li>
                  <li>
                    <SemiBoldTxt>Visual consistency between them -</SemiBoldTxt>{" "}
                    They sit adjacent, so they should read as one system{" "}
                  </li>
                </ul>
              </ProjDesc>
              <div style={{ width: "100%" }}>
                <AnimatedImageContainer
                  lid={imageDetails[1].i}
                  imgSrc={imageDetails[1].src}
                  setId={() => {
                    setSelectedId(imageDetails[1].i);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
                <SubDesc style={{ marginBottom: "0%" }}>
                  Freehand meter gauge explorations
                </SubDesc>
              </div>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0 pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne />
            <FlexThree>
              <div style={{ width: "100%" }}>
                <AnimatedImageContainer
                  lid={imageDetails[2].i}
                  imgSrc={imageDetails[2].src}
                  setId={() => {
                    setSelectedId(imageDetails[2].i);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
                <SubDesc>
                  Digitised directions, showing both scores simultaneously, and
                  similarity
                </SubDesc>
              </div>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>Concepts / Version One</TitleThree>
              <SubTitleThree>
                What was taken to the clients as the first draft
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                There were 3 concepts, explorative but sufficient enough to
                consume feedback to know if we were on the right track. A few
                things that stayed across the concepts were,
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree>
              <ScorePrinciples />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0 pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree style={{ padding: "0 0 0 1.2%" }}>
              <img
                src={require("../../../assets/images/ProjectTypes/weScoreRedesign/7.png")}
                alt="Inline operators concept"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />

              <img
                src={require("../../../assets/images/ProjectTypes/weScoreRedesign/8.png")}
                alt="Inline operators concept"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  paddingTop: "3%",
                }}
              />

              <img
                src={require("../../../assets/images/ProjectTypes/weScoreRedesign/9.png")}
                alt="Inline operators concept"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  paddingTop: "3%",
                }}
              />

              <img
                src={require("../../../assets/images/ProjectTypes/weScoreRedesign/10.png")}
                alt="Inline operators concept"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  paddingTop: "3%",
                }}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>What came back from Round 1</TitleThree>
              <SubTitleThree>
                Four organizations, four industries, three time zones
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc className="pb-0" style={{ marginBottom: "1%" }}>
                <SemiBoldTxt>
                  Concept 1 was the direction, with one objection worth
                  listening to.
                </SemiBoldTxt>
              </ProjDesc>
              <ProjDesc className="pt-0 pb-0" style={{ marginBottom: "1%" }}>
                Three of four rated it 4 or 5 for clarity and usefulness. It was
                the easiest to read and the least decorative.
              </ProjDesc>
              <ProjDesc>
                The fourth rated it 2. She's the most experienced researcher in
                the sample, and when she shared her screen she scrolled straight
                past the score.
              </ProjDesc>
            </FlexTwo>
            <FlexOne></FlexOne>
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0 pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree style={{ padding: "0 0 0 1.2%" }}>
              <RatingTable
                rows={[
                  {
                    participant: "Prospect Researcher",
                    icon: quotePersonFive,
                    rating: "5 / 5 / 4",
                  },
                  {
                    participant: "Ops Director",
                    icon: quotePersonThree,
                    rating: "4 / 4 / 4 wealth, 3 donation",
                  },
                  {
                    participant: "Donor Researcher",
                    icon: quotePersonSix,
                    rating: "4 / 4 / 4",
                  },
                  {
                    participant: "Director of Prospect Research",
                    icon: quotePersonTwo,
                    rating: "2 / 2 / 2",
                    negative: true,
                  },
                ]}
                insight={{
                  quote: `“We need the Honda Civic, not the Corvette. Something reliable that I can count on, is predictable, is easy to use. Anyone can drive it.”`,
                  text: `She wasn't rejecting the concept. She was saying the score wasn't where her decision happened.`,
                }}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="right-aligned-content">
              <InsightCard
                cardWidth="87%"
                title="1. No anchors or user-defined thresholds."
                description={`The score is calibrated to Altrata's whole population. But nobody asks "is this person wealthy?" They ask "is this person right for us?" All three concepts made the number clearer. None made it relative.`}
                sideNote={{
                  title: "Tesler’s Law",
                  body: "Complexity the product refuses to handle gets exported to the user's spreadsheet.",
                }}
                sideNotePosition="left"
                mainCardColor="#C5E2D2"
                quoteCardColor="#F7FFF9"
                quotes={[
                  {
                    quote:
                      "“They might have a lower net worth than the typical, but if he's at the top of my capacity, that's what matters to me.”",
                    author: ["Ops Director, giving nonprofit"],
                    image: quotePersonThree,
                    imagePosition: "left",
                    align: "left",
                  },
                  {
                    quote:
                      "”Being able to put in what the organisation's thresholds are would be helpful with reporting, and consistency with how each organisation does their prospecting.”",
                    author: "Salesforce administrator, civil rights nonprofit",
                    image: quotePersonSix,
                    imagePosition: "right",
                    align: "right",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="left-aligned-content">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  rowGap: "10px",
                }}
              >
                <InsightCard
                  title="2. Recency is shown; significance isn't. Top causes are valuable."
                  cardWidth="62%"
                  mainCardColor="#C5E2D2"
                  quoteCardColor="#F7FFF9"
                  quotes={[
                    {
                      quote:
                        "“you pull in the most recent 5 gifts of 10,000, but you missed that the one from two years ago that was a $1,000,000 gift... I would just hate to miss someone's big gift because it wasn't the most recent.”",
                      author: "Ops Director, giving nonprofit",
                      image: quotePersonThree,
                      imagePosition: "left",
                      align: "left",
                    },
                  ]}
                />
                <InsightCard
                  title="3. Property count matters along with real estate value."
                  cardWidth="62%"
                  mainCardColor="#C5E2D2"
                  quoteCardColor="#F7FFF9"
                  quotes={[
                    {
                      quote:
                        "“Is that one piece or many pieces of real estate? That's the big deal. If they had five houses that equal 750,000 to a million, those are a lot of maybe rentals or something.”",
                      author: "Prospect researcher, religious nonprofit",
                      image: quotePersonFive,
                      imagePosition: "right",
                      align: "right",
                    },
                  ]}
                />
              </div>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="right-aligned-content">
              <InsightCard
                title="4. Vertical stacking defeats comparison in lists."
                description="In lists they want a simple, sortable value they can compare across rows at a glance, not the full summary that belongs on the profile."
                cardWidth="62%"
                mainCardColor="#C5E2D2"
                quoteCardColor="#F7FFF9"
                quotes={[
                  {
                    quote:
                      "“What's nice about the one on the left is I can compare them against each other. It's really hard to compare vertically.”",
                    author: "Ops Director, giving nonprofit",
                    image: quotePersonThree,
                    imagePosition: "left",
                    align: "left",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="left-aligned-content">
              <InsightCard
                title="5. Number still matters alongside passive words."
                cardWidth="62%"
                mainCardColor="#C5E2D2"
                quoteCardColor="#F7FFF9"
                quotes={[
                  {
                    quote:
                      "“Likely is helpful, but seeing the number would be a really strong indicator. Say 90 and higher is our goal. They're in 90, cool, we keep going. But if they're in the 80 to 90, then clicking in and seeing why might be good.”",
                    author: "Salesforce administrator, civil rights nonprofit",
                    image: quotePersonSix,
                    imagePosition: "left",
                    align: "left",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="right-aligned-content">
              <InsightCard
                title="6. The score leaves the product as an image."
                description="The score has to survive being cropped out and dropped into a document. No surrounding UI, no hover, no explanation. That rules out anything interaction-dependent, and it's why concept 2 scored lowest."
                cardWidth="62%"
                mainCardColor="#C5E2D2"
                quoteCardColor="#F7FFF9"
                quotes={[
                  {
                    quote:
                      "“I take the wealth score and add it to my shortlisted donor profiles. It's helpful for our external consultant or executive director, because they don't have access to Wealth Engine.”",
                    author: "Salesforce administrator, civil rights nonprofit",
                    image: quotePersonSix,
                    imagePosition: "left",
                    align: "left",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree className="left-aligned-content">
              <InsightCard
                title="7. Trust wasn't tracking the design."
                description="Clarity and usefulness moved with each concept. Trust didn't, and the reasons were never about what they were looking at. They were about past experience and the data itself."
                cardWidth="87%"
                mainCardColor="#C5E2D2"
                quoteCardColor="#F7FFF9"
                sideNote={{
                  title: "What I took from it.",
                  body: "Trust is earned outside the product, by cross-checking. A redesign can't move that. So the reasoning layer isn't there to convince anyone, it's there to shorten the checking they'll do anyway.",
                }}
                sideNotePosition="right"
                sideNoteColor="#FFFFFF"
                quotes={[
                  {
                    quote:
                      "“To me it's more the quality of data that can be improved, versus the visual representation.”",
                    author:
                      "Director of Prospect Research, national health nonprofit",
                    image: quotePersonTwo,
                    imagePosition: "left",
                    align: "left",
                  },
                  {
                    quote:
                      "“Most of the information is matching up with what I'm finding online. So I can verify what I'm getting from WE.”",
                    author: "Salesforce administrator, civil rights nonprofit",
                    image: quotePersonSix,
                    imagePosition: "right",
                    align: "right",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>Ideation, again</TitleThree>
              <SubTitleThree>Shaped by round 1</SubTitleThree>
            </FlexOne>
            <FlexThree>
              <div style={{ width: "100%" }}>
                <AnimatedImageContainer
                  lid={imageDetails[3].i}
                  imgSrc={imageDetails[3].src}
                  setId={() => {
                    setSelectedId(imageDetails[3].i);
                  }}
                  mediumImg={true}
                ></AnimatedImageContainer>
                <SubDesc>
                  Digitised directions, showing both scores simultaneously, and
                  similarity
                </SubDesc>
              </div>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>Version Two</TitleThree>
              <SubTitleThree>Evolution of Concept 1</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Seven of the eight round 1 findings are answered here. The
                eighth, planned giving, is a data problem rather than a design
                one, and sits with another team. Design has provided a
                placeholder.
              </ProjDesc>
            </FlexTwo>
            <FlexOne />
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0 pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne />

            <FlexThree style={{ padding: "0 0 0 1.2%" }}>
              <img
                src={require("../../../assets/images/ProjectTypes/weScoreRedesign/12.png")}
                alt="Inline operators concept"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>What came back from Round 2</TitleThree>
              <SubTitleThree>
                Four organizations, four industries, three time zones
              </SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Every participant rated it 4 or 5 for clarity. The layout
                worked, the scale gave people something to read against, and
                nobody had to be talked through it.
              </ProjDesc>
              <ProjDesc className="pt-0">
                Seven changes came out of round 2, covering asset signals,
                giving context and client-level personalisation.{" "}
              </ProjDesc>
            </FlexTwo>
            <FlexOne />
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0 pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne></FlexOne>
            <FlexThree style={{ padding: "0 0 0 1.2%" }}>
              <RatingTable
                rows={[
                  {
                    participant: "Prospect Researcher",
                    icon: quotePersonSeven,
                    rating: "4 / 4 / 3",
                  },
                  {
                    participant: "Development Director",
                    icon: quotePersonEight,
                    rating: "5 / 4 / 3",
                  },
                  {
                    participant: "Development Manager",
                    icon: quotePersonOne,
                    rating: "5 / 5 / 3-4",
                  },
                  {
                    participant: "President & CEO",
                    icon: quotePersonNine,
                    rating: "5 / 5 / 3-4",
                  },
                ]}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne />

            <FlexThree style={{ padding: "0 0 0 1.2%" }}>
              <img
                src={require("../../../assets/images/ProjectTypes/weScoreRedesign/13.png")}
                alt="Inline operators concept"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>Clarity moved. Trust didn't.</TitleThree>
              <SubTitleThree>The Finding</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Trust sat at 3–4 across every participant, both rounds, and
                every concept. Almost none of the reasons were about the design.
              </ProjDesc>
            </FlexTwo>
            <FlexOne />
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0 pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne />
            <FlexThree>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "16px",
                  rowGap: "10px",
                  alignItems: "stretch",
                  // textAlign: "center",
                }}
              >
                <QuoteCard
                  items={[
                    {
                      quote: `“No matter how amazing it looks, I'm always going to be 3 to 4 on trust. Just because of my own experiences with such products”`,
                      author: "Development Manager, regional arts nonprofit",
                      image: quotePersonOne,
                      imagePosition: "right",
                      align: "right",
                    },
                  ]}
                  color="#F7FFF9"
                />

                <QuoteCard
                  items={[
                    {
                      quote: `“I would be somewhere between a three and a four, because I have found gaps in the data.”`,
                      author: "President & CEO, community foundation",
                      image: quotePersonNine,
                      imagePosition: "left",
                      align: "left",
                    },
                  ]}
                  color="#F7FFF9"
                />
              </div>
            </FlexThree>
          </FlexRowContainer>

          <FlexRowContainer
            className="pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>What that told me</TitleThree>
              <SubTitleThree>The Reflection</SubTitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc>
                Trust is bounded by data quality and professional scepticism.
                Design can't manufacture it, but it can shorten the checking
                people do anyway. So showing where the number came from became a
                requirement, and the redesign supports verification rather than
                replacing it.
              </ProjDesc>
            </FlexTwo>
            <FlexOne />
          </FlexRowContainer>

          <FlexRowContainer
            className="pt-0 pb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FlexOne>
              <TitleThree>The Outcome</TitleThree>
            </FlexOne>
            <FlexTwo>
              <ProjDesc style={{ filter: "blur(4px)" }}>
                Product, engineering, architecture, commercial and customer
                success were all walked through the research and bought into the
                direction. The design is in production, with the full anchor
                scoped for a later release.
              </ProjDesc>
            </FlexTwo>
            <FlexOne />
          </FlexRowContainer>

          <FlexRowContainer data-aos="fade-up" data-aos-delay="500">
            <FullWidthBanner>
              <FullWidthBannerContent>
                <FullWidthBannerText>
                  Full UI walkthrough and research detail available on request
                  <br />
                  or enter the password to see the full project.
                </FullWidthBannerText>

                <FullViewButton
                  onClick={() => {
                    trackEvent("full_view_click", {
                      project: "is-united-states-not-texas",
                      destination:
                        "/projects/project_we_score_redesign_protected.pdf",
                    });
                    window.open(
                      "/projects/project_we_score_redesign_protected.pdf",
                      "_blank",
                    );
                  }}
                >
                  <img
                    src={require("../../../assets/icons/lock.png")}
                    alt=""
                    width="19"
                    height="19"
                  />
                  <RegularTxt>Full View</RegularTxt>
                </FullViewButton>
              </FullWidthBannerContent>
            </FullWidthBanner>
          </FlexRowContainer>
        </SingleProjectContainer>
        <AnimatePresence>
          {selectedImage && (
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
                  src={selectedImage.src}
                  layoutId={selectedImage.i}
                />
                <motion.div class="pop-up-base-container">
                  <LeftCaret
                    style={{
                      opacity: selectedImageIndex === 0 ? 0.5 : 1,
                    }}
                    src={require(`../../../assets/images/caret.png`)}
                    onClick={() =>
                      selectedImageIndex > 0 &&
                      setSelectedId(imageDetails[selectedImageIndex - 1].i)
                    }
                  />
                  <ModalText>{selectedImage.desc}</ModalText>
                  <RightCaret
                    style={{
                      opacity:
                        selectedImageIndex === imageDetails.length - 1
                          ? 0.5
                          : 1,
                    }}
                    src={require(`../../../assets/images/caret.png`)}
                    onClick={() =>
                      selectedImageIndex < imageDetails.length - 1 &&
                      setSelectedId(imageDetails[selectedImageIndex + 1].i)
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

export default WEScoreRedesign;
