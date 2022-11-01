import React from "react";
import { Link } from "react-router-dom";
import { BoldTxt } from "../performativeDesign/styled";
import { BlackBg, MI, MJBody, MJHead } from "./styled";

function MyJourney() {
  return (
    <BlackBg>
      <MJHead data-aos="fade-up" data-aos-duration="800" id="fr">
        <h2>When?</h2>
        <h2>What?</h2>
        <h2>Where?</h2>
        <h2>Wandered around,</h2>
        <h2>I learnt...</h2>
      </MJHead>
      <MJBody
        className="hl-row"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-anchor="#fr"
      >
        <p>Oct, 2021 - Dec, 2022</p>
        <p>
          <BoldTxt>MA in User Experience Design</BoldTxt>
        </p>
        <p>
          <a
            target="_blank"
            href="https://www.arts.ac.uk/colleges/london-college-of-communication"
          >
            <BoldTxt>London college of Communication, </BoldTxt>
            <br />
            UAL, London, UK
          </a>
        </p>
        <p className="pli">User Experience + performative design</p>
        <p>To make my mind think differently, beyond I could imagine.</p>
      </MJBody>
      <MI
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-anchor="#fr"
      >
        Performed a monoact, 'The formless emotions' for a competition with
        Living waters museum
      </MI>

      <MJBody
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
        data-aos-anchor="#fr"
      >
        <p>Mar, 2021 - Sept, 2021</p>
        <p>
          <BoldTxt>UI/UX Designer</BoldTxt>
        </p>
        <p>
          <a target="_blank" href="https://ramboll.com/">
            <BoldTxt>Ramboll Pvt Ltd,</BoldTxt>
            <br />
            Chennai, India
          </a>
        </p>
        <p className="pli">
          Web applications catering internal teams, Ramboll brand guideline
          design
        </p>
        <p>
          I exposed to a corporate work setup but hated the online
          office/meetings
        </p>
      </MJBody>

      <MJBody
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
        data-aos-anchor="#fr"
      >
        <p>Oct, 2020 - Jan, 2021</p>
        <p>
          <BoldTxt>UI/UX Designer</BoldTxt>
        </p>
        <p>
          <a target="_blank" href="https://www.quaticstech.com/">
            <BoldTxt>Quatics Tech Pvt Ltd,</BoldTxt>
            <br />
            Chennai, India
          </a>
        </p>
        <p className="pli">
          8+ Web applications, catering school students, brand identity, web
          design
        </p>
        <p>Importance of interdependencies between teams in a company.</p>
      </MJBody>
      <MI
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="600"
        data-aos-anchor="#fr"
      >
        Simultaneously, attended theatre workshops and was an artist member at
        Udalveli Arts, Coimbatore, India
      </MI>

      <MJBody
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="700"
        data-aos-anchor="#fr"
      >
        <p>Dec, 2019 - July, 2020</p>
        <p>
          <BoldTxt>Product designer, Final Project</BoldTxt>
        </p>
        <p>
          <a target="_blank" href="https://www.wallistry.com/">
            <BoldTxt>Wallistry, </BoldTxt>
            <br />
            Chennai, India
          </a>
        </p>
        <p className="pli">
          Wellness & Stationery, packaging, brand identity + photography
        </p>
        <p>
          Multi-tasking and spontaneous management of duties in a small team
        </p>
      </MJBody>

      <MJBody
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="800"
        data-aos-anchor="#fr"
      >
        <p>May, June in 2019</p>
        <p>
          <BoldTxt>Product design Intern</BoldTxt>
        </p>
        <p>
          <a target="_blank" href="https://www.wallistry.com/">
            <BoldTxt>Wallistry, </BoldTxt>
            <br />
            Chennai, India
          </a>
        </p>
        <p className="pli">
          Lifestyle products, stationery, packaging, brand communication + some
          photography
        </p>
        <p>
          Multi-tasking and spontaneous management of duties in a small team
        </p>
      </MJBody>

      <MJBody
        className="hl-row"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-anchor="#fr"
      >
        <p>June, 2016 - July, 2020</p>
        <p>
          <BoldTxt>Bachelor of Industrial Design</BoldTxt>
        </p>
        <p>
          <a target="_blank" href="https://djad.in/">
            <BoldTxt>DJ Academy of Design,</BoldTxt> <br />
            Coimbatore, India
          </a>
        </p>
        <p className="pli">
          Lifestyle accessory, furniture and jewellry design + design thinking +
          theatre
        </p>
        <p>Understanding the role of a designer in our society</p>
      </MJBody>
    </BlackBg>
  );
}

export default MyJourney;
