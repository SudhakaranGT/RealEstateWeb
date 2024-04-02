import React from "react";
import "./companies.css";

const Companies = () =>{
    return(
        <section className="c-wrapper">
            <div className="paddings innnerWidth flexCenter c-container">
                <img src="./prologis.png" alt="prologis" />
                <img src="./tower.png" alt="tower" />
                <img src="./equinix.png" alt="equinix" />
                <img src="./realty.png" alt="reality" />
            </div>
        </section>
    )
}

export default Companies;