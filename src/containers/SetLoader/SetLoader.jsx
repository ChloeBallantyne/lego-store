import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSetById } from "../../services/service";
import SetPage from "../../pages/SetPage/SetPage";

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
      {fetchStatus === "LOADING" && <p>Loading...</p>}

      {fetchStatus === "FAILED" && <p>{error.message}</p>}

      {fetchStatus === "SUCCESS" && <SetPage set={set} />}
    </>
  );
};

export default SetLoader;
