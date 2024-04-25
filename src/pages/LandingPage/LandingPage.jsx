import React from "react";
import Heading from "../../components/Heading/Heading";
import Carousel from "../../components/Carousel/Carousel";
import SetsPage from "../SetsPage/SetsPage";
import SetCard from "../../components/SetCard/SetCard";
import { useState, useEffect } from "react";
import { getAllSets } from "../../services/service";

const LandingPage = ({ addToCart }) => {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    getAllSets()
      .then((data) => setSets(data))
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <>
      <Heading />
      <Carousel />
      <main>
        <section>
          {sets.map((set) => {
            return <SetCard key={set.id} set={set} addToCart={addToCart} />;
          })}
        </section>
      </main>
    </>
  );
};

export default LandingPage;
