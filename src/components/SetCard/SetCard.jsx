import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SetCard.module.scss";

const SetCard = ({ set, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    stopPropergation();
    addToCart({ ...set, quantity });
    setQuantity(1);
  };

  return (
    <Link to={set.id}>
      <article className={styles.card}>
        <img src={set.imageLink} alt={set.name} />
        <h2>{set.name}</h2>
        <h3>${set.price}</h3>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </article>
    </Link>
  );
};

export default SetCard;
