import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { ICharacter, IResponse } from '../models/models';

export function useCharacters(searchValue: string | number) {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCharacters = async (searchValue: string | number) => {
    const URL = process.env.API_URL
      ? process.env.API_URL
      : 'https:/rickandmortyapi.com/api/character/?name=';
    try {
      setError('');
      setLoading(true);
      console.log('URL', URL);

      const response = await axios.get<IResponse>(URL + `${searchValue}`);
      const dataSet = response.data.results;
      setCharacters(dataSet);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(searchValue);
  }, [searchValue]);

  return { characters, error, loading, fetchCharacters };
}
