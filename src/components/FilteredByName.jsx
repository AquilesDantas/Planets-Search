import React, { useContext } from 'react';
import SWcontext from '../context/SWcontext';

export default function FilteredByName() {
  const { setFilterByName } = useContext(SWcontext);

  return (
    <div className="form-group">
      <label htmlFor="name-filter" className="h4 text-warning">
        <h4>Search by Name:</h4>

        <input
          className="h4 text-light bg-dark"
          id="name-filter"
          type="text"
          placeholder="Insert name for planet"
          onChange={ (e) => setFilterByName(e.target.value) }
        />
      </label>
    </div>
  );
}
