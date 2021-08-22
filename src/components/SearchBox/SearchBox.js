import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className='pa2 ba b--black bg-lightest-gray w-20'
        type='search'
        placeholder='Search for a Folder or a File'
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;