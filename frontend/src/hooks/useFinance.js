import { useState, useEffect } from "react";
import axios from "axios";

export const useFinance = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {

    setIsLoading(true);
    axios
      .get(endpoint)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.error);
      });
  }, [endpoint]);


  return { data, error, isLoading }
};
