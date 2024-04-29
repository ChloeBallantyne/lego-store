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
      <div className={styles.page}>
        {sets.map((set) => {
          return <SetCard key={set.id} set={set} />;
        })}
      </div>
    </main>
  );
};

export default SetsPage;
