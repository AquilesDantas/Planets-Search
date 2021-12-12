import React from 'react';
import SWcontext from '../context/SWcontext';

function headerTable() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Rotation period</th>
        <th>Orbital period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
    </thead>
  );
}

function infoTable(data) {
  if (data !== undefined) {
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
}

export default function Table() {
  return (
    <SWcontext.Consumer>
      {
        (data) => (
          <table>
            {headerTable()}
            {infoTable(data)}
          </table>
        )
      }
    </SWcontext.Consumer>
  );
}
