import React from 'react';
import { Component } from 'react';

type SearchBarProps = {
  searchValue: string;
  onSearchBarChange: (value: string) => void;
  onSearchBarSubmit: () => void;
};

type SearchBarState = Record<string, never>;

export default class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onSearchBarChange(event.target.value);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (this.props.searchValue) {
      this.props.onSearchBarSubmit();
    }
  }

  render() {
    return (
      <div className="bg-blue-100 flex flex-col justify-center">
        <div className="relative p-4 w-full sm:max-w-2xl sm:mx-auto">
          <div className="overflow-hidden z-0 rounded-full relative p-3">
            <form
              role="form"
              className="relative flex z-50 bg-white rounded-full"
              onSubmit={this.handleSubmit}
            >
              <input
                type="text"
                placeholder="enter name, for example 'Rick'"
                className="rounded-full flex-1 px-6 py-2 text-gray-700 focus:outline-none"
                onChange={this.handleChange}
                value={this.props.searchValue}
              />
              <button
                className="bg-blue-600 text-white rounded-full font-semibold px-8 py-2 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                data-testid="search-btn"
                type={'submit'}
              >
                Search
              </button>
            </form>
            <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
            <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
            <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
            <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
          </div>
        </div>
      </div>
    );
  }
}
