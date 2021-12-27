import React from 'react';

const SearchBar = ({input:keyword,onChange:setKeyword}) => {
  return (
    <>
    <div className="wrap">
      <div className="search">

        <div className="searchButton"><img title="search icon" alt="loupe.svg" src="/static/images/icon/loupe.svg" ></img></div>
        <input 
        className="searchTerm"
        key="random1"
        value={keyword}
        placeholder={"Search templates"}
        onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
    </div>
    </>
  );
}

export default SearchBar