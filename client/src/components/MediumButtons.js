import React from 'react';
import '../Styles/Buttons.css'

function MediumButtons() {
    return (

            <div className="med-wrap">
            <div class="med-label"> <h2>Explore Different Mediums</h2></div>
            <div className="item">
                <div class="text-overlay one">Painting</div>
                <img src={require("../assets/bluish.jpg")} alt="blue painting by Isabella Saracini"/>
            </div>
            <div className="item">
            <div class="text-overlay two">Sculpture</div>
            <img src={require("../assets/marineclay.jpg")} alt="sculpture by Aaron Dubois" />
            </div>
            <div className="item">
            <div class="text-overlay three">Digital Art</div>
            <img src={require("../assets/reeds.jpg")} alt="digital art sketch by Nicolas Riley"/>
            </div>
            </div>
    
    )
}

export default MediumButtons; 