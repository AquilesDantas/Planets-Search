import React, { useContext } from 'react';
import SWcontext from '../context/SWcontext';

export default function RenderFilteredByName() {
  const { data, filterByName, keys } = useContext(SWcontext);
  const { filteredValuesKey } = keys;

  if (data && filterByName && !filteredValuesKey) {
    return (
      <tbody>
        {data.filter((planet) => (planet.name).includes(filterByName)).map((item) => (
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
  if (data && !filteredValuesKey) {
    return (
      <tbody>
        {data.map((planet) => (
          <tr key={ planet.id }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate}</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    );
  }
  return null;
}
