import { useState } from "react";
import SetCard from "../../components/SetCard/SetCard";
import { getAllSets } from "../../services/service";
import { useEffect } from "react";
import styles from "./SetsPage.module.scss";

const SetsPage = () => {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    getAllSets()
      .then((data) => setSets(data))
      .catch((e) => console.warn(e.message));
  }, []);
  return (
    <main>
      <section className={styles.page}>
        {sets.map((set) => {
          return <SetCard key={set.id} set={set} />;
        })}
      </section>
    </main>
  );
};

export default SetsPage;
