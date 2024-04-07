import React from 'react';
import Login from '../pages/Login';
import "../Styles/popup.css"


function Popup({ onClose }) {
    const handleClose = () => {
        console.log('Close button clicked');
        onClose(); 
    };
    return (
    <div>
        <div className="popup-background" onClick={handleClose}></div>
        <div className="popup">
            <Login/> 
            </div>
                </div>
         
    )
}

export default Popup;