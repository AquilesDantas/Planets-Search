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
            <td className="text-warning font-weight-bold">{ item.name }</td>
            <td className="text-warning">{ item.rotation_period }</td>
            <td className="text-warning">{ item.orbital_period }</td>
            <td className="text-warning">{ item.diameter }</td>
            <td className="text-warning">{ item.climate}</td>
            <td className="text-warning">{ item.gravity }</td>
            <td className="text-warning">{ item.terrain }</td>
            <td className="text-warning">{ item.surface_water }</td>
            <td className="text-warning">{ item.population }</td>
            <td className="text-warning">{ item.films }</td>
            <td className="text-warning">{ item.created }</td>
            <td className="text-warning">{ item.edited }</td>
            <td className="text-warning">{ item.url }</td>
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
            <td className="text-warning font-weight-bold">{ item2.name }</td>
            <td className="text-warning">{ item2.rotation_period }</td>
            <td className="text-warning">{ item2.orbital_period }</td>
            <td className="text-warning">{ item2.diameter }</td>
            <td className="text-warning">{ item2.climate}</td>
            <td className="text-warning">{ item2.gravity }</td>
            <td className="text-warning">{ item2.terrain }</td>
            <td className="text-warning">{ item2.surface_water }</td>
            <td className="text-warning">{ item2.population }</td>
            <td className="text-warning">{ item2.films }</td>
            <td className="text-warning">{ item2.created }</td>
            <td className="text-warning">{ item2.edited }</td>
            <td className="text-warning">{ item2.url }</td>
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
            <td className="text-warning font-weight-bold">{ item3.name }</td>
            <td className="text-warning">{ item3.rotation_period }</td>
            <td className="text-warning">{ item3.orbital_period }</td>
            <td className="text-warning">{ item3.diameter }</td>
            <td className="text-warning">{ item3.climate}</td>
            <td className="text-warning">{ item3.gravity }</td>
            <td className="text-warning">{ item3.terrain }</td>
            <td className="text-warning">{ item3.surface_water }</td>
            <td className="text-warning">{ item3.population }</td>
            <td className="text-warning">{ item3.films }</td>
            <td className="text-warning">{ item3.created }</td>
            <td className="text-warning">{ item3.edited }</td>
            <td className="text-warning">{ item3.url }</td>
          </tr>
        ))}
      </tbody>
    );
  }
  return null;
}
