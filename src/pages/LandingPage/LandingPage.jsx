import React from "react";
import Heading from "../../components/Heading/Heading";
import Carousel from "../../components/Carousel/Carousel";
import SetCard from "../../components/SetCard/SetCard";
import { useState, useEffect } from "react";
import { getAllSets } from "../../services/service";
import SetLoader from "../../containers/SetLoader/SetLoader";
import SetsPage from "../SetsPage/SetsPage";

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
        <SetsPage />
      </main>
    </>
  );
};

export default LandingPage;
