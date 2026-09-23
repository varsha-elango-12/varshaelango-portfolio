import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import { PDBg } from "../common-styled";
import { PROJECTS } from "../const";
import { ProjectsContainer } from "../performativeDesign/styled";
import styled from "styled-components";

const ProjectSlot = styled.div`
  display: flex;
  justify-content: ${({ position }) =>
    position === "right" ? "flex-end" : "flex-start"};
  margin-top: ${({ yOffset }) => yOffset || 0}px;

  @media (max-width: 1110px) {
    width: 100%;
    justify-content: center;
    margin-top: 0;
  }
`;

function UXDesign() {
  return (
    <PDBg>
      <ProjectsContainer>
        {PROJECTS["user-experience-design"].map((item, index) => {
          const card = (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-anchor="id1"
              id={"ind" + index}
            >
              <Card
                imgSrc={item.imgSrc}
                title={item.title}
                desc={item.desc}
                subdesc={item.subdesc}
                subdescX={item.subdescX}
                subdescY={item.subdescY}
                titleNote={item.titleNote}
                titleNoteLink={item.titleNoteLink}
                floatRight={item.floadtRight}
                marginTop={item.marginTop}
              />
            </div>
          );

          return (
            <ProjectSlot
              key={index}
              position={item.position}
              yOffset={item.yOffset}
            >
              {item.pdf ? (
                <a
                  href={`${process.env.PUBLIC_URL}${item.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.title} project PDF`}
                >
                  {card}
                </a>
              ) : item.to ? (
                <Link
                  to={`/user-experience-design/${item.to}`}
                  aria-label={`View ${item.title} project`}
                >
                  {card}
                </Link>
              ) : (
                <React.Fragment>{card}</React.Fragment>
              )}
            </ProjectSlot>
          );
        })}
      </ProjectsContainer>
    </PDBg>
  );
}

export default UXDesign;
