import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSetById } from "../../services/service";

const SetLoader = () => {
  const { id } = useParams();
  const [set, setSet] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  useEffect(() => {
    setFetchStatus("LOADING");
    getSetById(id)
      .then((setData) => {
        setFetchStatus("SUCCESS");
        setSet(setData);
      })
      .catch((error) => {
        setFetchStatus("FAILED");
        setError(error);
      });
  }, [id]);

  return (
    <>
      {/* TODO: create loading component */}
      {fetchStatus === "LOADING" && <p>Loading...</p>}
      {/* TODO: Create error component */}
      {fetchStatus === "FAILED" && <p>{error.message}</p>}
      {/* TODO: Create set page */}
      {fetchStatus === "SUCCESS" && <SetPage set={set} />}
    </>
  );
};

export default SetLoader;
