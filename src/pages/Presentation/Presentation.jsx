import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './style.css';


function Tilt(props) {
    const { options } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return (
        <header>
            {/* <div className="my_photo"> </div> */}
            <div className="typewrtite card_terminal" ref={tilt}>
                <div className='icon_circle' id='red'></div>
                <div className='icon_circle' id='yellow'></div>
                <div className='icon_circle' id='green'></div>
                <span className="effect">
                    <h3 > Olá, eu me chamo </h3>
                    <h1> <span className="title_name">Guilherme</span> Santana </h1>
                    <h3> Desenvolvedor Front-end </h3>
                </span>
            </div>
        </header>
    )
}

function Presentation() {

    const options = {
        scale: 1.05,
        speed: 500,
        max: 10
      };

    return (
        <>
            <Tilt className="box" options={options} />
        </>
    );
}

export default Presentation;
