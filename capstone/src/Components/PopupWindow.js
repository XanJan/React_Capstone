import React from "react";
import "./PopupWindow.css"
import { CiSearch } from "react-icons/ci";

function PopupWindow(props){
    return(props.trigger) ? (
        <div className="popup">
            <button className="close-button"></button>
            {props.children}
            
            <div className="input-bar">
            <input type="text" placeholder="Search.." className="input-search"></input>
            <button className="input-search-button" type="submit"><CiSearch className="icon"/></button>
            </div>
            <hr width="100%" />

            <div className="inner-popup">
                
            </div>
        </div>
    ) : "";
}

export default PopupWindow;