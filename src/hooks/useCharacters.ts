import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IResponse } from '../models/models';

export function useCharacters(searchValue: string | number) {
  const API_URL = 'www.flickr.com/services/rest';
  const API_KEY = '9254674086e76a903c4c78a40dd28805';

  const searchValue1 = 'cat';
  const [fetchedData, updateFetchedData] = useState<IResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [pagesNumber, updatePagesNumber] = useState(1);
  const [sortOrder, setSortOrder] = useState('date-posted-asc');
  const [resultPerPage, setResultPerPage] = useState(10);
  // const [info, setInfo] = useState<IItem>();

  // const api = `https://rickandmortyapi.com/api/character/?page=${pagesNumber}&name=${searchValue}`;

  // const api = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e2577f69d6b7493d90b3eb2648f3b010&tags=${searchValue}&sort=${sortOrder}&per_page=${resultPerPage}&page=${pagesNumber}&format=json&nojsoncallback=1&auth_token=72157720862700350-2829a464f1b20042&api_sig=71d25920e43b86f0a4d3d4fdf6e31cba`;

  // const api = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e2577f69d6b7493d90b3eb2648f3b010&tags=&sort=&per_page=&page=&format=json&nojsoncallback=1&auth_token=72157720862700350-2829a464f1b20042&api_sig=71d25920e43b86f0a4d3d4fdf6e31cba`;

  const api = `https://${API_URL}?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&tags=${searchValue1}&extras=url_n%2Cowner_name%2Cdate_taken%2Cviews&page=1&sort=${sortOrder}&per_page=${resultPerPage}`;

  const fetchCharacters = async () => {
    try {
      setError('');
      setLoading(true);
      const instance = axios.create();
      const response = await instance.get<IResponse>(api).then((res) => res);
      const data = response.data;
      console.log(data);

      updateFetchedData(data);

      const info = response.data.photos;
      // setInfo(info);

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
    // info,
    pagesNumber,
    updatePagesNumber,
  };
}
