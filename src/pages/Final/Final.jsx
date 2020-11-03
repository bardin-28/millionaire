import React from "react";
import './Final.scss';
import hand from '../../images/Common/hand.svg';
import {Link} from "react-router-dom";

const Final = ({isTotal, reset}) =>{
    const numberWithCommas = (x) => {
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    setTimeout(()=>{
        reset()
    },500)
    return (
        <div className="final_content">
            <div className="container final_container">
                <div className="final_hand">
                    <img src={hand} alt="handImage"/>
                </div>
                <div className="final-caption">
                    <p className="final_subtitle">Total score:</p>
                    <h1 className="final_title">{numberWithCommas(isTotal)}$ earned</h1>
                    <Link to='/questions' className="btn link-btn">Try Anain</Link>
                </div>
            </div>
        </div>
    )
}

export default Final