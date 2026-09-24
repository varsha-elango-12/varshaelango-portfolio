import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import { PDBg } from "../common-styled";
import { PROJECTS } from "../const";
import { ProjectsContainer } from "./styled";
import SEO from "../../components/seo";

function PerformativeDesign() {
  return (
    <PDBg>
      <SEO
        title="Performative Design Projects - Varsha Elango"
        description="Performative design projects by Varsha Elango, combining UX research, theatre, embodiment, storytelling, and tangible interaction."
      />
      <h1 className="visually-hidden">Performative Design Projects</h1>
      <ProjectsContainer>
        {PROJECTS["performative-design"].map((item, index) => {
          return (
            <Link
              to={`/performative-design/${item.to}`}
              key={index}
              aria-label={`View ${item.title} project`}
            >
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
