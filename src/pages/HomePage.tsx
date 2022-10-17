import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { ICharacter, IResponse } from '../models';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/Error/Error';
import axios, { AxiosError } from 'axios';
import { CharacterItem } from '../components/CharacterItem/CharacterItem';

type HomePageProps = Record<string, never>;
type HomePageState = {
  searchValue: string;
  characters: ICharacter[];
  isLoaded: boolean;
  error: string;
  showList: boolean;
};

export class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      searchValue: '',
      characters: [],
      isLoaded: false,
      error: '',
      showList: true,
    };
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSearchBarSubmit = this.handleSearchBarSubmit.bind(this);
  }

  handleSearchBarChange(value: string) {
    this.setState({ searchValue: value });
  }

  handleSearchBarSubmit() {
    this.fetchData(this.state.searchValue);
  }

  async fetchData(searchValue: string) {
    try {
      this.setState({ isLoaded: true, error: '' });
      const response = await axios.get<IResponse>(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      const dataSet = response.data.results;
      this.setState({ characters: dataSet, isLoaded: false, showList: false });
    } catch (e: unknown) {
      const error = e as AxiosError;
      console.log(error.request.response);
      this.setState({ isLoaded: false, error: error.message, showList: false });
    }
  }

  render() {
    const { characters, isLoaded, error, showList } = this.state;
    return (
      <div>
        <SearchBar
          searchValue={this.state.searchValue}
          onSearchBarChange={this.handleSearchBarChange}
          onSearchBarSubmit={this.handleSearchBarSubmit}
        />
        <div className="container mx-auto max-w-8xl">
          {isLoaded && <Loader />}
          {error && <ErrorMessage error={error} />}
          {showList && <CharacterList characters={characters} />}
          <div className="grid grid-cols-5 gap-3" data-testid="cards">
            {!error &&
              characters &&
              characters.map((item: ICharacter) => (
                <CharacterItem character={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
