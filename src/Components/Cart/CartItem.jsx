import React from "react";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="Cart-item-area">
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <img src={item.images} alt="" />
      </div>
      <div className="information">
        <p>قیمت : {item.price}</p>
        <p> جمع :{(item.amount * item.priceForCart).toLocaleString(2)}</p>
      </div>
      <div className="buttons">
        <button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </button>
        <p>{item.amount}</p>
        <button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
