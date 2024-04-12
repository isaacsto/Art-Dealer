import React from 'react';
// import '../Styles/ArtPopup.css';

const ArtPopup = ({ art, onClose }) => {
  const { imageUrl, title, year, description, size, price } = art;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-button" onClick={onClose}>Close</button>
        <img className="popup-img" src={imageUrl} alt="Artwork" />
        <h2 className="popup-title">{title}</h2>
        <p className="popup-text price">$ {price}.00</p>
        <p className="popup-text size">{size}</p>
        <p className="popup-text description">{description}</p>
      </div>
    </div>
  );
};

export default ArtPopup;
