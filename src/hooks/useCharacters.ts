import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IInfo, IResponse } from '../models/models';

export function useCharacters(searchValue: string | number) {
  const [fetchedData, updateFetchedData] = useState<IResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [pagesNumber, updatePagesNumber] = useState(1);
  const [sortOrder, setSortOrder] = useState('id-A-Z');
  const [resultPerPage, setResultPerPage] = useState(10);
  const [info, setInfo] = useState<IInfo>();

  const api = `https://rickandmortyapi.com/api/character/?page=${pagesNumber}&name=${searchValue}`;

  const fetchCharacters = async () => {
    try {
      setError('');
      setLoading(true);
      const instance = axios.create();
      const response = await instance.get<IResponse>(api).then((res) => res);
      const data = response.data;
      console.log(data);
      const itemsPerPage = data.results
        .splice(resultPerPage, 20 - resultPerPage)
        .sort((a, b) => (a.id > b.id ? 1 : -1));
      console.log(itemsPerPage);

      updateFetchedData(data);

      const info = response.data.info;
      setInfo(info);

      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [api]);

  return {
    fetchedData,
    error,
    loading,
    fetchCharacters,
    sortOrder,
    setSortOrder,
    resultPerPage,
    setResultPerPage,
    info,
    pagesNumber,
    updatePagesNumber,
  };
}
