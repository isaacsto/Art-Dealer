
import React/* , { useState }  */from 'react';
import "../../src/Styles/ArtCard.css";  

const style = {
  button: {
    'font-family': 'Roboto Mono',
    'textDecoration': 'none',
    'padding': '10px',
  }
  
}


export default function ArtCard(props) {

/*   const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
 */
  return (
    <div className="container">
      <div className="card">
        <div className="extra-container">
        <img
          className="card-img-top"
          src={`https://i.imgur.com/FJq8tuK.png`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title"> {props.title}</h5>
        <p className="card-text">{props.size}</p>
          <p className="card-text">{props.description}</p>
          <p className="card-text"> {props.year}</p>
          <p className="card-text"> {props.price}</p>
          <button className="button" style={style.button} /* onClick={() => addToCart(props.item)} */>
  Add to Cart
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

