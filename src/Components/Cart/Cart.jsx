import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.priceForCart, 0);

  return (
    <div className="cart-area">
      <h2>سبد خرید شما</h2>
      {cartItems.length === 0 ? <p>محصولی در سبد شما نیست.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>جمع کل :{calculateTotal(cartItems).toLocaleString(2)}</h2>
    </div>
  );
};

export default Cart;
