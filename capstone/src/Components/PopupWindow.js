import React from "react";
import "./PopupWindow.css"

function PopupWindow(props){
    return(props.trigger) ? (
        <div className="popup">
            <button className="close-button">X</button>
            {props.children}
            <input type="text" placeholder="Search.." className="inputSearch"></input>

            <div className="inner-popup">
                
            </div>
        </div>
    ) : "";
}

export default PopupWindow;