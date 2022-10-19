import React, { useEffect, useState } from 'react';
import { CharacterItem } from '../CharacterItem/CharacterItem';
import { ICharacter, IResponse } from '../../models';
import axios, { AxiosError } from 'axios';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../Error/Error';

export function CharacterList() {
  const [startPage, setStartPage] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBasePage = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IResponse>('https://rickandmortyapi.com/api/character');
      const dataSet = response.data.results;
      setStartPage(dataSet);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchBasePage();
  }, []);

  return (
    <div data-testid={'character-list'}>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {
        <div className="grid grid-cols-5 gap-3" data-testid="cards">
          {startPage &&
            startPage.map((item: ICharacter) => <CharacterItem character={item} key={item.id} />)}
        </div>
      }
    </div>
  );
}
