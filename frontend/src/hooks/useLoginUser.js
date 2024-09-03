import axios from "axios";
import { useState } from "react";

export const useLoginUser = (endpoint) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {

    setIsLoading(true);

    try {
      const res = await axios.post(
        endpoint,
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-type": "application/json" },
        }
      );

      setUser(res.data);
      setIsLoading(false);
    } catch (error) {
        setError(error.error);
        setIsLoading(false);
    }
  };

  return {login, error, isLoading, user};
};
