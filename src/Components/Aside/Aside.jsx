import React from "react";
import './Aside.scss';

const Aside = ({total, className, id}) =>{
    const numberWithCommas = (x) => {
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    return(
        <div className={className} id={id}>
            ${numberWithCommas(total)}
        </div>
    );
}

export default Aside;