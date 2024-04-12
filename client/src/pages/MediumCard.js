import React /* , { useState }   */from 'react';
import "../../src/Styles/ArtCard.css";  

export default function MediumCard(props) {

/*   const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]); */

console.log(props.imgUrl)
  return (

      <div className="card">
        <div className="card-body">
          <img className="card-img" src={props.imgUrl} alt="Artwork" />
        <h5 className="card-title"> {props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text"> {props.size}</p>
          <p className="card-text"> {props.price}</p>
       {/*    <button className="button" style={style.button} onClick={() => addToCart(props.item)}>
  Add to Cart
</button> */}
          </div>
        </div>
   
  );
} 
