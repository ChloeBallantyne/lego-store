import styles from "./SetCard.module.scss";
import { Link } from "react-router-dom";

const SetCard = ({ set }) => {
  return (
    <article className={styles.card}>
      <img src={set.imageLink} alt={set.name} />
      <h2>{set.name}</h2>
      <h3>${set.price}</h3>
      {/* <Link to={set.id}>See More</Link> */}
    </article>
  );
};

export default SetCard;
