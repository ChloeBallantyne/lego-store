import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SetPage.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSetById } from "../../services/service";

const SetPage = ({ set }) => {
  const { id } = useParams();
  const [fav, setFav] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getSetById(id).then(setFav).catch(setError);
    }
  }, [id]);

  const onSubmit = (data) => {
    updateSetById(id, data)
      .then(() => {
        navigate("/");
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
      <form>
        <input type="submit" value="Favourite" onSubmit={onSubmit} />
      </form>
    </main>
  );
};

export default SetPage;
