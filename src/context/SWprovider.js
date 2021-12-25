import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SWcontext from './SWcontext';

export default function SWprovider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [keys, setKeys] = useState({
    filteredValuesKey: false,
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  );

  const [saveFilterByNumericValues, setSaveFilterByNumericValues] = useState([]);

  const [optionsNumericValues, setOptionsNumericValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setPlanetsList(data);
    }
    fetchData();
  }, []);

  const contextValue = {
    data: planetsList.results,
    setFilterByName,
    filterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    keys,
    setKeys,
    optionsNumericValues,
    setOptionsNumericValues,
    saveFilterByNumericValues,
    setSaveFilterByNumericValues,
  };

  return (
    <SWcontext.Provider value={ contextValue }>
      {children}
    </SWcontext.Provider>
  );
}

SWprovider.propTypes = {
  children: PropTypes.string.isRequired,
};
