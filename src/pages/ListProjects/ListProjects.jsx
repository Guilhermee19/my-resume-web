import React from "react";
import CardProjects from "../../components/CardProjects/CardProjects";
import './style.css';

function ListProjects({list}) {
    console.log(list);
    return (
         <div className="card_projects">
            <div className="title"> <h2>- Projetos -</h2> </div> 
            {list.map((obj) => (
                <a className="card" href={obj.link} target="_blank"> <CardProjects project={obj} /> </a>
            ))}
        </div>
    );
}

export default ListProjects;
