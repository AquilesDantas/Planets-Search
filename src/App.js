import React, { useEffect, useState } from 'react';
import './App.css';
import InitialPage from './pages/InitialPage';
import SWcontext from './context/SWcontext';

function App() {
  const [planetsList, setPlanetsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setPlanetsList(data);
    }
    fetchData();
  }, []);

  const contextValue = {
    data: planetsList.results,
  };

  return (
    <SWcontext.Provider value={ contextValue.data }>
      <div>
        <InitialPage />
      </div>
    </SWcontext.Provider>
  );
}

export default App;
