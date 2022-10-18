import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import { PDBg } from "../common-styled";
import { PROJECTS } from "../const";
import { ProjectsContainer } from "../performativeDesign/styled";

function UXDesign() {
  return (
    <PDBg>
      <ProjectsContainer>
        {PROJECTS["user-experience-design"].map((item, index) => {
          return (
            <Link to={`/user-experience-design/${item.to}`} key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-anchor="id1"
                id={"ind" + index}
              >
                <Card
                  imgSrc={item.imgSrc}
                  title={index + 1 + ". " + item.title}
                  desc={item.desc}
                  floatRight={item.floadtRight}
                  marginTop={item.marginTop}
                />
              </div>
            </Link>
          );
        })}
      </ProjectsContainer>
    </PDBg>
  );
}

export default UXDesign;
