import React from "react";
import "../../src/Styles/ArtCard.css";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/hlpers";

const style = {
  button: {
    "font-family": "Roboto Mono",
    textDecoration: "none",
    padding: "10px",
  },
};

export default function ArtCard(props) {
  const { id, imageUrl, title, year, description, size, price } = props;
  const [state, dispatch] = useStoreContext();

  const { products, cart } = state;

  console.log(props.id);
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...props, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...props, purchaseQuantity: 1 });
    }
  };

  console.log(props.imgUrl);
  return (
 
      <div className="card">
     
          <div className="card-body">
            <img className="card-img" src={props.imgUrl} alt="Artwork" />
            <h5 className="card-title"> {props.title}</h5>
            <p className="card-text">{props.year}</p>
            <p className="card-text">{props.description}</p>
            <p className="card-text"> {props.size}</p>
            <p className="card-text"> {props.price}</p>
            <button
              className="button"
              style={style.button}
              onClick={() => addToCart(props.item)}
            >
              Add to Cart
            </button>
          </div>
        </div>


  );
}
