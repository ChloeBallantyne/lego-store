import React from "react";
import { useState, useEffect } from "react";
import { getAllSets } from "../../services/service";
import SetCard from "../../components/SetCard/SetCard";

const FavouritesPage = () => {
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
      <section>
        {favSets.map((set) => (
          <p>{set.name}</p>
        ))}
      </section>
    </div>
  );
};

export default FavouritesPage;
