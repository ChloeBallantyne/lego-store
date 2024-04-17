import styles from "./SetCard.module.scss";

const SetCard = ({ set }) => {
  return (
    <article className={styles.card}>
      <img src={set.imageLink} alt={set.name} />
      <h2>{set.name}</h2>
      <h3>${set.price}</h3>
    </article>
  );
};

export default SetCard;
