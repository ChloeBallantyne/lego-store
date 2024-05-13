import React from "react";
import SetCard from "../SetCard/SetCard";

const Cart = ({ cartItems, addToCart }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  console.log(cartItems);

  return (
    <div>
      <h2>Cart ({totalItems})</h2>
      {cartItems.map((set) => {
        return <SetCard addToCart={addToCart} key={set.id} set={set} />;
      })}
    </div>
  );
};

export default Cart;
