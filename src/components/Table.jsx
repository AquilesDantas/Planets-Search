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
  return null;
}
