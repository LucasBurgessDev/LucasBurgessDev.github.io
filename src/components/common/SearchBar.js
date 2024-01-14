import React from 'react';
import { Button } from "./button"; 
import './SearchBar.css';

/* const SearchBar = ({value, handleSearchKey, clearSearch, formSubmit}) => {
      <div className="searchBar-wrap">
      <form onSubmit={formSubmit}>
        <input
          //type="text"
          onChange={handleSearchKey}
          placeholder="Search By Category"
          value={value}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
          id="submit"
        >
          Go
        </Button>
      </form>
    </div>
};

export default SearchBar; */

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
{/*         <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
          id="submit"
        >
          Go
        </Button> */}
      <button>GO</button>
    </form>
  </div>
);

export default SearchBar;