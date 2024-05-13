import React from "react";
import { useState, useEffect } from "react";
import { getAllSets } from "../../services/service";
import SetCard from "../../components/SetCard/SetCard";

const FavouritesPage = ({ addToCart }) => {
  const [favSets, setFavSets] = useState([]);

  useEffect(() => {
    getAllSets()
      .then((data) => {
        const favouriteSets = data.filter((set) => set.favourite === true);
        setFavSets(favouriteSets);
      })
      .catch((e) => console.warn(e.message));
  }, []);
  return (
    <div>
      <h2>Favourites Page</h2>
      {favSets.map((set) => {
        return <SetCard addToCart={addToCart} key={set.id} set={set} />;
      })}
    </div>
  );
};

export default FavouritesPage;
