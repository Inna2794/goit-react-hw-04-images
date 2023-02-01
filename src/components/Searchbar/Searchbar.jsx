import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './Searchbar.css';
import PropTypes from 'prop-types';
import goit from './goit.webp';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = evt => {
    const input = evt.currentTarget.value;
    setQuery(input);
  };

  return (
    <header className="searchbar">
      <img src={goit} alt="goit logo)" className="logo" width="100" />
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="search-btn">
          <span className="button-label">
            <BsSearch />
          </span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
