import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import { PDBg } from "../common-styled";
import { PROJECTS } from "../const";
import { ProjectsContainer } from "./styled";

function PerformativeDesign() {
  return (
    <PDBg>
      <ProjectsContainer>
        {PROJECTS["performative-design"].map((item, index) => {
          return (
            <Link to={`/performative-design/${item.to}`} key={index}>
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

export default PerformativeDesign;
