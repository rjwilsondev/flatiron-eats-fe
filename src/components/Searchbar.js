import React from 'react'

const Searchbar = (props) => {
  return  (
    <div>
        <input
            type="text"
            placeholder="Search..."
            onChange={props.changingSearch}
            value={props.searchText}
        />
        <button></button>
    </div>
  )
}

export default Searchbar