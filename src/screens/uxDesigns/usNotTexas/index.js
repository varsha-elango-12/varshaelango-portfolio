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
    RegularTxt,
    RegularITxt,
    BoldTxt,
    SemiBoldTxt,
    SBTxt,
    MediumTxt,
    LightITxt

} from "../../performativeDesign/styled";

import {
    ResearchCallout,
    ResearchCalloutIcon,
    ResearchCalloutTitle,
    ResearchCalloutBody,
    HighlightCard,
    HighlightCard2,
    FullWidthBanner,
    FullWidthBannerContent,
    FullWidthBannerText,
    FullViewButton,
    EntryGate,
    EntryGateContent,
    EntryGateText,
    EntryGateActions,
    PublicViewButton,
    EntryFullViewButton
} from "./styled"
import "../../performativeDesign/style.css";
import {
    LeftCaret,
    ModalText,
    PDBg,
    RightCaret,
    VideoFrame,
} from "../../common-styled";
import AnimatedImageContainer from "../../../components/animatedImageContainer";
import { imageDetails } from "./imageDetails";


function JustNameless() {
    const [isEntryGateOpen, setIsEntryGateOpen] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedText, setSelectedText] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <PDBg>
            {isEntryGateOpen && (
                <EntryGate role="dialog" aria-modal="true" aria-labelledby="entry-gate-text">
                    <EntryGateContent>
                        <EntryGateText id="entry-gate-text">
                            Some parts of this page are protected. View a limited public version, or enter the password to see the full project.
                        </EntryGateText>
                        <EntryGateActions>
                            <PublicViewButton type="button" onClick={() => setIsEntryGateOpen(false)}>
                                <img
                                    src={require('../../../assets/icons/seen.png')}
                                    alt=""
                                    width="24"
                                    height="24"
                                />
                                <MediumTxt style={{ fontSize: '20px' }}>Public View</MediumTxt>
                            </PublicViewButton>
                            <EntryFullViewButton
                                type="button"
                                onClick={() => {
                                    window.open('/projects/project_boolean_protected.pdf', '_blank', 'noopener,noreferrer');
                                    setIsEntryGateOpen(false);
                                }}
                            >
                                <img
                                    src={require('../../../assets/icons/lock.png')}
                                    alt=""
                                    width="24"
                                    height="24"
                                />
                                <MediumTxt style={{ fontSize: '20px' }}>Full View</MediumTxt>
                            </EntryFullViewButton>
                        </EntryGateActions>
                    </EntryGateContent>
                </EntryGate>
            )}
            <AnimateSharedLayout type="crossfade">
                <SingleProjectContainer>
                    <FlexRowContainer data-aos="fade-up" className='pb-0'>
                        <ProjTitle style={{ color: COLORS.TEXT_COLOR[1050] }}>
                            Is United States, <br />Not Texas.
                        </ProjTitle>
                        <FlexThree className="top-cont">
                            <FlexCol style={{ padding: '0 4% 0 0' }}>
                                <ProjDesc style={{ color: COLORS.TEXT_COLOR[1050] }}>
                                    <BoldTxt>
                                        Design boolean logic conditions (AND/OR/NOT) into the Advanced search filters of a people intelligence platform.
                                    </BoldTxt>
                                    <br /><br /><br /><br /><br /><br />
                                    <SemiBoldTxt>The problem:</SemiBoldTxt> Users couldn't search for "CEOs in the US but not Texas, who donated $20k to education but not to Harvard." AND/OR/NOT didn't extend across all available filters.
                                    <br /><br />
                                    <SemiBoldTxt>Why it mattered:</SemiBoldTxt> Four legacy brands already did this in some capacity, and we were migrating their users to Altrata. Parity was the condition of the migration, not a feature request. The cost of missing it was churn and lost renewals.
                                    <br /><br />
                                    <SemiBoldTxt>My position:</SemiBoldTxt> The immediate ticket scoped boolean to location filters only. I pushed for solving it across all of them, and got the time to do it. A partial fix would have meant rebuilding it later.
                                </ProjDesc>
                            </FlexCol>

                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <MediumImgTop
                                    src={require("../../../assets/images/ProjectTypes/usNotTexas/thumbnail.png")}
                                    style={{ height: 'max-content', width: '16.25vw', paddingBottom: '2%' }}
                                />
                                <ProjDesc style={{ color: COLORS.TEXT_COLOR[1050] }}>
                                    <div className="project-detail-row">
                                        <span>Project Partner: </span><MediumTxt>Altrata, London</MediumTxt>
                                    </div>

                                    <div className="project-detail-row">
                                        <span>Lead Designer: </span><MediumTxt>Varsha Elango</MediumTxt>
                                    </div>

                                    <div className="project-detail-row">
                                        <span>Team: </span><MediumTxt>Designer, Project Manager</MediumTxt>
                                    </div>
                                    <div class="tag-container">
                                        <span class="pill-tag">UX/UI Design</span>
                                        <span class="pill-tag">Interaction Design</span>
                                        <span class="pill-tag">User Testing</span>
                                        <span class="pill-tag">Prototyping</span>
                                        <span class="pill-tag">Product Strategy</span>
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
                            <TitleThree>The Problem’s Problem</TitleThree>
                            <SubTitleThree>
                                Zooming out
                            </SubTitleThree>
                        </FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                Two requirements arrived with almost the same need. <SemiBoldTxt>One was urgent</SemiBoldTxt> and
                                <SemiBoldTxt> small, one larger</SemiBoldTxt> and <SemiBoldTxt>scheduled for later. </SemiBoldTxt>
                                A quick win would hit parity fast, but guarantee a revision loop for everything else.
                                <SemiBoldTxt> Double the work, double the time.</SemiBoldTxt>
                            </ProjDesc>
                        </FlexTwo>
                        <FlexOne></FlexOne>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne> </FlexOne>
                        <FlexThree>
                            <ProjDesc style={{ display: 'flex', gap: '12px' }}>
                                <span style={{ background: '#fff', padding: '8px', borderRadius: '2px' }}>
                                    1. Boolean logic in <SBTxt>Location filters only</SBTxt>
                                </span>

                                <span style={{ background: '#fff', padding: '8px', borderRadius: '2px' }}>
                                    2. Boolean logic in Location filters{' '}
                                    <SBTxt style={{ color: COLORS.TEXT_COLOR[900] }}>+ all other filters</SBTxt>
                                </span>
                            </ProjDesc>

                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                I made the case for solving it once, properly, and got the scope changed.
                                <SemiBoldTxt> Solve for tomorrow, and today solves itself. </SemiBoldTxt>
                            </ProjDesc>
                        </FlexTwo>
                        <FlexOne></FlexOne>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="p-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne>
                            <TitleThree>Design Approach</TitleThree>
                        </FlexOne>
                        <FlexTwo>
                            <ProjDesc className="pb-0">
                                I set out a clear approach for my team to proceed with.
                            </ProjDesc>
                        </FlexTwo>
                        <FlexOne></FlexOne>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="p-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne> </FlexOne>
                        <FlexThree>
                            <ProjDesc style={{ display: 'flex', gap: '3px', alignItems: 'center', fontFamily: 'PM', color: COLORS.TEXT_COLOR[1100] }}>
                                <span>Ticket</span>
                                <span style={{ fontSize: '30px', paddingBottom: '1%' }}>&#8594;</span>
                                <span>Define the bigger scope</span>
                                <span style={{ fontSize: '30px', paddingBottom: '1%' }}>&#8594;</span>
                                <span>Research</span>
                                <span style={{ fontSize: '30px', paddingBottom: '1%' }}>&#8594;</span>
                                <span>Design</span>
                                <span style={{ fontSize: '30px', paddingBottom: '1%' }}>&#8594;</span>
                                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                    <span style={{ color: COLORS.TEXT_COLOR[900] }}>Test concepts with users</span>
                                    <span className="pill-tag-green"><RegularTxt>faster with </RegularTxt><SBTxt>AI</SBTxt></span>
                                </span>
                                <span style={{ fontSize: '30px', paddingBottom: '1%' }}>&#8594;</span>
                                <span>Find out</span>
                                <span style={{ fontSize: '30px', paddingBottom: '1%' }}>&#8594;</span>
                                <span>Build</span>
                            </ProjDesc>
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne>
                            <TitleThree>Research + Conceptualisation</TitleThree>
                        </FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                We started from <SemiBoldTxt>past session recordings</SemiBoldTxt> of clients
                                using advanced search, alongside <SemiBoldTxt>secondary research </SemiBoldTxt>
                                into how boolean logic actually works. Boolean had to sit above the launched
                                feature, and designing inside that structure looked like it would force compromises.
                            </ProjDesc>
                            <ProjDesc>
                                Rather than assume that, <SemiBoldTxt>I split the exploration deliberately.</SemiBoldTxt> I directed
                                my designer to work boolean into the existing advanced search, and took the opposite brief
                                myself: question the current approach and <SemiBoldTxt>design from a new perspective. </SemiBoldTxt>
                                Testing could then tell us whether something better existed.
                            </ProjDesc>
                            <ProjDesc>
                                <span className="pill-tag-green" style={{ fontFamily: 'PR' }}>I drew variations and used
                                    <SBTxt> Claude</SBTxt> to translate them into low-fi
                                    wireframes.
                                </span>
                            </ProjDesc>

                            <div style={{ width: "100%" }}>
                                <AnimatedImageContainer
                                    lid={1}
                                    imgSrc={require(`../../../assets/images/ProjectTypes/usNotTexas/1.png`)}
                                    setId={() => {
                                        setSelectedId(1);
                                        setSelectedText(imageDetails[0].desc);
                                    }}
                                    mediumImg={true}
                                ></AnimatedImageContainer>

                            </div>
                        </FlexTwo>
                        <FlexOne></FlexOne>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexThree>


                            <div>
                                <AnimatedImageContainer
                                    lid={2}
                                    imgSrc={require(`../../../assets/images/ProjectTypes/usNotTexas/2.png`)}
                                    setId={() => {
                                        setSelectedId(2);
                                        setSelectedText(imageDetails[1].desc);
                                    }}
                                    mediumImg={true}
                                ></AnimatedImageContainer>
                            </div>




                        </FlexThree>

                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                Several iterations later, the two briefs had resolved into
                                <SemiBoldTxt> genuinely different concepts. </SemiBoldTxt>
                                One was a new approach none of the legacy brands had, closer to how comparably complex products work elsewhere but tuned to Altrata. The other embedded boolean into the current structure, with all filters displayed at once.
                            </ProjDesc>
                        </FlexTwo>
                        <FlexOne></FlexOne>

                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne> </FlexOne>
                        <FlexThree>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    columnGap: '10px',
                                    rowGap: '10px',
                                    alignItems: 'start',
                                }}
                            >
                                <ProjDesc
                                    className="pb-0"
                                    style={{ color: COLORS.TEXT_COLOR[1100], margin: 0 }}
                                >
                                    <MediumTxt>
                                        Concept A <LightITxt>(mine)</LightITxt> assumes you think in rules,
                                        and gives you a blank slate to build one.
                                    </MediumTxt>
                                </ProjDesc>

                                <ProjDesc
                                    className="pb-0"
                                    style={{ color: COLORS.TEXT_COLOR[1100], margin: 0 }}
                                >
                                    <MediumTxt>
                                        Concept B <LightITxt>(Zara's)</LightITxt> assumes you think in filters,
                                        and fits boolean into the modules you already use.
                                    </MediumTxt>
                                </ProjDesc>

                                <div
                                    style={{
                                        width: '100%',
                                        margin: 0,
                                        padding: 0,
                                    }}
                                >
                                    <img
                                        src={require('../../../assets/images/ProjectTypes/usNotTexas/3.png')}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: 'auto',
                                            margin: '-10px',
                                            padding: 0,
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        width: '100%',
                                        margin: 0,
                                        padding: 0,
                                    }}
                                >
                                    <img
                                        src={require('../../../assets/images/ProjectTypes/usNotTexas/4.png')}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: 'auto',
                                            margin: '-10px',
                                            padding: 0,
                                        }}
                                    />
                                </div>
                            </div>
                            
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className=" pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                The question was what users preferred, <SemiBoldTxt>how much complexity they'd tolerate,</SemiBoldTxt>
                                and whether one <SemiBoldTxt>product could serve both or needed to let users choose.</SemiBoldTxt>
                                <br />
                                Every round of testing ahead was an attempt to answer that.
                            </ProjDesc>
                        </FlexTwo>
                        <FlexOne></FlexOne>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne>
                            <TitleThree>Design Toolkit</TitleThree>
                            <SubTitleThree>Prepping for Testing</SubTitleThree>
                        </FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                The concepts were still low-fidelity and light on detail,
                                so clients weren't the right audience yet. I <SemiBoldTxt>proposed internal
                                    product stakeholders as a first check:</SemiBoldTxt> people who could
                                tell us quickly whether the two directions worked,
                                aligned with strategy, and were worth taking further.
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
                        <FlexThree>
                            <div
                                style={{
                                    fontSize: 'clamp(16px, 1vw, 20px)',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    textAlign: 'center',
                                    columnGap: 'clamp(10px, 2vw, 40px)',
                                    width: '85%',
                                    margin: '0 auto',
                                }}
                            >
                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>2</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>Finalised concepts</div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>10</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>
                                        Internal Stakeholders<br />
                                        (Data, Product, Dev)
                                    </div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>20 mins</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>per session</div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>1</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>week</div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: 'clamp(14px, 0.84vw, 24px)' }}>
                                <span className="pill-tag-green" style={{ display: 'inline-block' }}>
                                    with interactive prototypes, built with <SBTxt>Claude AI</SBTxt>
                                </span>
                            </div>
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        
                        data-aos="fade-up"
                        data-aos-delay="500"
                        style={{paddingTop:'2%'}}
                    >
                        <ResearchCallout>
                            <ResearchCalloutIcon>
                                <img
                                    src={require('../../../assets/images/ProjectTypes/usNotTexas/ai-robo.png')}
                                    alt=""
                                />
                            </ResearchCalloutIcon>

                            <ResearchCalloutTitle style={{marginRight: '20%'}}>
                                <MediumTxt>Speed as a research method.</MediumTxt>
                            </ResearchCalloutTitle>

                            <ResearchCalloutBody style={{marginLeft: '10%'}}>
                                <RegularTxt>Claude turned sketches into low-fi wireframes and interactive prototypes
                                fast enough to test with evidence. That meant <SemiBoldTxt>28 participants across
                                    3 rounds in 6 weeks</SemiBoldTxt>, clicking real interactions rather than static
                                screens.</RegularTxt>
                            </ResearchCalloutBody>

                            <ResearchCalloutBody style={{marginLeft: '10%'}}>
                                <RegularITxt>For a problem this abstract, that was the difference between opinion and evidence.</RegularITxt>
                            </ResearchCalloutBody>
                        </ResearchCallout>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne>
                            <TitleThree>Expectation vs Reality</TitleThree>
                            <SubTitleThree>Round 1</SubTitleThree>
                        </FlexOne>
                        <FlexThree>
                            <ProjDesc className="pb-0" style={{marginBottom:'2%'}}>Testing returned a <SemiBoldTxt>tie.</SemiBoldTxt></ProjDesc>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                columnGap: '10px',
                                alignItems: 'start',
                            }}>
                                <ProjDesc><SemiBoldTxt style={{ color: '#206dc0', fontSize: 'clamp(20px, 0.84vw, 28px)' }}>we love Concept A!  (50%)</SemiBoldTxt></ProjDesc>
                                <ProjDesc><SemiBoldTxt style={{ color: '#0b7d4c', fontSize: 'clamp(20px, 0.84vw, 28px)' }}>we love Concept B!  (50%)</SemiBoldTxt></ProjDesc>

                                <ProjDesc className="shantell-sans-font">“Rule builders are the new age filters now.” <span style={{ color: '#206dc0' }}>(Data Product Manager)</span></ProjDesc>
                                <ProjDesc className="shantell-sans-font">“I like to see all the options available to me. That helps me make a decision.” <span style={{ color: '#0b7d4c' }}>(Developer)</span></ProjDesc>
                                <ProjDesc className="shantell-sans-font">“I got something pretty complex in like a minute and a half, that’s very helpful.” <span style={{ color: '#206dc0' }}>(Account Manager)</span></ProjDesc>
                                <ProjDesc className="shantell-sans-font">“I feel like it should just be baked in. It's just an extra step that I don't think I need to take.” <span style={{ color: '#0b7d4c' }}>(Senior Product Manager)</span></ProjDesc>
                                <ProjDesc className="shantell-sans-font">“Having and/or idea on each filter makes it quite confusing for me. Whereas this makes it incredibly simple." <span style={{ color: '#206dc0' }}>(Product Director)</span></ProjDesc>
                                <ProjDesc className="shantell-sans-font">“It opens a completely new UI for us to build a query, and it was not very intuitive for me.” <span style={{ color: '#0b7d4c' }}>(Product Manager)</span></ProjDesc>


                            </div>

                            <HighlightCard className="color-1">
                                <div className="grain" />
                                <h3>Key Highlight.</h3>
                                <p>
                                    A visible pattern emerged. Tech-savvy participants preferred the
                                    self-build option; less tech-savvy ones preferred it built in.
                                    <SemiBoldTxt>
                                        {' '}A preference split rather than a usability issue.
                                    </SemiBoldTxt>
                                </p>
                            </HighlightCard>

                            <HighlightCard className="color-2">
                                <div className="grain" />
                                <h3>Insights that fed into the design.</h3>
                                <ul>
                                    <li>The live query statement reassured people their filter selections had registered.</li>
                                    <img src={require('../../../assets/images/ProjectTypes/usNotTexas/6.png')} />
                                    <li>Colour contrast between "is" and "is not" also reassured selection.</li>
                                    <img className="width-45" src={require('../../../assets/images/ProjectTypes/usNotTexas/7.png')} />
                                    <li>Group multiple values of the same field together rather than stacking them separately. The UI automatically combine values of duplicate fields.</li>
                                    <li>Reduce the burden of knowing what sits behind each filter when the list isn't laid out. Searchable filters.</li>
                                    <img className="width-45" src={require('../../../assets/images/ProjectTypes/usNotTexas/8.png')} />
                                    <li>Provide undo for an accidentally removed rule.</li>
                                    <img className="width-45" src={require('../../../assets/images/ProjectTypes/usNotTexas/9.png')} />

                                </ul>


                                <span className="pill-tag-brown" style={{ display: 'inline-block', color: '#f5f5f5', fontSize: 'clamp(14px, 0.75vw, 16px)' }}><SBTxt>This was more like group ideation, and it gave us the detailing we needed!</SBTxt></span>

                            </HighlightCard>
                        </FlexThree>

                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                        style={{paddingTop:'1%'}}
                    >
                        <FlexOne></FlexOne>
                        <FlexThree className="right-aligned-content">

                            <span className="pill-tag-red" style={{ margin: '-8px 5px 0 0' }}><SBTxt>but...</SBTxt></span>


                            <HighlightCard2 style={{ width: '63%' }}>
                                <div className="grain" />
                                <h3>What was missing.</h3>
                                <p >
                                    Internal stakeholders knew the product and gave us good
                                    enhancement ideas, but <SemiBoldTxt>no real use cases.</SemiBoldTxt> Useful for
                                    shaping the concepts, not for choosing between them.
                                </p>
                            </HighlightCard2>

                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne>
                            <TitleThree>The Upgrade</TitleThree>
                            <SubTitleThree>Round 2 of testing</SubTitleThree>
                        </FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                To fill that gap I proposed a closer proxy: Commercial
                                and Customer Success, who spend the most time with
                                clients. It also bought time to deepen the concepts
                                before reaching real users.
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
                        <FlexThree>
                            <div
                                style={{
                                    fontSize: 'clamp(16px, 1vw, 20px)',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    textAlign: 'center',
                                    columnGap: 'clamp(10px, 2vw, 40px)',
                                    width: '85%',
                                    margin: '0 auto',
                                }}
                            >
                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>2</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>Updated concepts</div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>8</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>
                                        Commercial & CS
                                    </div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>30-40 mins</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>per session</div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>1</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>week</div>
                                </div>
                            </div>
                            
                            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: 'clamp(14px, 0.84vw, 24px)' }}>
                                <span className="pill-tag-green" style={{ display: 'inline-block' }}>
                                    with interactive prototypes, built with <SBTxt>Claude AI</SBTxt>
                                </span>
                            </div>
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                <br/>
                                Round 2 gave us a lot of insight, alongside a pattern of
                                bias. Close as they were to clients, their read was
                                still secondhand.
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
                            <div style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
                                <img
                                    src={require('../../../assets/images/ProjectTypes/usNotTexas/10.png')}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        maxWidth: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </div>
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne />

                        <FlexThree className="right-aligned-content">
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '6.8fr 3.2fr',
                                    gridTemplateRows: 'auto auto',
                                    width: '100%',
                                    marginLeft: 'auto',
                                    columnGap: '15px',
                                    alignItems: 'start',
                                }}
                            >
                                {/* LEFT: card + image */}
                                <div
                                    style={{
                                        gridColumn: '1',
                                        gridRow: '1',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        alignItems: 'flex-end'
                                    }}
                                >
                                    <HighlightCard
                                        className="color-1"
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <div className="grain" />

                                        <h3>Key highlight & what AI couldn't see.</h3>

                                        <p>
                                            Five of eight participants, all experienced at training clients,
                                            first tried to type their <SemiBoldTxt>whole query into a single keyword</SemiBoldTxt>
                                            {' '}field using parentheses, quotation marks and AND/OR/NOT directly.
                                            Muscle memory, acted out silently. No transcript captures that. So I
                                            directed the team to run a <SemiBoldTxt>manual pass on interactions,
                                                facial reactions, and physical movement</SemiBoldTxt> toward the screen.
                                        </p>
                                    </HighlightCard>

                                    <img
                                        src={require('../../../assets/images/ProjectTypes/usNotTexas/11.png')}
                                        style={{
                                            display: 'block',
                                            width: '65%',
                                            height: 'auto',
                                            // marginTop: 'auto',
                                            marginRight: '-1.5%',
                                        }}
                                    />
                                </div>

                                {/* RIGHT IMAGE */}
                                <img
                                    src={require('../../../assets/images/ProjectTypes/usNotTexas/12.png')}
                                    style={{
                                        gridColumn: '2',
                                        gridRow: '1',
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        // paddingTop: '5px'
                                    }}
                                />

                                {/* CAPTION */}
                                <div
                                    style={{
                                        gridColumn: '1',
                                        gridRow: '2',
                                        width: '63%',
                                        marginTop: '6px',
                                        marginLeft: 'auto',
                                        textAlign: 'center',
                                        fontFamily: '"PR"',
                                        fontSize: 'clamp(12px, 0.7vw, 16px)',
                                        lineHeight: '1.2',
                                    }}
                                >
                                    Director of Client Success leading in. The kind of signal no
                                    transcript captures.
                                </div>
                            </div>
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne />
                        <FlexThree>
                            <HighlightCard className="color-2" style={{marginBottom: '12px'}}>
                                <div className="grain" />
                                <h3>Insights that fed into the design.</h3>
                                <ul>
                                    <li>On Concept A, most users searched by value rather than by field - <SemiBoldTxt>"CEO" rather than "Role title."</SemiBoldTxt> A mental model worth designing to.</li>
                                    <li>Make <SemiBoldTxt>keyword search boolean-capable in its own right, </SemiBoldTxt>since that's where people instinctively went first.</li>
                                    <li>The <SemiBoldTxt>readable summary</SemiBoldTxt> can extend <SemiBoldTxt>into exports,</SemiBoldTxt> so gift officers and managers not using the platform still see the criteria.</li>
                                    <li>A <SemiBoldTxt>clearer toggle</SemiBoldTxt> for what advanced logic will do.</li>

                                </ul>


                                <span className="pill-tag-brown" style={{ display: 'inline-block', color: '#f5f5f5', fontSize: 'clamp(14px, 0.75vw, 16px)', right:'-225px', top:'50%'}}><SBTxt>Sharpened both concepts considerably.</SBTxt></span>

                            </HighlightCard>

                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne> </FlexOne>
                        <FlexThree>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '2.65fr 7.35fr',
                                    columnGap: '10px',
                                    alignItems: 'start',
                                }}
                            >
                                <div
                                    style={{
                                        width: '100%',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <img
                                        src={require('../../../assets/images/ProjectTypes/usNotTexas/13.png')}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        width: '100%',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <img
                                        src={require('../../../assets/images/ProjectTypes/usNotTexas/14.png')}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>

                                <ProjDesc style={{marginLeft:'1%'}}>
                                    Concept A, allowing search by values while adding conditions.
                                </ProjDesc>

                                <ProjDesc style={{marginLeft:'1%'}}>
                                    Concept A, extending the search summary export into sharing an ongoing
                                    search with teammates.
                                </ProjDesc>
                            </div>
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexThree className="right-aligned-content">

                            <span className="pill-tag-red" style={{ marginTop: '-8px' }}><SBTxt>but...</SBTxt></span>


                            <HighlightCard2 style={{ width: '60%' }}>
                                <div className="grain" />
                                <h3>Growing pattern.</h3>

                                <ul>
                                    <li><SemiBoldTxt>Technical confidence </SemiBoldTxt>
                                        shaped preference here too, but with more to it.
                                        Half the participants wanted Concept A for themselves
                                        and Concept B for their clients, assuming from past
                                        experience that A would need more hand-holding.
                                        That judgment was about people who weren't in the room.
                                    </li>
                                    <li>
                                        Concept A was more targeted, built for power boolean users.
                                        B's summary was great, but <SemiBoldTxt>scrolling through
                                            filters made it easy to get lost,</SemiBoldTxt> the
                                        same problem clients already had with the existing list.
                                    </li>
                                    <li>
                                        <SemiBoldTxt>Almost everyone wanted parts of both, </SemiBoldTxt>
                                        neither one whole. That matched our instinct, though it needed
                                        real users to confirm.
                                    </li>
                                </ul>
                            </HighlightCard2>

                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexThree className="left-aligned-content">

                            <span className="pill-tag-red" style={{ marginTop: '-8px' }}><SBTxt>but...</SBTxt></span>


                            <HighlightCard2 style={{ width: '80%' }}>
                                <div className="grain" />
                                <h3>What should be improved.</h3>

                                <ul>
                                    <li>We showed Concept A first to some participants
                                        and B first to others, and saw that whichever came
                                        first gave people time to <SemiBoldTxt>warm to boolean
                                            before the second. </SemiBoldTxt>We needed
                                        to <SemiBoldTxt>reduce that influence</SemiBoldTxt> in
                                        the next round.
                                    </li>
                                    <li>
                                        We asked people to think of a complex query live in the session, which was difficult to do on the spot. A heads-up to <SemiBoldTxt>prepare one beforehand </SemiBoldTxt>
                                        would have helped.
                                    </li>
                                </ul>
                            </HighlightCard2>

                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne>
                            <TitleThree>Getting to the clients</TitleThree>
                            <SubTitleThree>Round 3 - A/B Split</SubTitleThree>

                        </FlexOne>
                        <FlexTwo>
                            <ProjDesc>
                                To <SemiBoldTxt>tackle concept bias, I proposed an A/B split</SemiBoldTxt>
                                for round 3, tracking discoverability, onboarding and
                                feature adoption unaided rather than hand-held.
                                <br />
                                In my experience across enterprise products,
                                <SemiBoldTxt>client time is the scarcest resource.</SemiBoldTxt>
                                What comes back from commercial is consistently
                                "clients are busy," "we can't bother them now,"
                                "show them the final version." Round 3 took Two
                                weeks against one for the earlier rounds, and that's why.
                            </ProjDesc>
                        </FlexTwo>
                        <FlexOne> </FlexOne>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexThree>
                            <div
                                style={{
                                    fontSize: 'clamp(16px, 1vw, 20px)',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(5, 1fr)',
                                    textAlign: 'center',
                                    columnGap: 'clamp(10px, 2vw, 40px)',
                                    width: '100%',
                                    margin: '0 auto',
                                }}
                            >
                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>2</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>Refined high-fidelity concepts</div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>10</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>
                                        Clients from a minimum 4 verticals
                                    </div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>A/B Split</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>Design research method</div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>30-40 mins</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>per session</div>
                                </div>

                                <div>
                                    <div style={{ fontSize: 'clamp(18px, 1.2vw, 32px)', fontFamily: 'PSB' }}>3</div>
                                    <div style={{ fontSize: 'clamp(14px, 0.84vw, 24px)' }}>weeks</div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: 'clamp(14px, 0.84vw, 24px)'}}>
                                <span className="pill-tag-green" style={{ display: 'inline-block' }}>
                                    with interactive prototypes, built with <SBTxt>Claude AI</SBTxt>
                                </span>
                            </div>
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne> </FlexOne>
                        <FlexThree className="right-aligned-content">
                            <div
                                style={{
                                    width: '85%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <img
                                    src={require('../../../assets/images/ProjectTypes/usNotTexas/15.png')}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />

                                <ProjDesc style={{paddingLeft:'1%'}}>
                                    Concept A, extending the search summary export into sharing an ongoing
                                    search with teammates.
                                </ProjDesc>
                            </div>
                        </FlexThree>
                    </FlexRowContainer>

                    <FlexRowContainer
                        className="pt-0 pb-0"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <FlexOne></FlexOne>
                        <FlexThree>
                            <HighlightCard className="color-3">
                                <div className="grain" />
                                <h3>We are at:</h3>
                                <ul>
                                    <li><SemiBoldTxt>Round 3 is running now:</SemiBoldTxt> <br />
                                        A/B split with 10 clients across four verticals, tracking
                                        discoverability, onboarding and feature adoption.
                                    </li>
                                    <li><SemiBoldTxt>What I'm betting on is Concept C:</SemiBoldTxt> <br />
                                        A balanced in-between, a powerful keyword search, and a readable summary of the criteria, letting users move from ready-made filters toward personalised ones at their own pace. The split test exists to check that bet, not confirm it.
                                    </li>


                                </ul>


                                <span
                                    className="pill-tag-brown"
                                    style={{
                                        display: 'inline-block',
                                        color: '#FFF8EA',
                                        fontSize: 'clamp(14px, 0.75vw, 16px)',
                                        right: '-265px',
                                        top: '50%',
                                        whiteSpace: 'nowrap',
                                        width: 'max-content',
                                    }}
                                >
                                    <SBTxt>...further testings as it demands.</SBTxt>
                                </span>
                            </HighlightCard>
                        </FlexThree>

                    </FlexRowContainer>

                    <FlexRowContainer>
                        <FullWidthBanner>
                            <FullWidthBannerContent>
                                <FullWidthBannerText>
                                    Full UI walkthrough and research detail available on request
                                    <br />
                                    or enter the password to see the full project.
                                </FullWidthBannerText>

                                <FullViewButton
                                    onClick={() => window.open('/projects/project_boolean_protected.pdf', '_blank')}
                                >
                                    <img
                                        src={require('../../../assets/icons/lock.png')}
                                        alt=""
                                        width="24"
                                        height="24"
                                    />
                                    <RegularTxt>Full View</RegularTxt>
                                </FullViewButton>
                            </FullWidthBannerContent>
                        </FullWidthBanner>
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
                                    src={require(`../../../assets/images/ProjectTypes/usNotTexas/${selectedId}.png`)}
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
                                                setSelectedText(imageDetails[selectedId - 2].desc))
                                        }
                                    />
                                    <ModalText>{selectedText}</ModalText>
                                    <RightCaret
                                        style={{
                                            opacity: selectedId >= 2 ? 0.5 : 1,
                                        }}
                                        src={require(`../../../assets/images/caret.png`)}
                                        onClick={() =>
                                            selectedId < 2 &&
                                            (setSelectedId(parseFloat(selectedId) + 1),
                                                setSelectedText(imageDetails[selectedId].desc))
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
