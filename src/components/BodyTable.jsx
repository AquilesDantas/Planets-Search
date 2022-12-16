import React, { useContext } from 'react';
import SWcontext from '../context/SWcontext';

export default function Table() {
  const { data, filterByName, keys } = useContext(SWcontext);
  const { filteredValuesKey } = keys;
  const filteredName = filterByName.name;

  if (data && filteredName === '' && !filteredValuesKey) {
    return (
      <tbody>
        {data.map((item) => (
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
  return null;
}
