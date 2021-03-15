import { useState } from 'react';

const useHttp = (url, method, payload = '', validateFunction = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const httpRequest = async () => {
    const fetchOptions =
      method === 'GET'
        ? {
            method: method,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        : {
            method: method,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          };
    return fetch(url, fetchOptions);
  };

  const makeHttpRequest = async () => {
    setIsLoading(true);
    try {
      const response = await httpRequest();
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const handleHttpRequest = async (e) => {
    e.preventDefault();
    const error = await validateFunction(payload);
    if (!error) {
      makeHttpRequest();
    } else {
      setError(error);
      console.log(error);
    }
  };

  return { isLoading, handleHttpRequest, makeHttpRequest };
};

export default useHttp;
