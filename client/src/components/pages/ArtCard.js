import React from 'react';

export default function ArtCard(props) {
  const cardStyle = {
    width: '18rem',
  };


  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`https://i.imgur.com/FJq8tuK.png${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Title: {props.titlee}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">Year: {props.year}</p>
         {/*  <a href="#">
            Buy {props.title}
          </a> */}
        </div>
      </div>
    </div>
  );
}
