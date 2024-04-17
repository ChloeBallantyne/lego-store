import styles from "./CarouselItem.module.scss";

const CarouselItem = ({ set }) => {
  console.log(set);
  if (!set) {
    return;
  }
  return (
    <div className={styles.item}>
      <img src={set.imageLink} alt={set.name} />
      <h4>{set.name}</h4>
    </div>
  );
};

export default CarouselItem;
