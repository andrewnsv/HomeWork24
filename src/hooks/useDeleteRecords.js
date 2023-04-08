import { useState } from "react";
import axios from 'axios';

const useDeleteRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const delRecord = (id) => {
    setLoading(true);
    axios.delete(`records/${id}`).then((resp) => {
      setData(resp);
      setLoading(false);
    });
  }

  return { delRecord, data, loading, error };
};

export default useDeleteRecords;
