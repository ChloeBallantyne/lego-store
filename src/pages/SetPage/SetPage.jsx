import React from "react";
import { useNavigate } from "react-router-dom";

const SetPage = ({ set }) => {
  // const navigate = useNavigate();

  return (
    <main>
      <h1>{set.name}</h1>
      <h3>Price: ${set.price}</h3>
      <h5>SKU: {set.sku}</h5>
      <h5>Quantity: {set.quantity}</h5>
      <img src={set.imageLink} alt={set.name} />
      <h5>Release: {set.release}</h5>
      <h5>Description:</h5>
      <p>{set.description}</p>
    </main>
  );
};

export default SetPage;
