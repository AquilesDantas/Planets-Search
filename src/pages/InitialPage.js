import React from 'react';
// import { Button } from 'react-bootstrap';
import SelectFilter from '../components/SelectFilter';
import HeaderTable from '../components/HeaderTable';
import BodyTable from '../components/BodyTable';
import FilteredByName from '../components/FilteredByName';
import RenderFilteredByName from '../components/RenderFilteredByName';
import RenderFilteredByNumericValues from '../components/RenderFilteredByNumericValues';
import './initialPage.css';

export default function initialPage() {
  return (
    <div className="align-middle">
      <h1 className="header text-warning row d-flex justify-content-center">Star Wars - Planet Search</h1>
      <div>
        <FilteredByName />
        <SelectFilter />
      </div>
      <div className="table-responsive">
        <table className="table">
          <HeaderTable />
          <BodyTable />
          <RenderFilteredByName />
          <RenderFilteredByNumericValues />
        </table>
      </div>
    </div>
  );
}
