import React from "react";
import { LogoAngular, LogoHtml, LogoReact } from "../Images/Images";
import "./style.css";

function CardProjects({ project }) {
  console.log(project);
  return (
    <>
      {project != null && (
        <div className="card_project">
          <img src={`${project.image}`} className="card_image" />
          
          <div className="info">
            {
              (project.framework == 'react') ?
              <figure> <LogoReact height={20} /> </figure>
              :
              (project.framework == 'angular') ?
              <figure> <LogoAngular height={20} /> </figure>
              :
              <figure> <LogoHtml height={20} /> </figure>
            }
            <article> {project.name} </article>
          </div>
        </div>
      )}
    </>
  );
}

export default CardProjects;
