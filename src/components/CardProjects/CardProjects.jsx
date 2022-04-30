import React from "react";
import './style.css';
import image from '../../assets/pages/screen.png';

function CardProjects({project}) {
    console.log(project);
    return (
        
            <>
{project!=null &&(

            <div className="card_project">
                <img src={`${project.image}`} className="card_image" />
                {/* {project.name} */}
            </div>)}
            </>
        
    );
}

export default CardProjects;
