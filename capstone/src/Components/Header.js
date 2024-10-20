import React from "react";
import ikea_logo from '../Ikea_logo.png';

function Header(){
    return(
        <header className="header">
            <h1 className="Tiny">TINY</h1>
            <h1 className="Trend">TREND</h1>
            <h1>X</h1>
            <img src={ikea_logo} alt="Ikea Logo" width="150"/>
        </header>
    );
}
export default Header;