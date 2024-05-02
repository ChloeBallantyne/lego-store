import SetCard from "../../components/SetCard/SetCard";
import styles from "./SetsPage.module.scss";

const SetsPage = ({sets, addToCart}) => {
  return (
    <main>
      <div className={styles.page}>
        {sets.map((set) => {
          return <SetCard addToCart={addToCart} key={set.id} set={set} />;
        })}
      </div>
    </main>
  );
};

export default SetsPage;
