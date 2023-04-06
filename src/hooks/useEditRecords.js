import { useState } from "react";
import axios from 'axios';

const useEditRecord = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const editRecord = (id, newData) => {
    setLoading(true);
    axios.put(`user/${id}`, newData).then((resp) => {
      setData(resp);
      setLoading(false);
    });
  }

  return { editRecord, data, loading, error };
};

export default useEditRecord;