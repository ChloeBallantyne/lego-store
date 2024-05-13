import SetCard from "../../components/SetCard/SetCard";
import styles from "./SetsPage.module.scss";
import { Link } from "react-router-dom";

const SetsPage = ({ sets, addToCart }) => {
  return (
    <main>
      <div className={styles.page}>
        {sets.map((set) => {
          return (
            <Link key={set.id} to={set.id}>
              <SetCard addToCart={addToCart} set={set} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default SetsPage;
