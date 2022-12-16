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
  if (data && !filteredValuesKey) {
    return (
      <tbody>
        {data.map((planet) => (
          <tr key={ planet.id }>
            <td className="text-warning font-weight-bold">{ planet.name }</td>
            <td className="text-warning">{ planet.rotation_period }</td>
            <td className="text-warning">{ planet.orbital_period }</td>
            <td className="text-warning">{ planet.diameter }</td>
            <td className="text-warning">{ planet.climate}</td>
            <td className="text-warning">{ planet.gravity }</td>
            <td className="text-warning">{ planet.terrain }</td>
            <td className="text-warning">{ planet.surface_water }</td>
            <td className="text-warning">{ planet.population }</td>
            <td className="text-warning">{ planet.films }</td>
            <td className="text-warning">{ planet.created }</td>
            <td className="text-warning">{ planet.edited }</td>
            <td className="text-warning">{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    );
  }
  return null;
}
