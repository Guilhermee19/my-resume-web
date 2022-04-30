import React from "react";
import { ArrowTop } from "../../components/Icons/Icons";
import Information from "../Information/Information";
import ListProjects from "../ListProjects/ListProjects";
import Presentation from "../Presentation/Presentation";
import './style.css';

function Home() {

    function scrollTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    let list_projects = [
        { name: 'react-movie-web', link: 'https://react-movie-web-zeta.vercel.app/', github:'https://github.com/Guilhermee19/react-movie-web', image: 'https://i.ibb.co/MC03j0Y/react-movie-web.png'},
        { name: 'los-mundissas', link: 'https://los-mundissas.vercel.app/', github:'https://github.com/Guilhermee19/LM', image: 'https://i.ibb.co/1sgHt5z/los-mundissas.png'},
        { name: 'countdown-timer', link: 'https://countdown-timer-rosy.vercel.app/', github:'https://github.com/Guilhermee19/countdown-timer', image: 'https://i.ibb.co/R068KK9/countdown-timer.png'},
        { name: 'advice-generator-web', link: 'https://advice-generator-web.vercel.app/', github:'https://github.com/Guilhermee19/advice-generator-web', image: 'https://i.ibb.co/sRW9FDW/advice-generator-web.png'},
        { name: 'tcctourvirtual', link: 'https://tcctourvirtual.vercel.app/home', github:'https://github.com/Guilhermee19/TCC_Turismo_Virtual', image: 'https://i.ibb.co/S550gNg/tcctourvirtual.png'},
    ]

    return (
        <>
            <Presentation />
            {/* <Information /> */}
            <ListProjects list={list_projects}/>
           
            {/* <div className="btn_icon" onClick={() => scrollTop()}>
                <ArrowTop />
            </div> */}
        </>
    );
}

export default Home;
