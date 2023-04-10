import { useState } from "react";
import axios from 'axios';

import useFetchRecords from "./useFetchRecords";

const useEditRecord = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const { fetchData } = useFetchRecords (true);

  const editRecord = (id, newData) => {
    setLoading(true);
    axios.put(`records/${id}`, newData).then(resp => {
      setData(resp);
      fetchData()
      setLoading(false);
    });
  }

  return { editRecord, data, loading, error };
};

export default useEditRecord;