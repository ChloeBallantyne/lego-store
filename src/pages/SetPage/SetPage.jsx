import React from "react";
import styles from "./SetPage.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSetById } from "../../services/service";
import { updateSetById } from "../../services/service";
import { useNavigate } from "react-router-dom";

const SetPage = ({ set }) => {
  const { id } = useParams();
  const [fav, setFav] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getSetById(id).then(setFav).catch(setError);
    }
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateSetById(id, {...set, favourite: !set.favourite})
      .then(() => {
        navigate("/favourites");
      })
      .catch(setError);
  };

  return (
    <main>
      <h1>{set.name}</h1>
      <h3>Price: ${set.price}</h3>
      <h5>SKU: {set.sku}</h5>
      <h5>Quantity: {set.quantity}</h5>
      <div className={styles.wrapper1}>
        <img src={set.imageLink} alt={set.name} />
        <div className={styles.wrapper2}>
          <h5>Description:</h5>
          <p>{set.description}</p>
        </div>
      </div>
      <h5>Release: {set.release}</h5>
      <form onSubmit={onSubmit}>
        {set.favourite? <input type="submit" value="Un-Favourite" /> : <input type="submit" value="Favourite" />}
      </form>
    </main>
  );
};

export default SetPage;
