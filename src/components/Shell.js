import React from 'react'
import './styles/Thoughts.css'
import Convo from './Convo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Shell = () => {
    return (
	<div className="contain">
        <main>
            <div className="shell">
                <div className="box">
                    <div className="symbol">
                        <FontAwesomeIcon icon="comment-alt" size="1x" className="icon" />
                        <h2>TTM</h2>
                    </div>
                    <Convo />
                </div>
            </div>

        </main>
	</div>
    );

};

export default Shell;
