import React, { ChangeEvent, FormEvent } from 'react';
import { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('Search' || '');
    this.setState({ searchValue });
  }

  componentWillUnmount() {
    localStorage.setItem('Search', this.state.searchValue ? this.state.searchValue : '');
  }

  onFormSubmit(e: FormEvent) {
    e.preventDefault();
  }

  onFormChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
    console.log(e.target.value);
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className="bg-blue-100 flex flex-col justify-center">
        <div className="relative p-4 w-full sm:max-w-2xl sm:mx-auto">
          <div className="overflow-hidden z-0 rounded-full relative p-3">
            <form
              role="form"
              className="relative flex z-50 bg-white rounded-full"
              onSubmit={(e) => this.onFormSubmit(e)}
            >
              <input
                type="text"
                placeholder="enter"
                className="rounded-full flex-1 px-6 py-2 text-gray-700 focus:outline-none"
                onChange={(e) => this.onFormChange(e)}
                value={searchValue || ''}
              />
              <button
                className="bg-blue-600 text-white rounded-full font-semibold px-8 py-2 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
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
