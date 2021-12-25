import React, { useContext } from 'react';
import SWcontext from '../context/SWcontext';

function comparisonFilter(filterValues, setfilterValues) {
  return (
    <select
      data-testid="comparison-filter"
      name="comparison"
      id="comparison"
      value={ filterValues.comparison }
      onChange={ (e) => setfilterValues({ ...filterValues, comparison: e.target.value }) }
    >
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
    </select>
  );
}

function valueFilter(filterValues, setfilterValues) {
  return (
    <input
      data-testid="value-filter"
      type="number"
      value={ filterValues.value }
      onChange={ (e) => setfilterValues({ ...filterValues, value: e.target.value }) }
    />
  );
}

function orderFilter() {
  return (
    <select
      name="order"
      id="order"
      value={ 3 }
      onChange={ 3 }
    >
      <option value="">Rotation period</option>
      <option value="">Orbital period</option>
      <option value="">Diameter</option>
      <option value="">Surface water</option>
      <option value="">Population</option>
    </select>
  );
}

function sequenceFilter() {
  return (
    <>
      <label htmlFor="sequence-asc">
        Ascendente
        <input type="radio" name="sequence-asc" />
      </label>
      <label htmlFor="sequence-desc">
        Descendente
        <input type="radio" name="sequence-desc" />
      </label>
    </>
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
      <select
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
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          handleButtonFilter(keys, setKeys);
          removeOptionFilter();
        } }
      >
        Filtrar
      </button>
      {orderFilter()}
      {sequenceFilter()}
      <button type="button">Ordenar</button>
    </div>
  );
}
