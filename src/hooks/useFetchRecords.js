import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { RecordDataContext } from "../providers/recordDataContex";

const useFetchRecords = (isManual = false) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  const recordsCtx = useContext(RecordDataContext);

  useEffect(() => {
    if (!isManual) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await axios.get("records");
      recordsCtx.setRecords(data);
      setLoading(false);
      
    } catch (err) {
      console.log(err);
    }
  };

  return { data: recordsCtx.records, loading, error, fetchData };
};

export default useFetchRecords;
