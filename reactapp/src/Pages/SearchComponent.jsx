import React, { useState } from 'react'

export default function SearchComponent(props) {

  const [search, setSearch] = useState('');
  const Search = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("enter Id / Name");
      return
    }
    props.searchHandler(search);
    setSearch('');
  }

  return (
    <div>
      <div id='Search'>
        <form onSubmit={Search}>
          <input type="search" name="search" id="" placeholder="Enter Name / Id "
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
          />
          <input type="submit" value={"Search"} />
        </form>
      </div>

    </div>
  )
}
