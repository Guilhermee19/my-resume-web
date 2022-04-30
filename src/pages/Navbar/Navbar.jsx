import React from "react";
import './style.css';

function Navbar() {

    const scrollTop = () => {
        console.log('a');
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <main>
            <h1 className="name"> <span>Guilherme</span> Santana </h1>            
            <div className="options">
                <span onClick={scrollTop}>Inicial</span>
                <span>Sobre</span>
                <span>Projetos</span>
            </div>
        </main>
    );
}

export default Navbar;
