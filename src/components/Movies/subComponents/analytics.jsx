import React from 'react';

const Analytics = ({ filtered, totalStocks, totalStocksPerPage }) => {

  return (
    <>
      <p className='container'>Total no of movies available: {filtered}</p>
      <p className='container'>Total no of Movies In Stock: {totalStocks}</p>
      <p className='container'>Total no of Movies In Stock for this page: {totalStocksPerPage}</p>
    </>
  );
};

export default Analytics;
