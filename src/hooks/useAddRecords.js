import { useState } from "react";
import axios from 'axios';

const useAddRecords = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const addRecord = (newUser) => {
    setLoading(true);
    axios.post('user', newUser).then((resp) => {
      setData(resp);
      setLoading(false);
    });
  }

  return { addRecord, data, loading, error };
};

export default useAddRecords;
