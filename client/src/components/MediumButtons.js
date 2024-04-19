import React from 'react';
import '../Styles/Buttons.css'

function MediumButtons() {
    return (

            <div className="med-wrap">
            <div className="med-label"> <h2>Explore Different Mediums</h2></div>
            <div className="item"><a href="/PaintingPage">
                <div class="text-overlay one">Painting</div>
                <img src={require("../assets/bluish.jpg")} alt="blue painting by Isabella Saracini"/>
                </a>
            </div>
            <div className="item"><a href="/SculptingPage">
            <div class="text-overlay two">Sculpture</div>
            <img src={require("../assets/marineclay.jpg")} alt="sculpture by Aaron Dubois" />
            </a>
            </div>
            <div className="item"><a href="/DigitalArtPages">
            <div class="text-overlay three">Digital Art</div>
            <img src={require("../assets/reeds.jpg")} alt="digital art sketch by Nicolas Riley"/>
            </a>
            </div>
            </div>
    
    )
}

export default MediumButtons; 