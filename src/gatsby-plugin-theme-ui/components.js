import React from "react";
import ProjectCard from "../components/project-card";

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  // eslint-disable-next-line react/display-name
  MainTitle: ({ title, children }) => (
    <ProjectCard title={title}>{children}</ProjectCard>
  )
};
