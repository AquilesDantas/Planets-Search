/* eslint-disable max-len */
import React from 'react';

function headerTable() {
  return (
    <thead>
      <tr>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Name</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Rotation period</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Orbital period</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Diameter</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Climate</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Gravity</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Terrain</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Surface water</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Population</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Films</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Created</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">Edited</th>
        <th className="col py-3 px-md-5 border border-warning bg-dark align-middle text-warning">URL</th>
      </tr>
    </thead>
  );
}

export default function HeaderTable() {
  return (
    <>
      {headerTable()}
    </>
  );
}
