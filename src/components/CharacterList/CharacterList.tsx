import React from 'react';
import { CharacterItem } from '../CharacterItem/CharacterItem';
import { ICharacter, IResponse } from '../../models';
import axios, { AxiosError } from 'axios';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../Error/Error';

type CharacterCardsProps = {
  characters: ICharacter[];
};

type CharacterCardState = {
  data: ICharacter[];
  isLoaded: boolean;
  error: string;
};

export class CharacterList extends React.Component<CharacterCardsProps, CharacterCardState> {
  state = {
    data: [],
    isLoaded: false,
    error: '',
  };

  async componentDidMount() {
    try {
      this.setState({ isLoaded: true, error: '' });
      const response = await axios.get<IResponse>('https://rickandmortyapi.com/api/character');
      const dataSet = response.data.results;
      this.setState({ data: dataSet, isLoaded: false });
    } catch (e: unknown) {
      const error = e as AxiosError;
      this.setState({ isLoaded: false, error: error.message });
    }
  }

  render() {
    const { data, isLoaded, error } = this.state;
    return (
      <div data-testid={'character-list'}>
        {isLoaded && <Loader />}
        {error && <ErrorMessage error={error} />}
        {
          <div className="grid grid-cols-5 gap-3" data-testid="cards">
            {data &&
              data.map((item: ICharacter) => <CharacterItem character={item} key={item.id} />)}
          </div>
        }
      </div>
    );
  }
}
