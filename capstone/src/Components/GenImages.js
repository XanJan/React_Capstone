import React from "react";
import Header from "./Header";
import { List } from "reactstrap";
import "./GenImages.css";

import { useNavigate } from "react-router-dom";
import Popup from "./PopupWindow.js"


function GenImages() {

    let navigate = useNavigate(); 
    const routeChange = () => { 
    let path = `/browseImages`;  // Ensure the path matches the route defined in App.js
    navigate(path);
}


    return (
        <div>
            <Header />
            <h1 className="design-text">From vision to reality - generate <b>your</b> room</h1>
            <hr width="70%" />
            <h2 className="design">Design</h2>

            <div className="options">
                <div className="left-side">

                    <div className="input-group">
                        <label for="roomType">Type of room:</label>
                        <select id="roomType" name="roomType">
                            <option value="blank" selected disabled hidden>Select room</option>
                            <option value="bedroom">Bedroom</option>
                            <option value="dorm">Dorm room</option>
                            <option value="studio">Studio Apartment</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label for="roomSize">Size of room:</label>
                        <input type="text" id="size" name="size"></input>
                    </div>
                </div>

                <div class= "vertical"></div>

                <div className="right-side">
                    <div className="input-group">
                        <label for="country">Country:</label>
                        <select id="country" name="country">
                            <option value="blank" selected disabled hidden>Select country</option>
                            <option value="usa">United states of America</option>

                        </select>
                    </div>
                    <div className="input-group">
                        <label for="city">City:</label>
                        <select id="country" name="country">
                            <option value="blank" selected disabled hidden>Select city</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                            <option value="huston">Huston</option>

                        </select>
                    </div>
                    <div className="input-group">
                        <label for="style">Style:</label>
                        <select id="style" name="style">
                            <option value="all" selected>All</option>
                            <option value="minimalistic">Minimalistic</option>
                            <option value="retro">Retro</option>
                            <option value="colorful">Colorful</option>


                        </select>
                    </div>
                </div>
            </div>

            <div className="furniture-options">
                <button>Click me</button>
                
            </div>
            <div className="next-page">
                <button onClick={routeChange}>
                    Next Page</button>
            </div>

        </div>
    );
}

export default GenImages;