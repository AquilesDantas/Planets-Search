import React, { useContext } from 'react';
import SWcontext from '../context/SWcontext';

export default function FilteredByName() {
  const { setFilterByName } = useContext(SWcontext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Buscar por nome"
        onChange={ (e) => setFilterByName(e.target.value) }
      />
    </div>
  );
}
