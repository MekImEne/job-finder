/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import {API_URL, RAPID_API_HOST} from '@env';
import {Item} from '@src/components/common/cards/popular';
import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetch = (endpoint: string, query: any) => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const options = {
    method: 'GET',
    url: `${API_URL}/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '', //`${RAPID_API_KEY}`,
      'X-RapidAPI-Host': RAPID_API_HOST,
    },
    params: {...query},
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};

export default useFetch;
