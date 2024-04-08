import React from 'react';
import '../Styles/Buttons.css'

function MediumButtons() {
    return (
        <div className="med-wrap">
            <div className="item">
                <div class="text-overlay one">Painting</div>
                <img src={require("../assets/bluish.jpg")} />
            </div>
            <div className="item">
            <div class="text-overlay two">Sculpture</div>
            <img src={require("../assets/marineclay.jpg")} />
            </div>
            <div className="item">
            <div class="text-overlay three">Digital Art</div>
            <img src={require("../assets/reeds.jpg")} />
            </div>

        </div>
    )
}

export default MediumButtons; 