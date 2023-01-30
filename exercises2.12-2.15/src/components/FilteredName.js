import React from 'react'

const FilteredName = ({ filteredName, setFilteredName }) => {
  return (
    <form>
    Filter by name: <input
      type="text"
      name="filteredName"
      value={filteredName}
      onChange={(e) => setFilteredName(e.target.value)}          
    />
  </form>
  )
}

export default FilteredName