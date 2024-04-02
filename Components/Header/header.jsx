import React from "react";
import './header.css'

const Header = () => {
    return(
        <section className="h-wrapper">
            <div className="flexCenter padddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100}/>
                <div className="flexCenter h-menu">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact us</a>
                    <a href="">Get Started</a>
                    <button className="button">
                    <a href="">Contact</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header;