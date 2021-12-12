import React from 'react';
import Filter from '../components/Filter';
import Table from '../components/Table';

export default function initialPage() {
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input type="text" placeholder="Buscar por nome" />
      <Filter />
      <Table />
    </div>
  );
}
