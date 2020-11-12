import React from "react";
import "./style.css";


import React from 'react';

const ProjectCard = () => {
  return (
    <div className="card">
    <div className="img-container">
      <img alt="{props.name}" src="{props.image} "/>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> wilmer
        </li>
        <li>
          <strong>Occupation:</strong> coding
        </li>
        <li>
          <strong>Location:</strong> rome
        </li>
      </ul>
    </div>
    <span onClick="{() => props.removeFriend(props.id)} "className="remove">
      𝘅
    </span>
  </div>
  );
};

export default ProjectCard;




