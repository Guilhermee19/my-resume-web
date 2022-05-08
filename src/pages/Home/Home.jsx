import React from "react";
import Information from "../Information/Information";
import ListProjects from "../ListProjects/ListProjects";
import Presentation from "../Presentation/Presentation";
import './style.css';

import imgMovie from "../../assets/pages/movie-web.png";
import imgLM from "../../assets/pages/bio-lm-web.png";
import imgCountdown from "../../assets/pages/countdown-timer.png";
import imgGenerator from "../../assets/pages/advice-generator.png";
import imgTourVirtual from "../../assets/pages/tour-virtual.png";


function Home() {

    let list_projects = [
        { name: 'React Movie', framework:'react', link: 'https://react-movie-web-zeta.vercel.app/', github:'https://github.com/Guilhermee19/react-movie-web', image: imgMovie},
        { name: 'Bio LM', framework:'angular', link: 'https://los-mundissas.vercel.app/', github:'https://github.com/Guilhermee19/LM', image: imgLM},
        { name: 'Countdown Timer', framework:'html', link: 'https://countdown-timer-rosy.vercel.app/', github:'https://github.com/Guilhermee19/countdown-timer', image: imgCountdown},
        { name: 'Advice Generator', framework:'react', link: 'https://advice-generator-web.vercel.app/', github:'https://github.com/Guilhermee19/advice-generator-web', image: imgGenerator},
        { name: 'TCC TourVirtual', framework:'angular', link: 'https://tcctourvirtual.vercel.app/home', github:'https://github.com/Guilhermee19/TCC_Turismo_Virtual', image: imgTourVirtual},
    ]

    return (
        <>
            <Presentation />
            <Information />
            <ListProjects list={list_projects}/>
            <div style={{height: "100px"}}></div>
        </>
    );
}

export default Home;
