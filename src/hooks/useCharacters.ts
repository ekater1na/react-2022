import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IResponse } from '../models/models';

export function useCharacters(searchValue: string | number) {
  const API_URL = 'www.flickr.com/services/rest';
  const API_KEY = '9254674086e76a903c4c78a40dd28805';

  const searchValueDefault = searchValue ? searchValue : 'sea';
  const [fetchedData, updateFetchedData] = useState<IResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [pageNumber, updatePageNumber] = useState(1);
  const [sortOrder, setSortOrder] = useState('date-posted-asc');
  const [resultPerPage, setResultPerPage] = useState(10);

  const api = `https://${API_URL}?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&tags=${searchValueDefault}&extras=url_n%2Cowner_name%2Cdate_taken%2Cviews&page=${pageNumber}&sort=${sortOrder}&per_page=${resultPerPage}`;

  const fetchCharacters = async () => {
    try {
      setError('');
      setLoading(true);
      const instance = axios.create();
      const response = await instance.get<IResponse>(api).then((res) => res);
      const data = response.data;
      updateFetchedData(data);

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
    pageNumber,
    updatePageNumber,
  };
}
