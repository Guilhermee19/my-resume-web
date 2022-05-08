import React from 'react'
import './style.css';
import imgAngular from "../../assets/logo-angular.png";
import imgReact from "../../assets/logo-react.png";
import imgHtml from "../../assets/logo-html-css-js.png";

export const LogoAngular = ({height}) => (
  <>
   <img src={imgAngular} height={height} style={{objectFit:"cover"}} />
  </>
)

export const LogoReact = ({height}) => (
  <>
    <img src={imgReact} height={height} style={{objectFit:"cover"}} />
  </>
)

export const LogoHtml = ({height}) => (
  <>
    <img src={imgHtml} height={height} style={{objectFit:"cover"}} />
  </>
)
