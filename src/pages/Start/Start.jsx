import React from "react";
import './Start.scss';
import hand from '../../images/Common/hand.svg';
import {Link} from "react-router-dom";

const Start = () =>{
    return (
        <div className="start_content">
            <div className="container start_container">
                <div className="start_hand">
                    <img src={hand} alt="handImage"/>
                </div>
                <div className="start-caption">
                    <h1 className="start_title">Who wants to be a millionaire?</h1>
                    <Link to='/questions' className="btn link-btn">Start</Link>
                </div>
            </div>
        </div>
    )
}

export default Start