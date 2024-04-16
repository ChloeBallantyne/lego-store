import styles from "./SetCard.module.scss";

const SetCard = ({ set }) => {
  return (
    <article className={styles.card}>
      <h2>{set.name}</h2>
      <p>Testing</p>
      <img src={set.imageLink} alt={set.name} />
    </article>
  );
};

export default SetCard;
