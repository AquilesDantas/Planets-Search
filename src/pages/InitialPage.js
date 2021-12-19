import React from 'react';
import SelectFilter from '../components/SelectFilter';
import HeaderTable from '../components/HeaderTable';
import Table from '../components/Table';
import FilteredByName from '../components/FilteredByName';
import RenderFilteredByName from '../components/RenderFilteredByName';

export default function initialPage() {
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <FilteredByName />
      <SelectFilter />
      <table>
        <HeaderTable />
        <Table />
        <RenderFilteredByName />
      </table>
    </div>
  );
}
