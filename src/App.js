import React from 'react';
import './App.css';
import InitialPage from './pages/InitialPage';
import SWprovider from './context/SWprovider';

function App() {
  return (
    <div>
      <SWprovider>
        <InitialPage />
      </SWprovider>
    </div>
  );
}

export default App;
