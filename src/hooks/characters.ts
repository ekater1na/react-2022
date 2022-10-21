import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { ICharacter, IResponse } from '../models/models';

export function useCharacters(searchValue: string | number) {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCharacters = async (searchValue: string | number) => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IResponse>(
        `https:/rickandmortyapi.com/api/character/?name=${searchValue}`
      );
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
  }, []);

  return { characters, error, loading, fetchCharacters };
}
