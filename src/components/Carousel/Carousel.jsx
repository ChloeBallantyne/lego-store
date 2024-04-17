import React from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { useState, useEffect } from "react";
import { getAllSets } from "../../services/service";

const Carousel = () => {
  const [sets, setSets] = useState([]);
  const [setNumber, setSetNumber] = useState(0);

  useEffect(() => {
    getAllSets()
      .then((data) => setSets(data))
      .catch((e) => console.warn(e.message));
  }, []);

  const decreaseSet = () => {
    if (setNumber === 0) {
      setSetNumber(2);
    } else {
      setSetNumber(setNumber - 1);
    }
  };
  const increaseSet = () => {
    if (setNumber === 2) {
      setSetNumber(0);
    } else {
      setSetNumber(setNumber + 1);
    }
  };
  const favSets = sets.filter((set) => set.favourite);
  console.log(favSets);
  return (
    <div>
      <button onClick={decreaseSet}>left</button>
      <CarouselItem set={favSets[setNumber]} />
      <button onClick={increaseSet}>right</button>
    </div>
  );
};

export default Carousel;
