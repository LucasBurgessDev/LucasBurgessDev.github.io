import React from 'react';
import { Button } from "./button"; 
import './SearchBar.css';

export const SearchBar = (value, handSearchKey, clearSearch, formSubmit) => {
    return (
      <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
          <input
            type='text'
            onChange={handSearchKey}
            placeholder='Search By Category'
            value={value}
          />
          {value && <span onClick={clearSearch}>X</span>}
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--medium'
            id='submit'
          >
            Go
          </Button>
        </form>
      </div>
    );
};
