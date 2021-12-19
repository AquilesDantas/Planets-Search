import React from 'react';

function columnFilter() {
  return (
    <select
      name="column"
      id="column"
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

function operatorFilter() {
  return (
    <select
      name="operator"
      id="operator"
      value={ 3 }
      onChange={ 3 }
    >
      <option value="">Menor que</option>
      <option value="">Maior que</option>
      <option value="">Igual a</option>
    </select>
  );
}

function countFilter() {
  return (
    <input type="number" />
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

export default function Filter() {
  return (
    <div>
      {columnFilter()}
      {operatorFilter()}
      {countFilter()}
      <button type="button">Filtrar</button>
      {orderFilter()}
      {sequenceFilter()}
      <button type="button">Ordenar</button>
    </div>
  );
}
