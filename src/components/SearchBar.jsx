import React from 'react'

function SearchBar({ handleSearch }) {

  return (
    <div className='search-bar'>
        <label htmlFor="search"> Search:
            <input type="text" onChange={(e) => handleSearch(e)} />
        </label>
    </div>
  )
}

export default SearchBar