import React from "react";

const Cart = ({ cartItems }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  console.log(cartItems);

  return (
    <div>
      <h2>Cart ({totalItems})</h2>
      {cartItems.map((item) => {
        console.log(item);
        return (
          <p>
            {item.name} x {item.quantity}
          </p>
        );
      })}
    </div>
  );
};

export default Cart;
