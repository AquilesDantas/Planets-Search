import React, { useContext } from 'react';
import SWcontext from '../context/SWcontext';
import SelectFilter from '../components/SelectFilter';
import HeaderTable from '../components/HeaderTable';
import BodyTable from '../components/BodyTable';
import FilteredByName from '../components/FilteredByName';
import RenderFilteredByName from '../components/RenderFilteredByName';
import RenderFilteredByNumericValues from '../components/RenderFilteredByNumericValues';
import Spinner from 'react-bootstrap/Spinner';
import './initialPage.css';

export default function InitialPage() {

  function loadingSpinner() {
    return (
      <div className="text-center align-div">
      <Spinner animation="border" variant="warning" className="spinner"/>
    </div>
    )
  };

  const { loadingPage } = useContext(SWcontext);

  return (
    <div className="align-middle">
      <h1 className="header text-warning row d-flex justify-content-center">Star Wars - Planets Search</h1>
      { loadingPage ? loadingSpinner() : (
      <>
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
      </>
      )};
    </div>
  );
}
