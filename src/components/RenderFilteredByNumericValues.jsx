import React, { useContext } from 'react';
import SWcontext from '../context/SWcontext';

export default function RenderFilteredByNumericValues() {
  const { data, filterByNumericValues, keys } = useContext(SWcontext);
  const { column } = filterByNumericValues;
  const { comparison } = filterByNumericValues;
  const { value } = filterByNumericValues;
  const valueConvert = Number(value);
  const { filteredValuesKey } = keys;

  if (comparison === 'maior que' && filteredValuesKey) {
    return (
      <tbody>
        {data.filter((planet) => (planet[column] > valueConvert)).map((item) => (
          <tr key={ item.id }>
            <td>{ item.name }</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter }</td>
            <td>{ item.climate}</td>
            <td>{ item.gravity }</td>
            <td>{ item.terrain }</td>
            <td>{ item.surface_water }</td>
            <td>{ item.population }</td>
            <td>{ item.films }</td>
            <td>{ item.created }</td>
            <td>{ item.edited }</td>
            <td>{ item.url }</td>
          </tr>
        ))}
      </tbody>
    );
  }
  if (comparison === 'menor que' && filteredValuesKey) {
    return (
      <tbody>
        {data.filter((planet) => (planet[column] < valueConvert)).map((item2) => (
          <tr key={ item2.id }>
            <td>{ item2.name }</td>
            <td>{ item2.rotation_period }</td>
            <td>{ item2.orbital_period }</td>
            <td>{ item2.diameter }</td>
            <td>{ item2.climate}</td>
            <td>{ item2.gravity }</td>
            <td>{ item2.terrain }</td>
            <td>{ item2.surface_water }</td>
            <td>{ item2.population }</td>
            <td>{ item2.films }</td>
            <td>{ item2.created }</td>
            <td>{ item2.edited }</td>
            <td>{ item2.url }</td>
          </tr>
        ))}
      </tbody>
    );
  }
  if (comparison === 'igual a' && filteredValuesKey) {
    return (
      <tbody>
        {data.filter((planet) => (planet[column] === value)).map((item3) => (
          <tr key={ item3.id }>
            <td>{ item3.name }</td>
            <td>{ item3.rotation_period }</td>
            <td>{ item3.orbital_period }</td>
            <td>{ item3.diameter }</td>
            <td>{ item3.climate}</td>
            <td>{ item3.gravity }</td>
            <td>{ item3.terrain }</td>
            <td>{ item3.surface_water }</td>
            <td>{ item3.population }</td>
            <td>{ item3.films }</td>
            <td>{ item3.created }</td>
            <td>{ item3.edited }</td>
            <td>{ item3.url }</td>
          </tr>
        ))}
      </tbody>
    );
  }
  return null;
}
