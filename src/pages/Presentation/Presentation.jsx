import React from "react";
import CardProjects from "../../components/CardProjects/CardProjects";
import './style.css';

function Presentation() {

    return (
        <div className="header">
            <div className="my_photo"> </div>
            <div className="typewrtite">
                <h3 className="effect"> Olá, eu me chamo </h3>
                <h1 className="effect"> <span className="title_name">Guilherme</span> Santana </h1>
                <h3 className="effect"> Desenvolvedor Front-end </h3>
            </div>
        </div>
    );
}

export default Presentation;
