import React from "react"
import Nav from './Navbar'
import './styles/Help.css'

const Help = () => {
    return (
        <div className="contained">
        <div className="content">
        <h1>Here are some places you can contact if you feel truly lost and in need of help.</h1>
        <h2 className="header">Online</h2>
        <ul>
            <li>
                <a className="tags" href="https://www.betterhelp.com">Better Help</a>
            </li>
            <li>
                <a className="tags" href="https://www.icounseling.com/">iCounseling</a>
            </li>
            <li>
                <a className="tags" href="https://www.regain.us/">Regain</a>
            </li>
        </ul>

        </div>
	</div>
    );

};

export default Help;
