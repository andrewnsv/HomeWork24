import { useState } from "react";
import axios from 'axios';

import useFetchRecords from "./useFetchRecords";

const useDeleteRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  
  const { fetchData } = useFetchRecords (true);


  const delRecord = (id) => {
    setLoading(true);
    axios.delete(`records/${id}`).then((resp) => {
      setData(resp);
      fetchData()
      setLoading(false);
    });
  }

  return { delRecord, data, loading, error };
};

export default useDeleteRecords;
