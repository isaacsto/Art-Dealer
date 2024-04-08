import React from 'react';
import Login from '../pages/Login';
import "../Styles/popup.css"


function Popup(closePopup) {
  
    return (
  
        <div className="popup">
              <Login closePopup={closePopup} />
            </div>
            
         
    )
}

export default Popup;

