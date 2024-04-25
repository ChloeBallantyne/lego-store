import React from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { useState, useEffect } from "react";
import { getAllSets } from "../../services/service";
import styles from "./Carousel.module.scss";

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

  return (
    <div>
      <div>
        <h3 className={styles["carousel-heading"]}>Featured Products</h3>
      </div>
      <div className={styles.carousel}>
        <button onClick={decreaseSet}>&#8592;</button>
        <CarouselItem set={favSets[setNumber]} />
        <button onClick={increaseSet}>&#8594;</button>
      </div>
    </div>
  );
};

export default Carousel;
