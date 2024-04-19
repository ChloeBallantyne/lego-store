import { Link } from "react-router-dom";
import styles from "./CarouselItem.module.scss";

const CarouselItem = ({ set }) => {
  //console.log(set);
  if (!set) {
    return;
  }
  return (
    <Link to={set.id}>
      <div className={styles.item}>
        <img src={set.imageLink} alt={set.name} />
        <h4>{set.name}</h4>
      </div>
    </Link>
  );
};

export default CarouselItem;
