import React from 'react';
import '../Styles/Buttons.css'

function MediumButtons() {
    return (
        <div className="med-wrap">
            <div className="item">
                <img src={require("../assets/bluecrop.jpg")} />
            </div>
            <div className="item">
            <img src={require("../assets/clayspike.jpg")} />
            </div>
            <div className="item">
            <img src={require("../assets/archcrop.jpg")} />
            </div>

        </div>
    )
}

export default MediumButtons; 