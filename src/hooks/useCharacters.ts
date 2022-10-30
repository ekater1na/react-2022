import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { ICharacter, IResponse } from '../models/models';
import * as dotenv from 'dotenv';

export function useCharacters(searchValue: string | number) {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCharacters = async (searchValue: string | number) => {
    const URL = process.env.URL
      ? process.env.URL
      : 'https:/rickandmortyapi.com/api/character/?name=';
    try {
      setError('');
      setLoading(true);
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
  }, []);

  return { characters, error, loading, fetchCharacters };
}
