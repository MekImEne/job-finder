import {Item} from '@src/components/common/cards/popular';
import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetch = (endpoint: string, query: any) => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '', //'8330112d6cmsh168eac712cb8339p12e5ebjsn7e1552dc02ba',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};

export default useFetch;
