import React from "react";
import Heading from "../../components/Heading/Heading";
import Carousel from "../../components/Carousel/Carousel";
import SetCard from "../../components/SetCard/SetCard";
import { useState, useEffect } from "react";
import { getAllSets } from "../../services/service";
import SetsPage from "../SetsPage/SetsPage";
import { addSetsToDB } from "../../services/service";

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
      <Carousel sets={sets} />
      <main>
        <SetsPage sets={sets} addToCart={addToCart} />
        {/* <button onClick={addSetsToDB}>Add Sets</button> */}
      </main>
    </>
  );
};

export default LandingPage;
