import React, { useContext } from 'react';
import SWcontext from '../context/SWcontext';

function comparisonFilter(filterValues, setfilterValues) {
  return (
    <select
      className="h4 text-light bg-dark"
      data-testid="comparison-filter"
      name="comparison"
      id="comparison"
      value={ filterValues.comparison }
      onChange={ (e) => setfilterValues({ ...filterValues, comparison: e.target.value }) }
    >
      <option value="maior que">greater than</option>
      <option value="igual a">equal to</option>
      <option value="menor que">less than</option>
    </select>
  );
}

function valueFilter(filterValues, setfilterValues) {
  return (
    <input
      className="h4 text-light bg-dark"
      data-testid="value-filter"
      type="number"
      value={ filterValues.value }
      onChange={ (e) => setfilterValues({ ...filterValues, value: e.target.value }) }
    />
  );
}

function handleButtonFilter(key, setKey) {
  if (key.filteredValuesKey) {
    return (
      setKey({ ...key, filteredValuesKey: false })
    );
  }
  if (!key.filteredValuesKey) {
    return (
      setKey({ ...key, filteredValuesKey: true })
    );
  }
}

export default function Filter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    keys,
    setKeys,
    optionsNumericValues,
    setOptionsNumericValues,
  } = useContext(SWcontext);

  function removeOptionFilter() {
    return (
      setOptionsNumericValues(optionsNumericValues.filter((option) => (
        option !== filterByNumericValues.column
      )))
    );
  }

  return (
    <div>
      <label htmlFor="selectParameters" className="h4 text-warning">
        <h4>Search by parameters:</h4>
        <select
          className="h4 text-light bg-dark"
          id="selectParameters"
          data-testid="column-filter"
          value={ filterByNumericValues.column }
          onChange={ (e) => setFilterByNumericValues({
            ...filterByNumericValues, column: e.target.value }) }
        >
          {optionsNumericValues.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))}
        </select>
        {comparisonFilter(filterByNumericValues, setFilterByNumericValues)}
        {valueFilter(filterByNumericValues, setFilterByNumericValues)}
        <button
          className="btn btn-outline-warning btn-md"
          data-testid="button-filter"
          type="button"
          onClick={ () => {
            handleButtonFilter(keys, setKeys);
            removeOptionFilter();
          } }
        >
          Filter
        </button>
      </label>
    </div>
  );
}
