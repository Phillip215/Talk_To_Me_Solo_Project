import React from "react"
import './styles/ErrorPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Four from '../assets/404.jpg'

const Error = () => {
    return (
	<div className="error">
        <img src={Four} />
        <div className="back">
        <a className="home" href="/">Home  <FontAwesomeIcon icon="ghost" size="2x"/></a>
        </div>
	</div>
    );

};

export default Error;
