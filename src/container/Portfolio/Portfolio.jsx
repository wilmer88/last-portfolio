import React from 'react';
import Wrapper from "./components/Wrapper/wraper.jsx"
 import ProjectCard from "./components/Project/ProjectCard.jsx"
 import Title from "./components/Title/Title.jsx"
 

const Portfolio = () => {
    return (
        <Wrapper>
        <Title>Friends List</Title>
        
          <ProjectCard
            removeFriend="{this.removeFriend}"
            id="{friend.id}"
            key="me"
            name="wil"
            occupation="ee"
            location="project"
          />
      
      </Wrapper>
    );
};

export default Portfolio;